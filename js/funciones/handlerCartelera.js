
function registrarECartelera() {

    var salaG = document.getElementById("sala").value
    var nombreG = document.getElementById("nombre").value
    var horarioG = document.getElementById("HInicio").value
    var fechaIniG = document.getElementById("FInicio").value
    var fechaFinG = document.getElementById("FFin").value
    var mostrar = document.getElementById("mostrarPeli").checked


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

}

function checkboxToggle() {
    var checkbox = document.getElementById("mostrarPeli");
    if (checkbox.checked == true) {
        document.getElementById("mostrarPeli").checked = false
    } else {
        document.getElementById("mostrarPeli").checked = true
    }
}

function updateTableList() {
    var CTable = document.getElementById("tablaCartelera")
    var old_tbody = CTable.getElementsByTagName("tbody")[0];
    var new_tbody = document.createElement("tbody");
    for (let i = 0; i < cartelera.length; i++) {
        var NRow = document.createElement("tr");
        NRow.appendChild(crearNodoDeTextoCentrado(cartelera[i].sala));
        NRow.appendChild(crearNodoDeTextoCentrado(cartelera[i].nombre));
        NRow.appendChild(crearNodoDeTextoCentrado(cartelera[i].horario));
        NRow.appendChild(crearNodoDeTextoCentrado(cartelera[i].fechaIni));
        NRow.appendChild(crearNodoDeTextoCentrado(cartelera[i].fechaFin));
        new_tbody.appendChild(NRow);
    }
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}

function crearNodoDeTextoCentrado(Text) {
    var td = document.createElement('td');
    var hText = document.createTextNode(Text);
    td.appendChild(hText);
    td.style.textAlign = "center";
    return td;
}