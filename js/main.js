
var KW = [3118, 3115, 3120, 3115, 3125, 3120, 3110,];
var weken = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weken,
        datasets: [{
            label: 'het aantal gasverbruik in de afgelopen weken',
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
                label: 'elektriciteit verbruik',
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

var KWH = [135, 152];
var week = ['Rood is voor mensen die veel verbruiken. ', 'Groen is voor mensen die besparen.',];
var cntxt = document.getElementById('Halil_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Water verbruik',
                data: KWH,
                backgroundColor: [
                    "#ff543c",
                    "#566E4F",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});


