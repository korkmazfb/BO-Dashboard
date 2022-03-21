
var KW = [5, 6, 8, 2, 6, 7, 2,];
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


var KWH = [135, 152, 148, 169, 197];
var week = ['week1', 'week2', 'week3', 'week4', 'week5'];
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
                    "#3C6E2E",
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

