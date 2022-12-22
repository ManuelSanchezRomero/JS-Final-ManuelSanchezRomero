// Lista de productos
function Lugares(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio
}
const gtav = new Lugares("GTA 5", 4000);
const mario = new Lugares("Mario", 4200);
const pokemon = new Lugares("Pokemon", 4300);
const zelda = new Lugares("Zelda", 4500);
const got = new Lugares("GoT", 5000);
const hp = new Lugares("Harry Potter", 9000);
const anillos = new Lugares("Señor de los Anillos", 6000);
const wakanda = new Lugares("Wakanda", 6500);
const bosque = new Lugares("Bosque Encantado", 8000);
const univ = new Lugares("Universo", 7500);
const futuro = new Lugares("Futuro", 8200);
const hosp = new Lugares("Hospital Abandonado", 9500);

const stock = [gtav, mario, pokemon, zelda, got, hp, anillos, wakanda, bosque, univ, futuro, hosp]



//Funcion del boton "Contratar"
let dias = 0
let precio = 0

function consultaDias(precio) {
    let dias = parseInt(prompt("¿Cuantos dias quiere contratar?: "));
    //En caso de que ponga 0 dias
    while (dias <= 0) {
        dias = prompt("Ingrese una cantidad valida de dias");
    }

    //Consulta por servicio VIP
    let vip = parseInt(prompt("¿Desea el servicio VIP? Ingrese 1 si lo quiere, o 0 si no"));
    let suma = dias * parseInt(precio);
    if (vip === 1) {
        suma += suma * 0.2;
    }
    let resultado = dias + " dias" + " x" + " $" + precio + "=" + " $" + suma
    let carrito = []
    carrito.push(resultado)

    //Imprimir en pantalla y en consola
    console.log(carrito);
    document.getElementById("carro").innerHTML = carrito

}

function info() {
    alert("el servicio VIP tiene un recargo del 20% sobre el total")
}
//-----------------------------------------------BORRADOR ----------------------------------------------------------------------


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





// stock = [gtav, mario, pokemon, zelda, got, hp, anillos, wakanda, bosque, univ, futuro, hosp];
// console.log(stock);

// function lugares(nombre, precio, ) {
//     this.nombre = nombre;
//     this.precio = precio
// }
// const gtav = new lugares(gtav, 4000);
// const mario = new lugares(mario, 4200);
// const pokemon = new lugares(pokemon, 4300);
// const zelda = new lugares(zelda, 4500);
// const got = new lugares(got, 5000);
// const hp = new lugares(hp, 9000);
// const anillos = new lugares(anillos, 6000);
// const wakanda = new lugares(wakanda, 6500);
// const bosque = new lugares(bosque, 8000);
// const univ = new lugares(universo, 7500);
// const futuro = new lugares(futuro, 8200);
// const hosp = new lugares(hospital, 9500);