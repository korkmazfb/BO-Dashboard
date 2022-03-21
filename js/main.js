
var KW = [5, 6, 8, 2, 6, 7, 2,];
var weken = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']; 
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type:'line',     
    data: {
        labels: weken,
        datasets: [{
            label: 'het aantal gasverbruik in de afgelopen weken',
            data: KW,
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

{ "liveweer"
[{"plaats": "Amsterdam", "temp": "8.1", "gtemp": "6.2", "samenv": "Onbewolkt", "lv": "71", "windr": "ZZO", "windrgr": "157", "windms": "3", "winds": "2", "windk": "5.8", "windkmh": "10.8", "luchtd": "1031.4", "ldmmhg": "774", "dauwp": "3", "zicht": "12", "verw": "Veel zon en (zeer) zacht", "sup": 
"06:39", "sunder": "18:56", "image": "zonnig", "d0weer": "halfbewolkt", "d0tmax": "15", "d0tmin": "2", "d0windk": "2", "d0windknp": "4", "d0windms": "2", "d0windkmh": "7", "d0windr": "ZO", "d0windrgr": "135", "d0neerslag": "0", "d0zon": "79", "d1weer": "zonnig", "d1tmax": "19", "d1tmin": "4", "d1windk": "2", 
"d1windknp": "4", "d1windms": "2", "d1windkmh": "7", "d1windr": "ZO", "d1windrgr": "135", "d1neerslag": "10", "d1zon": "80", "d2weer": "halfbewolkt", "d2tmax": "15", "d2tmin": "2", "d2windk": "2", "d2windknp": "4", "d2windms": "2", "d2windkmh": "7", "d2windr": "O", "d2windrgr": "90", "d2neerslag": "10", "d2zon":
"70", "alarm": "0"}]}

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

