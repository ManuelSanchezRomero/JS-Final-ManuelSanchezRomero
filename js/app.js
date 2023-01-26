const stockProductos = [{
        id: 1,
        nombre: "GTA 5",
        tipo: "(JUEGO)",
        precio: 4000,
        img: "../img/juegos/gta.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Mario",
        tipo: "(JUEGO)",
        precio: 4200,
        img: "../img/juegos/mario.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Pokemon",
        tipo: "(JUEGO)",
        precio: 4300,
        img: "../img/juegos/pokemon.png",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Zelda",
        tipo: "(JUEGO)",
        precio: 4500,
        img: "../img/juegos/zelda.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Game of Thrones",
        tipo: "(PELICULA/SERIE)",
        precio: 5000,
        img: "../img/peliculas/got.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Harry Potter",
        tipo: "(PELICULA/SERIE)",
        precio: 9000,
        img: "../img/peliculas/hogwats.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Señor de los Anillos",
        tipo: "(PELICULA/SERIE)",
        precio: 6000,
        img: "../img/peliculas/sranillos.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Wakanda",
        tipo: "(PELICULA/SERIE)",
        precio: 6500,
        img: "../img/peliculas/wakanda.jpeg",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Bosque Encantado",
        tipo: "(ESPECIAL)",
        precio: 8000,
        img: "../img/especial/bosque.jpg",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Universo",
        tipo: "(ESPECIAL)",
        precio: 7500,
        img: "../img/especial/espacio.jpg",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "Futuro",
        tipo: "(ESPECIAL)",
        precio: 8200,
        img: "../img/especial/futuro.jpg",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Hospital Abandonado",
        tipo: "(ESPECIAL)",
        precio: 9500,
        img: "../img/especial/hospital.jpg",
        cantidad: 1,
    },
];
let carrito = [];

const contenedor = document.querySelector('#contenedor');
const carritoContador = document.querySelector('#carritoContador');
const precioTotal = document.querySelector('#precioTotal');








// GENERAR LAS CARTAS
function generarCarta(array) {
    array.forEach((prod) => {
        const { id, nombre, precio, tipo, img, cantidad } = prod;
        if (contenedor) {
            contenedor.innerHTML += `
    <div class="card mt-3" style="width: 23rem;">
        <img class="card-img-top mt-2" src="${img}" alt="producto">
        <div class="card-body">
            <h3 class="card-title neon">${nombre}</h3>
            <p class="card-title neon">${tipo}</9>
            <p class="card-text info-carta">Precio: ${precio}</p>
            <p class="card-text info-carta">Cantidad: ${cantidad}</p>
            <button class="custom-btn btn-3" onclick="agregarProducto(${id})">Agregar producto</button>
        </div>
    </div>
    `;
        }
    })
};

fetch('../data/data.json')
    .then((response) => response.json())
    .then((data) => {
        generarCarta(data)
    });





// AGREGAR PRODUCTOS AL CARRO
function agregarProducto(id) {

    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === id)
        carrito.push(item)
    }


    mostrarCarrito()
}
// MOSTRAR CARTAS EN EL CARRO
const mostrarCarrito = () => {
        const modalBody = document.querySelector('.modal .modal-body')



        modalBody.innerHTML = '' //limpio html 
        carrito.forEach((prod) => {
            const { id, nombre, img, cantidad, precio, tipo } = prod
            modalBody.innerHTML +=
                `
        <div class="modal-contenedor">
        <div>
            <img class="img-fluid img-carrito" src="${img}"/>
        <div>
        
        <div>
            <p>Nombre: ${nombre}</p>
            <p> ${tipo}</p>
            <p>Valor: ${precio}</p>
            <p>Cantidad: ${cantidad}</p>
            <button onclick="eliminarProducto(${id})" class="btn btn-danger" id="btnEliminar">Eliminar Producto</button> 
        <div>
    <br>
`
        })
        const aJson = JSON.stringify(carrito)
        localStorage.setItem('carrito', aJson)

        //contador del carrito
        carritoContador.textContent = carrito.length;

        //calculo del costo total. 
        precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    }
    // ELIMINAR PRODUCTOS DEL CARRO
function eliminarProducto(id) {
    const lugarId = id
    carrito = carrito.filter((lugar) => lugar.id !== lugarId)
    mostrarCarrito();
}







// CARGAR CARRO EN HTML "FINAL"

let final_carro = localStorage.getItem("carrito")
const finalCarrito = () => {
    const modalBody = document.querySelector('.dom-carro')
    const carritoZ = localStorage.getItem('carrito')
    const carritoX = JSON.parse(carritoZ);
    modalBody.innerHTML = '' //limpio html 
    carritoX.forEach((prod) => {
        const { nombre, img, cantidad, precio, tipo } = prod
        modalBody.innerHTML +=
            `
            <hr class= "hrCarroFinal">
    <div class="final-contenedor">
        <div>
            <img class="img-fluid img-final" src="${img}"/>
        </div>
        <div>
            <p>${nombre}</p>
            <p> ${tipo}</p>
            <p>Valor: ${precio}</p>
            <p class="neon">Cantidad: ${cantidad}</p>
        </div>
    </div>
`
    })

    const finalTotal = document.querySelector('.dom-total');
    finalTotal.textContent = "Total a pagar: $" + carritoX.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

}
finalCarrito();