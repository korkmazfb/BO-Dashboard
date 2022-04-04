
var KW = [3118, 3115, 3120, 3115, 3125, 3120, 3110,];
var weken = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weken,
        datasets: [{
            label: 'elektriciteit per week in KWH',
            data: KW,
            backgroundColor: [
                "#549fbc",
            ],
            borderColor: "#6cadc6",
            borderwidth: 1,
            fill: false,
            lineTension: 0
        }]
    }
})


var KWH = [4050, 3800, 4100, 3500, 4578, 4575, 3800];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('Bilals_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'elektriciteit verbruik in KWH',
                data: KWH,
                backgroundColor: [
                    "#ffca57",
                    "#ffc546",
                    "#ffb002",
                    "#ce8e00",
                    "#ac7600",
                    "#df9900",
                    "#ce8d00",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});

var KWH = [11, 15, 13, 9, 15, 17, 10 ];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('Halil_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Water verbruik per week in liter',
                data: KWH,
                backgroundColor: [
                    "#85b9cb",
                    "#6dabc1",
                    "#559db7",
                    "#468ba4",
                    "#418198",
                    "#316375",
                    "#224551",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});

var KW = [11, 12, 12, 9, 9, 9, 11, 14, 11,];
var week = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
var ctx = document.getElementById('Halil_Chart_2');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: week,
        datasets: [{
            label: 'Buiten Temperatuur in graden celsuis',
            data: KW,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)" ],
                borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                ],
            borderwidth: 1,
            fill: false,
            lineTension: 0,
            borderRadius: 5
            
            
        }]
    }
});


var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var seconds = currentTime.getSeconds()
if (minutes < 10) {
    minutes = "0" + minutes
}
var t_str = hours + ":" + minutes + ":" + seconds;
if (hours > 11) {
    t_str += "UUR";
} else {
    t_str += "UUR";
}
document.getElementById('time_span').innerHTML = t_str;
datum.innerHTML = dateTime;



let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);

var datum = document.getElementById("tijd")
datum.innerHTML = dateTime;



function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var c = parseInt(document.querySelector("#value3").value);
    var op = document.querySelector("#operator").value;

    var calculate;

    if (op == "elec") {
        calculate = a * 0.15 + b * 0.15 + c * 0.15;
        
    }
    else if (op == "Water") {
        calculate = a * 0.87 + b * 0.87 + c * 0.87;
    }
    else if (op == "Gas") {
        calculate = a * 2.66 + b * 2.66 + c * 2.66;
    }
    document.querySelector("#totaal").innerHTML = ("Dat gaat " + calculate + " euro kosten");
}

function changeSelect() {
    console.log("verander dingen");
}

