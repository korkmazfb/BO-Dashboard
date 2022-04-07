"use strict"
const timeDelay = 10000; // time delay refresh data
let refreshTimer = window.setInterval(renderData, timeDelay); // timer data opvragen van server

// jouw persoonlijke URL
const mijnDataURL = "https://data.softwaredeveloper.amsterdam/api/device/839b5045/latest";

const dataDiv = document.getElementById("dataDiv"); // hier komt de data

async function getSensorData() {
    let url = mijnDataURL;
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let measurementRaw = await getSensorData();
    let measurement = measurementRaw.data[0];
    console.log(measurement);

    // Nieuwe Javascript date maken met de de datum en tijd van de meting
    let datum = new Date(measurement.datum);

    // De meting gegevens wegschrijven naar de div                
    dataDiv.innerHTML = `<h3>Datum: ${datum.toLocaleString()}</h3><p>Sensor: ${measurement.sensor} 
            </p><p>Temperature: ${measurement.value1}
            </p><p> Humidity: ${measurement.value2}  
            </p><p> Heatindex: ${measurement.value3}</p>`
            
            
}

renderData(); // start immediately