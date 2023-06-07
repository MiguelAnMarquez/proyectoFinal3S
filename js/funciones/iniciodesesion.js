function acceder() {
    cedulaInput = document.getElementById("cedula")
    contraseniaInput = document.getElementById("contrasenia")

    valorCedula = cedulaInput.value;
    valorContrasenia = contraseniaInput.value;

    var clientesRegistrados = JSON.parse(localStorage.getItem("clientes") || "[]")
    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "[]")

    
    var usuarioEncontrado = false;
    for (const elemento of clientesRegistrados) {

        if (elemento.cedula == valorCedula && elemento.contrasenia == valorContrasenia) {
            usuarioEncontrado = true;
            localStorage.setItem("usuarioLogeado", JSON.stringify(elemento));
            window.location.href = "paginaPrincipal.html"
            break;
        }

    }

    for (const elemento of usuariosRegistrados) {
        if (elemento.nombreDeUsuario == valorCedula && atob(elemento.clave) == valorContrasenia) {
            usuarioEncontrado = true;
            localStorage.setItem("usuarioLogeado", JSON.stringify(elemento));

            switch (elemento.rol) {
                case 'Administrador':
                    window.location.href = "menuadministrador.html"
                    break;

                case 'Gerente':
                    window.location.href = "menugerente.html"
                    break;

                case 'Vendedor':
                    window.location.href = "menuvendedor.html"
                    break;
            }
        }
    }

    if (usuarioEncontrado == false) {

        alert("Usuario o contraseña incorrectos")

    }



    cedulaInput.focus();
}

function cerrarSesion() {
    window.location.href = "../index.html"
    localStorage.removeItem("usuarioLogeado")
}