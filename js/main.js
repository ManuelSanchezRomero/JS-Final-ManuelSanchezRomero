const stockProductos = [{
        id: 0,
        nombre: "GTA 5",
        tipo: "(JUEGO)",
        precio: 4000,
        img: "./img/juegos/gta.jpg",
        cantidad: 4,
    },
    {
        id: 1,
        nombre: "Mario",
        tipo: "(JUEGO)",
        precio: 4200,
        img: "./img/juegos/mario.jpg",
        cantidad: 4,
    },
    {
        id: 2,
        nombre: "Pokemon",
        tipo: "(JUEGO)",
        precio: 4300,
        img: "./img/juegos/pokemon.png",
        cantidad: 4,
    },
    {
        id: 3,
        nombre: "Zelda",
        tipo: "(JUEGO)",
        precio: 4500,
        img: "./img/juegos/zelda.jpg",
        cantidad: 4,
    },
    {
        id: 4,
        nombre: "Game of Thrones",
        tipo: "(PELICULA/SERIE)",
        precio: 5000,
        img: "./img/peliculas/got.jpg",
        cantidad: 4,
    },
    {
        id: 5,
        nombre: "Harry Potter",
        tipo: "(PELICULA/SERIE)",
        precio: 9000,
        img: "./img/peliculas/hogwats.jpg",
        cantidad: 4,
    },
    {
        id: 6,
        nombre: "Señor de los Anillos",
        tipo: "(PELICULA/SERIE)",
        precio: 6000,
        img: "./img/peliculas/sranillos.jpg",
        cantidad: 4,
    },
    {
        id: 7,
        nombre: "Wakanda",
        tipo: "(PELICULA/SERIE)",
        precio: 6500,
        img: "./img/peliculas/wakanda.jpeg",
        cantidad: 4,
    },
    {
        id: 8,
        nombre: "Bosque Encantado",
        tipo: "(ESPECIAL)",
        precio: 8000,
        img: "./img/especial/bosque.jpg",
        cantidad: 4,
    },
    {
        id: 9,
        nombre: "Universo",
        tipo: "(ESPECIAL)",
        precio: 7500,
        img: "./img/especial/espacio.jpg",
        cantidad: 4,
    },
    {
        id: 10,
        nombre: "Futuro",
        tipo: "(ESPECIAL)",
        precio: 8200,
        img: "./img/especial/futuro.jpg",
        cantidad: 4,
    },
    {
        id: 11,
        nombre: "Hospital Abandonado",
        tipo: "(ESPECIAL)",
        precio: 9500,
        img: "./img/especial/hospital.jpg",
        cantidad: 4,
    },
];
const aJson = JSON.stringify(stockProductos)
localStorage.setItem('Productos', aJson)
let deJson = JSON.parse(localStorage.getItem('Productos'))
console.log(deJson);

// function crearProducto(id, nombre, tipo, precio, img) {
//     id = document.querySelector('#id').value;
//     nombre = document.querySelector('#nombre').value;
//     tipo = document.querySelector('#tipo').value;
//     precio = document.querySelector('#precio').value;
//     img = document.querySelector('#img').value;

//     stockProductos.push()
// }

let carrito = [];
let descripcion = [];


const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');

stockProductos.forEach((prod) => {
    const { id, nombre, precio, tipo, img } = prod;
    if (contenedor) {
        contenedor.innerHTML += `
        <div class="card mt-3" style="width: 23rem;">
        <img class="card-img-top mt-2" src="${img}" alt="producto">
        <div class="card-body">
            <h3 class="card-title neon">${nombre}</h3>
            <p class="card-text neon"> ${tipo}</p>
            <p class="card-text valor">Valor por dia: $${precio}</p>
            <input type="text" name="dias" id="dias" placeholder="Dias a contratar" class="dias">
            <br>
            <button class="custom-btn btn-3" onclick="agregarProducto(${precio})">Agregar al carro</button>
        </div>
    </div>
        `;
    }
});

function agregarProducto(precio) {

    let dias = document.querySelector('#dias').value;
    let suma = precio * dias;
    let resultado = "$" + precio + " x " + dias + " dias= $" + suma;


    carrito.push(suma);
    descripcion.push(resultado);

    localStorage.setItem('Articulos', carrito)

    let total = 0
    carrito.forEach(function(a) {
        total += a;
    });
    console.log(total);
    localStorage.setItem('Total', total)




    function mostrarCarrito() {
        const modalBody = document.querySelector('.modal .modal-body')
        if (modalBody) {
            carrito.forEach(() => {
                modalBody.innerHTML = `
                <div> ${descripcion} </div> <br><br>
                <div id="calculoTotal" class="total"> Total: $${total}</div> `
            })
        }
    }
    mostrarCarrito()
}