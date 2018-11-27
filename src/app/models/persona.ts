export class Persona {
    id: number;
    rut: string;
    nombre: string;
    apellido: string;
    carrera: string;
    castigado: boolean;

    constructor(){
        this.id = 0;
        this.rut = '';
        this.nombre = '';
        this.apellido = '';
        this.carrera = '';
        this.castigado = false;
    }
    
}
