// Lista de productos
function Lugares(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const gtav = new Lugares("#GTA5", 4000);
const mario = new Lugares("#Mario", 4200);
const pokemon = new Lugares("#Pokemon", 4300);
const zelda = new Lugares("#Zelda", 4500);
const got = new Lugares("#GoT", 5000);
const hp = new Lugares("#HarryPotter", 9000);
const anillos = new Lugares("#SeñordelosAnillos", 6000);
const wakanda = new Lugares("#Wakanda", 6500);
const bosque = new Lugares("#BosqueEncantado", 8000);
const univ = new Lugares("#Universo", 7500);
const futuro = new Lugares("#Futuro", 8200);
const hosp = new Lugares("#HospitalAbandonado", 9500);
const stock = [gtav, mario, pokemon, zelda, got, hp, anillos, wakanda, bosque, univ, futuro, hosp]



const aJson = JSON.stringify(stock)
localStorage.setItem('Productos', aJson)
let deJson = JSON.parse(localStorage.getItem('Productos'))
console.log(deJson);


//array valores
let carrito = [];

//array descriptivo de los productos seleccionados
let descripcion = [];


const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');


//creacion de cartas de productos
// stockProductos.forEach((prod) => {
//     const { id, nombre, precio, tipo, img } = prod;
//     if (contenedor) {
//         contenedor.innerHTML += `
//         <div class="card mt-3" style="width: 23rem;">
//         <img class="card-img-top mt-2" src="${img}" alt="producto">
//         <div class="card-body">
//             <p class="borrar"> ${id} </p>
//             <h3 class="card-title neon">${nombre}</h3>
//             <p class="card-text neon"> ${tipo}</p>
//             <p class="card-text valor">Valor por dia: $${precio}</p>
//             <input type="text" name="dias" id="dias" placeholder="Dias a contratar" class="dias">
//             <br>
//             <button class="custom-btn btn-3" onclick="agregarProducto(${precio})">Agregar al carro</button>
//         </div>
//     </div>
//         `;
//     }
// });
//funcionalidad del boton para agregar al carro
function agregarProducto(precio, nombre) {

    let dias = document.querySelector(nombre).value;
    let suma = precio * dias;
    let resultado = "$" + precio + " x " + dias + " dias= $" + suma;


    carrito.push(suma);
    descripcion.push(resultado);

    localStorage.setItem('Articulos', descripcion)

    let total = 0
    carrito.forEach(function(a) {
        total += a;
    });
    console.log(total);
    localStorage.setItem('Total', total)


    mostrarCarrito();

    //Contenido del carro
    function mostrarCarrito() {

        //descripcion del contenido del carro
        document.getElementById('modal-carro').innerHTML = ""
        descripcion.forEach(function(element) {
            document.getElementById('modal-carro').innerHTML += `<p> ${element} </p>`;
        });

        //suma del valor total
        document.getElementById('modal-total').innerHTML = ` <p>Total: $${total}</p>`
    }
}


// // AGREGAR PRODUCCTOS DESDE EL HTML

// function crearProducto(id, nombre, tipo, precio, img) {
//     let id = document.querySelector('#id').value;
//     let nombre = document.querySelector('#nombre').value;
//     let tipo = document.querySelector('#tipo').value;
//     let precio = document.querySelector('#precio').value;
//     let img = document.querySelector('#img').value;

//     this.id = id;
//     this.nombre = nombre;
//     this.tipo = tipo;
//     this.precio = precio;
//     this.img = img;


//     stockProductos.push()
// }