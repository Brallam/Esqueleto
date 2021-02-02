let login = document.getElementById('login')
let registro = document.getElementById('registro')
let signin = () => {
    login.style.display="block"
    registro.style.display="none"
}

let signup = () => {
    registro.style.display="block"
    login.style.display="none"
}