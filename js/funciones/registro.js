function registrarCliente() {

    var clientesRegistrados = JSON.parse(localStorage.getItem("clientes") || "[]")

    cedulaInput = document.getElementById("cedula")

    nombreInput = document.getElementById("nombre")

    apellidosInput = document.getElementById("apellidos")

    correoElectronicoInput = document.getElementById("correoElectronico")

    contraseniaInput = document.getElementById("contrasenia")

    numeroCelularInput = document.getElementById("numeroDeCelular")

    fechaDeNacimientoInput = document.getElementById("fechaNacimiento")

    tipoDireccionInput = document.getElementById("tipoDireccion")

    direccionInput = document.getElementById("direccion")

    barrioInput = document.getElementById("barrio")

    cliente = new Cliente()
    cliente.cedula = cedulaInput.value;
    cliente.nombre = nombreInput.value;
    cliente.apellidos = apellidosInput.value;
    cliente.correoElectronico = correoElectronicoInput.value;
    cliente.contrasenia = contraseniaInput.value;
    cliente.numeroDeCelular = numeroCelularInput.value;
    cliente.fechaNacimiento = fechaDeNacimientoInput.value;
    cliente.tipoDireccion = tipoDireccionInput.value;
    cliente.direccion = direccionInput.value;
    cliente.barrio = barrioInput.value;

    var registrar = true;

    for (const elemento of clientesRegistrados) {
        if(elemento.cedula == cliente.cedula){
            registrar = false;
            alert("Ojo, ya existe un usuario con está cedula")
            break;
        }
    }

    if(registrar){
        clientesRegistrados.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientesRegistrados));
        alert("Registro Exitoso!")
        window.location.href = "iniciodesesion.html";

    }

    cedulaInput.focus()
    cliente.comprobarDatos();
}


function borrarDatos() {

    localStorage.removeItem("clientes");
    
    console.log("info borrada")

}