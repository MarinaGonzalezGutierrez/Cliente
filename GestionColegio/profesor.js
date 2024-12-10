class Profesor extends Persona {

    constructor(id, nombre, edad, asignatura){
        super(id, nombre, edad);
        this.asignatura = asignatura;
    }

    getDetalles(){
        return `${super.getDetalles()}, 
        Asignatura: ${this.asignatura}`;
    }
}