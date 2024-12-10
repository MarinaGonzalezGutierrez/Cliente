class Persona {

    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

   getDetalles(){
    return `Id: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}`;
   }
}