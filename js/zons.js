link = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=404c06892ba05219fddc565047c32644&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    let milliSecondsSindsEpoch = obj.sys.sunrise * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    document.getElementById('location1').innerHTML = obj.name;
    document.getElementById('sunrise1').innerHTML = datum.toLocaleTimeString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } )
    console.log(obj)
}

if (request.status==200){
    console.log("ERROR");
}

request.send();
let datum;
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=404c06892ba05219fddc565047c32644&units=metric';
fetch(URL)
    .then(response => response.json())
    .then(weather => {
        console.log(weather);
        let milliSecondsSindsEpoch = weather.sys.sunrise * 1000;
        datum = new Date(milliSecondsSindsEpoch);
        console.log(datum.toLocaleString());
    });

