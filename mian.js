let dias = 0
let precio = 0

function consultaDias(precio) {
    let dias = parseInt(prompt("Cuantas dias quiere cotizar?: "));
    //En caso de que ponga 0 dias
    while (dias <= 0) {
        dias = prompt("Ingrese una cantidad valida de dias");
    }

    //Consulta por servicio VIP
    let vip = parseInt(prompt("Quieren el servicio vip? Ingrese 1 si lo quiere, o 0 si no"));
    let suma = dias * parseInt(precio);
    if (vip === 1) {
        suma += suma * 0.2;
    }

    //Imprimir en pantalla y en consola
    document.getElementById("carro").innerHTML = dias + " dias" + " x " + " $" + precio + "=" + " $" + suma
    console.log(dias + " dia/s" + " x " + " $" + precio + "=" + " $" + suma);
}












// if (dias > 0) {
//     let suma = dias * parseInt(precio);
//     document.getElementById("carro").innerHTML = dias + " dias" + " x " + " $" + precio + "=" + " $" + suma
//     console.log(dias + " dia/s" + " x " + " $" + precio + "=" + " $" + suma);
// } else {
// }
// if (dias <= 0) {
//     do {
//     } while (dias <= 0)

// for (let contador = 1; contador <= cantCoti; contador++) {
//     let dias = parseInt(prompt("Cuantos dias quieres contratar?"));