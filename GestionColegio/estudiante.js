class Estudiante extends Persona{
    constructor(id, nombre, edad, curso){
        super(id, nombre, edad);
        this.curso = curso;
        this.calificaciones = [];
    }
    
    agregarCalificaciones(calificacion){
    this.calificaciones.push(calificacion);
    }
    
    calcularPromedio(){
    if(this.calificaciones.length === 0){
        return 0;
    }
    //a-> suma notas, b->numero de notas. Hace la suma
    const total = this.calificaciones.reduce((a, b)=> a+b, 0);
    return (total/this.calificaciones); //media
    }
    
    
    //mostrar
    get detalles(){
        return `${super.getDetalles()}, 
        Curso: ${this.curso},
        Promedio: ${this.calcularPromedio()}`;
        
       }
    
    }