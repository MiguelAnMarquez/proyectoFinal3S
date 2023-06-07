cartelera = [];

class EntradaCartelera {

    constructor(sal, nompel, horar, fecinic, fecfin) {

        this.sala = sal;
        this.nombre = nompel;
        this.horario = horar;
        this.fechaIni = fecinic;
        this.fechaFin = fecfin;


    }
}

function crearECartelera(sal, nompel, horar, fecinic, fecfin) {
    var ECartelera = new Productora(sal, nompel, horar, fecinic, fecfin);
    cartelera.push(ECartelera);
    updateTableList();
}