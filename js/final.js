const carritoZ = sessionStorage.getItem('carrito')
const carritoX = JSON.parse(carritoZ);
let final_carro = sessionStorage.getItem("carrito")
const modalBody = document.querySelector('.dom-carro')

// CARGAR CARRO EN HTML "FINAL"
const finalCarrito = () => {

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
            <p class="neon">Cantidad de dias: ${cantidad}</p>
        </div>
    </div>
`
    })

    const finalTotal = document.querySelector('.dom-total');
    finalTotal.textContent = `Total a pagar: $${carritoX.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)}`;
}
finalCarrito();