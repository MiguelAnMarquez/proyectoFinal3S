function registrar(){

    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "[]")

    nombreUsuario = document.getElementById("nombreUsuario").value

    contraseniaSinCifrar = document.getElementById("contrasenia").value

    contraseniaCifrada = encriptarClave(contraseniaSinCifrar)

    rol = document.getElementById("rol").value

    var fechaActual = new Date()
    usuario = new Usuarios()
    usuario.nombreDeUsuario = nombreUsuario;
    usuario.clave = contraseniaCifrada;
    usuario.fechaDeCreacion = fechaActual;
    usuario.fechaDeModificacion = fechaActual;
    usuario.rol = rol;

    var registrar = true;

    for (const elemento of usuariosRegistrados) {
        if(elemento.nombreDeUsuario == usuario.nombreDeUsuario){
            registrar = false;
            alert("Ojo, ya existe un usuario con ese nombre de usuario")
            break;
        }
    } 

    if(registrar){
        usuariosRegistrados.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
        alert("Registro Exitoso!")
    }

    console.log(usuario)

}

function eliminarUsuarios(){
    localStorage.removeItem("usuarios");
    console.log("info borrada")
}


//lo encripta en base64 - att:El sebas
function encriptarClave(clave){

    
    const claveEncriptada = btoa(clave);
    
    //console.log("Clave encriptada: " + claveEncriptada);
    
    return claveEncriptada
    
}