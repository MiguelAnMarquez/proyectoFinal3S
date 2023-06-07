function generarGrafica() {

    var clientesRegistrados = JSON.parse(localStorage.getItem("clientes") || "[]")


    var rangoDeEdades = document.getElementById("rangoEdad").value


    var inicioRangoEdad = 0;
    var finRangoEdad = 0;

    switch (rangoDeEdades) {
        case 'ninos':
            inicioRangoEdad = 0;
            finRangoEdad = 12;
            break;
        case 'adolescente':
            inicioRangoEdad = 13;
            finRangoEdad = 18;
            break;
        case 'adulto':
            inicioRangoEdad = 19;
            finRangoEdad = 50;
            break;
        case 'adultoMayor':
            inicioRangoEdad = 51;
            finRangoEdad = 100;
            break;
    }


    var clientesConEdadSeleccionada = [];
    var totalClientesConEdadSeleccionada = 0;
    var barriosClientesSeleccionados = [];

    for (const cliente of clientesRegistrados) {
        var edadCliente = calcularEdad(cliente.fechaNacimiento)

        if (edadCliente >= inicioRangoEdad && edadCliente <= finRangoEdad) {
            totalClientesConEdadSeleccionada = totalClientesConEdadSeleccionada + 1

            clientesConEdadSeleccionada.push(cliente)
        }
    }


    console.log("clientes seleccionados")
    console.log(clientesConEdadSeleccionada)
    console.log("totalClientes")
    console.log(totalClientesConEdadSeleccionada)



    var todosLosBarrios = []

    for (const cliente of clientesConEdadSeleccionada) {

        if (!barriosClientesSeleccionados.includes(cliente.barrio)) {
            barriosClientesSeleccionados.push(cliente.barrio)
        }

        todosLosBarrios.push(cliente.barrio)
    }

    var numeroDeVecesQueApareceCadaBarrio = []


    for (var i = 0; i < todosLosBarrios.length; i++) {
        var elemento = todosLosBarrios[i];
        if (numeroDeVecesQueApareceCadaBarrio[elemento]) {
            numeroDeVecesQueApareceCadaBarrio[elemento]++;
        } else {
            numeroDeVecesQueApareceCadaBarrio[elemento] = 1;
        }
    }


    

    for (var key in numeroDeVecesQueApareceCadaBarrio) {
        console.log("El barrio", key, "aparece", numeroDeVecesQueApareceCadaBarrio[key], "veces en el array.");
    }

    // for (const barrio of todosLosBarrios) {
    //     var ocurrenciasArray = todosLosBarrios.filter(function (valor) {
    //         return valor === barrio;
    //     });

    //     numeroDeVecesQueApareceCadaBarrio.push(ocurrenciasArray.length)
    // }

    //console.log("N VECES BARRIO", numeroDeVecesQueApareceCadaBarrio)

    console.log("barrios")
    console.log(barriosClientesSeleccionados)

    //ELEGIR COLOR PARA BARRIO
    var colorBarrios = []
    for (const barrio of barriosClientesSeleccionados) {
        colorBarrios.push(colorRandom())
    }


    //AÑADIR COLORES
    var dividentificadorDeColores = document.getElementById("identificadorDeColores")
    dividentificadorDeColores.innerHTML = ""
    for (let i = 0; i < barriosClientesSeleccionados.length; i++) {
        var div = document.createElement("div")
        div.setAttribute("class", "rectangulo")
        div.style.backgroundColor = colorBarrios[i]
        var h2 = document.createElement("h2")
        h2.innerText = barriosClientesSeleccionados[i]

        dividentificadorDeColores.appendChild(div)
        dividentificadorDeColores.appendChild(h2)
    }
    var porcentajeOcupado = 0;

    var gradienteConico = "conic-gradient("
    for (let i = 0; i < barriosClientesSeleccionados.length; i++) {

        var porcentajeBarrio = (numeroDeVecesQueApareceCadaBarrio[barriosClientesSeleccionados[i]] * 100) / todosLosBarrios.length
        porcentajeOcupado = porcentajeOcupado + porcentajeBarrio

        gradienteConico = gradienteConico + colorBarrios[i] + " 0% " + porcentajeOcupado + "%, "


    }

    console.log(barriosClientesSeleccionados.length)

    gradienteConico = gradienteConico.slice(0, -2);
    gradienteConico = gradienteConico + ")"

    console.log(gradienteConico)

    var graficaTorta = document.getElementById("graficaTorta")
    graficaTorta.style.background =""
    graficaTorta.style.background = gradienteConico;


}

function calcularEdad(fechaNacimientoSTR) {
    var fechaActual = new Date();

    var fechaNacimiento = new Date(fechaNacimientoSTR)
    var diferenciaTiempo = fechaActual - fechaNacimiento;

    var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));



    return edad
}

function colorRandom() {
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    return color
}