/*  
 *   Mediacollege Duurzaam huis BO
 *   Les 6
 *   Data in JSON format uploaden naar server  
 *   JSON Data moet in Ma-cloud uitgelezen worden
 *   DHT11 temperature + humidity sensor + LDR
*/

#include "DHT.h"
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include "secrets.h"
// signalering
int Led1 = D3; // Led op D3
uint8_t Led2 = D5; //Led op D5

// DHT11 temperature humidity sensor
#define DHTTYPE DHT11   // Sensor type instellen
#define DHTPIN D7 // Aan welke pin zit de sensor?

// Variabelen voor de temperatuur en luchtvochtigheid en hitte-index
DHT dht(DHTPIN, DHTTYPE);
float temperature, humidity, heatindex;


// Variabelen voor de lichtsensor LDR
int LDR_In = A0; // de spanningsdeler wordt aangesloten op analog input A0
int lichtHoeveelheid; // variable lichtHoeveelheid


//Variabelen voor opsturen naar server als JSON structuur
#define ARDUINOJSON_USE_DOUBLE 0
#define ARDUINOJSON_USE_LONG_LONG 0

// Include de JSON library en initialiseer variable voor het JSON document
#include <ArduinoJson.h>
StaticJsonDocument<128> doc;

// SHA1 key from SSL certificate
const char fingerprint[] PROGMEM = "61 03 F5 49 1F 6C BB 9E 53 EC 29 38 C7 D1 CB A9 D9 87 F3 8A";
WiFiClientSecure client;

void setup() {
  // Led op D3 wordt gebruikt voor signalering
  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  
  // Zet de Led AAN (tot WiFi is verbonden....)
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

  Serial.begin(115200);         // Start the Serial communication to send messages to the computer
  delay(10);
  Serial.println('\n');

  // Verbinding maken met WiFi netwerk
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  String message = String("Connecting to ") + WIFI_SSID + String(" ...");
  Serial.println(message);

  // Wachten tot WiFi is verbonden
  int i = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print('.');
  }

  // Zet de Led UIT
  digitalWrite(LED_BUILTIN, HIGH);

// Debug informatie
  Serial.println('\n');
  Serial.println("WIFI connected");
  Serial.print("NodeMCU IP:\t");
  Serial.println(WiFi.localIP());

  // Setup HTTPS: & Timeout
  client.setFingerprint(fingerprint);
  client.setTimeout(5000); // 15 Seconds

}

void loop() {
  // laat zien dat computer runt
  digitalWrite(Led1, HIGH); // led aan

  
  // Lees de sensoren uit
  lichtHoeveelheid = analogRead(LDR_In);  // lees de input waarde van de LDR

  
  if ( lichtHoeveelheid <600){
  // donker, Led aan
  digitalWrite(Led2, HIGH);
  }
  else{
    // licht, led uit
    digitalWrite(Led2, LOW);
  }
  
  humidity = dht.readHumidity();
  temperature = dht.readTemperature();

  if (isnan(humidity) || isnan(temperature)) {
    humidity = 0;
    temperature = 0;
    Serial.println(F("Failed to read from DHT sensor!"));
    //return;
  }
 
  heatindex = dht.computeHeatIndex(temperature, humidity, false);
  debugSensorData(temperature, humidity, heatindex, lichtHoeveelheid);
  createJsonDocument(temperature, humidity, heatindex, lichtHoeveelheid);
  sendToSerial();
  sendToServer();
  digitalWrite(Led1,LOW); // led uit
  // Stuur elke 10 seconden een meting door
  delay(10000);
}

void debugSensorData(float temperature, float humidity, float heatindex, float lichtHoeveelheid) {
  Serial.print(F("Temperature: "));
  Serial.print(temperature);
  Serial.print(F("°C, Humidity: "));
  Serial.print(humidity);
  Serial.print(F("%,  Heat index: "));
  Serial.println(heatindex);
  Serial.print(F("Lichthoeveelheid: "));
  Serial.print(lichtHoeveelheid);
}

void createJsonDocument(float temperature, float humidity, float heatindex, float lichtHoeveelheid) {
  doc["device_key"] = DEVICE_KEY;
  doc["sensor"] = "DHT11 + LDR";
  doc["value1"] = temperature;
  doc["value2"] = humidity;
  //doc["value3"] = heatindex;
  doc["value3"] = lichtHoeveelheid;
  
}


void sendToSerial() {
  serializeJson(doc, Serial);
  Serial.println();
}

void sendToServer() {
  int connected;

  Serial.print(SERVER_HOST);
  Serial.print(":");
  Serial.println(SERVER_PORT);

  connected = client.connect(SERVER_HOST, SERVER_PORT);

  if (!connected)
  {
    Serial.println("Unable to connect to server "  SERVER_HOST);
    int cert_result = client.getLastSSLError(NULL, 0);
    if (cert_result == -1)
      Serial.println(F("ERR: No Server Connection"));
    else if (cert_result < 0)
      Serial.println(F("ERR: Certificate or Certificate-Chain Error"));

    return;
  }

  Serial.println("Sending POST /api/measurement HTTP/1.0");

  // Sending headers
  client.print("POST /api/measurement HTTP/1.0\r\n");  // origineel
  client.print("Host: " SERVER_HOST "\r\n");
  client.print("Content-Length: ");
  client.print(measureJson(doc));
  client.print("\r\n");
  client.print("Content-Type: application/json\r\n");
  client.print("User-Agent: ESP8266\r\n");
  client.print("Connection: close\r\n\r\n");

  // Sending JSON data
  serializeJson(doc, client);

  while (client.connected())
  {
    String line = client.readStringUntil('\n');
    if (line == "\r")
    {
      Serial.println("Response headers received");
      break;
    }
  }

  StaticJsonDocument<48> result_doc;
  DeserializationError error = deserializeJson(result_doc, client);

  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    //Serial.println(error.f_str()); // foutmelding
    Serial.println(error.c_str());
    return;
  }

  const char* result = result_doc["result"]; // "OK"
  Serial.println(result);

}
