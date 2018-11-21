class Persona{// esta clase necesita mejorar mucho, estudiar como hacer mejor;
    constructor(rut, nombre, apellido, carrera, castigado){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
        this.castigado = castigado;
    }
    constructor(){
        this.rut = '';
        this.nombre = '';
        this.apellido = '';
        this.carrera = '';
        this.castigado = '';
    }

    //no sé como hacer los set y los get
    setRut(rut){
        this.rut = rut;
    }
    getRut(){
        return this.rut;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    getApellido(){
        return this.apellido;
    }
    setCarrera(carrera){
        this.carrera = carrera;
    }
    getCarrera(){
        return this.carrera;
    }
    setCastigado(castigado){
        this.castigado = castigado;
    }
    getCastigado(){
        return this.castigado;
    }
    detalles(){
        console.log('rut: ${this.rut}, nombre: ${this.nombre}, apellido: ${this.apellido}, carrera: ${this.carrera}, castigado: ${this.castigado}');
    }

}