
listaProductoras = [];

class Productora {

    constructor(cod, nom, pdr, tel, cel, email, repres) {

        this.codigo = cod;
        this.nombre = nom;
        this.paisdr = pdr;
        this.telefono = tel;
        this.celular = cel;
        this.email = email;
        this.representante = repres;

    }
}

function crearProductora(cod, nom, pdr, tel, cel, email, repres) {
    var productora = new Productora(cod, nom, pdr, tel, cel, email, repres);
    listaProductoras.push(productora);
    updateTableList();
}