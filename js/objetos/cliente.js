class Cliente {

    constructor(){
        this.cedula = 0;
        this.nombre = '';
        this.apellidos = '';
        this.correoElectronico = '';
        this.contrasenia = '';
        this.numeroDeCelular = 0;
        this.fechaNacimiento = '';
        this.tipoDireccion = '';
        this.direccion = '';
        this.barrio = '';
    }

    comprobarDatos(){
        console.log('cedula: ',this.cedula, 'nombre: ',this.nombre, 'apellidos: ',this.apellidos, 'correo: ', this.correoElectronico, 'contraseña', this.contrasenia, 'numero celular', this.numeroDeCelular, 'fechaNacimiento', this.fechaNacimiento,'tipo direccion ',this.tipoDireccion,'direccion ',this.direccion,'barrio ', this.barrio)
    }


}