var op = document.querySelector("#operator");
var output = document.getElementById('output');
    op.addEventListener('change', calc);

function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var c = parseInt(document.querySelector("#value3").value);
    

    var calculate;

    if (op.value == "elec") {
        calculate = a * 0.15 + b * 0.15 + c * 0.15;
        output.innerHTML = "In kilowatt per uur!"
    }
    else if (op.value == "Water") {
        calculate = a * 0.87 + b * 0.87 + c * 0.87;
        output.innerHTML = "In kubike Liter!"
    }
    else if (op.value == "Gas") {
        calculate = a * 2.66 + b * 2.66 + c * 2.66;
        output.innerHTML = "In Kubike Liter!"
    }
    if (calculate) { 
        document.querySelector("#totaal").innerHTML = ("Dat gaat " + calculate + " euro kosten.");
    }
    else if(isNaN(calculate)){
        document.querySelector("#totaal").innerHTML = ("Vul wat in!");
    }
}


function changeSelect() {
    console.log("verander dingen");
}
