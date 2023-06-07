function registrarProductora() {

    var codigoG = document.getElementById("codigo").value;
    var nombreG = document.getElementById("nombre").value;
    var paisdrG = document.getElementById("paisdr").value;
    var emailG = document.getElementById("email").value;
    var represG = document.getElementById("representante").value;
    var teleG = [];
    var celuG = [];

    var tlist = document.getElementById("telefonos");
    var clist = document.getElementById("celulares");

    if ((tlist.options.length > 0) && (clist.options.length > 0)) {

        var alreadyR = verificarCodigo(codigoG);

        if (alreadyR == true) {
            alert("El codigo ingresado ya se encuentra registrado para otra productora.");
        } else {
            for (let i = 0; i < tlist.options.length; i++) {
                teleG.push(tlist.options[i].value);
            }
            for (let i = 0; i < clist.options.length; i++) {
                celuG.push(clist.options[i].value);
            }
            crearProductora(codigoG, nombreG, paisdrG, teleG, celuG, emailG, represG);
            alert("Productora Registrada.");
        }
    } else {
        alert("Se deben ingresar por lo menos un telefono y un numero de celular.");
    }
}

function updateTableList() {
    var PTable = document.getElementById("tablaProductoras")
    var old_tbody = PTable.getElementsByTagName("tbody")[0];
    var new_tbody = document.createElement("tbody");
    for (let i = 0; i < listaProductoras.length; i++) {
        var NRow = document.createElement("tr");
        NRow.appendChild(crearNodoDeTextoCentrado(listaProductoras[i].codigo));
        NRow.appendChild(crearNodoDeTextoCentrado(listaProductoras[i].nombre));
        NRow.appendChild(crearNodoDeTextoCentrado(listaProductoras[i].paisdr));
        new_tbody.appendChild(NRow);
    }
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}

function verificarCodigo(codigoG) {
    
    for (let i = 0; i < listaProductoras.length; i++) {
        if (codigoG == listaProductoras[i].codigo) {
            return true;
        }
    }
    return false;
}

function crearNodoDeTextoCentrado(Text) {
    var td = document.createElement('td');
    var hText = document.createTextNode(Text);
    td.appendChild(hText);
    td.style.textAlign = "center";
    return td;
}

function verificarTelefono(tel) {

    var telef = tel.replace(/\s/g, '');

    if (!/^\d+$/.test(telef)) {
        alert("El numero de telefono debe tener 10 caracteres y contener solo numeros.");
        return false;
    }

    if (telef.length != 10) {
        alert("El numero de telefono debe tener 10 caracteres y contener solo numeros.");
        return false;
    }

    var teleferes = document.getElementById("telefonos");

    for (let i = 0; i < teleferes.options.length; i++) {
        if (telef == teleferes.options[i].value) {
            alert("El numero de telefono ingresado ya se encuentra en la lista.");
            return false;
        }
    }

    return true;
}

function verificarCelular(tel) {

    var telef = tel.replace(/\s/g, '');

    if (!/^\d+$/.test(telef)) {
        alert("El numero de celular debe tener 10 caracteres y contener solo numeros.");
        return false;
    }

    if (telef.length != 10) {
        alert("El numero de celular debe tener 10 caracteres y contener solo numeros.");
        return false;
    }

    var celulares = document.getElementById("celulares");

    for (let i = 0; i < celulares.options.length; i++) {
        if (telef == celulares.options[i].value) {
            alert("El numero de celular ingresado ya se encuentra en la lista.");
            return false;
        }
    }

    return true;
}

function añadirTelefono() {
    var telef = document.getElementById("teleid").value;
    if (verificarTelefono(telef) == true) {
        var nuevoTel = document.createElement('option');
        var hText = document.createTextNode(telef);
        nuevoTel.appendChild(hText);
        nuevoTel.value = telef;
        document.getElementById("telefonos").appendChild(nuevoTel);
        document.getElementById("teleid").value = "";
    }
}

function añadirCelular() {
    var celu = document.getElementById("celuid").value;
    if (verificarCelular(celu) == true) {
        var nuevoCel = document.createElement('option');
        var hText = document.createTextNode(celu);
        nuevoCel.appendChild(hText);
        nuevoCel.value = celu;
        document.getElementById("celulares").appendChild(nuevoCel);
        document.getElementById("celuid").value = "";
    }
}

function limpiarFormulario() {

    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("paisdr").value = "";
    document.getElementById("email").value = "";
    document.getElementById("representante").value = "";
    document.getElementById("celuid").value = "";
    document.getElementById("teleid").value = "";
    document.getElementById("telefonos").innerHTML = "";
    document.getElementById("celulares").innerHTML = "";

    alert("Se ha limpiado el formulario.")

}