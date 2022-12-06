let dias = 0

function consultaDias() {
    let dias = parseInt(prompt("Cuantos dias quieres contratar?"));
    let valor1 = 4000;
    let suma = dias * valor1;
    console.log(dias + " dia/s" + " x " + " $" + valor1 + "=" + " $" + suma);
    if (dias > 0) {
        document.getElementById("carro").innerHTML = dias + " dias" + " x " + " $" + valor1 + "=" + " $" + suma
    }



}