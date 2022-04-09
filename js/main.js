
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



