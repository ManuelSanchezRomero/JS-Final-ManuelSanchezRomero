// LOGGIN INDEX
const botonLoggin = document.getElementById('btnLoggin');

botonLoggin.addEventListener('click', () => {
    let usuario = document.getElementById('logginMail').value;
    let pass = document.getElementById('logginPass').value;
    let c = document.getElementById("check").checked;
    if (c) {
        localStorage.setItem('Usuario', usuario);
        localStorage.setItem('Password', pass);
    } else {
        sessionStorage.setItem('Usuario', usuario);
        sessionStorage.setItem('Password', pass);
    }

})