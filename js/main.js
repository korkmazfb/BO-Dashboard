var stars = [5, 6, 8, 2, 6, 7, 2,];
var frameworks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']; 
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type:'line',     
    data: {
        labels: frameworks,
        datasets: [{
            label: 'het aantal gasverbruik in de afgelopen weken',
            data: stars,
            backgroundColor: [
                "#549fbc",
            ],
            borderColor: "#6cadc6",
            borderwidth:1,
            fill: false,
            lineTension: 0
        }]
    } 
})