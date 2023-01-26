let botonCarro = document.getElementById('btnFinal');
botonCarro.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Finalizar compra?',
        text: "Revisa que todo esté correcto",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, Finalizar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Gracias por su compra!',
                'Le llegará al correo electronico con el que se registrastó, un mail con la confirmación de la compra',
                'success'
            )
        }
    })
})