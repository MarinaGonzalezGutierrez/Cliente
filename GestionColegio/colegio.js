class Colegio {
    constructor(nombre){
        this.nombre =nombre;
        this.estudiantes = [];
        this.profesores = [];
    }



registrarEstudiantes(Estudiante){
this.estudiantes.push(Estudiante);
}

registrarProfesores(Profesor){
this.profesores.push(Profesor);
}

mostrarEstudiantes(){
return this.estudiantes.map(estu => estu.getDetalles());
}

mostrarProfesores(){
    return this.profesores.map(profe => profe.getDetalles());
}

buscarEstudianteId(){
return this.estudiantes.find(estu => estu.id === id) || "No se ha encontrado al estudiante";
}

//filter porque el nombre no es unico
buscarEstudianteNombre(){
return this.estudiantes.filter(estu => estu.nombre.toLowerCase().includes(nombre.toLowerCase) || "No se ha encontrado al estudiante");
}

}

const colegio = new Colegio("San Fernando");

function registrarEstudiante(id, nombre, edad, curso){
const estudiante = new Estudiante(id, nombre, edad, curso);
Colegio.registrarEstudiantes(estudiante);
}

function registrarProfesor(id, nombre, edad, asignatura){
    const profesor = new Profesor(id, nombre, edad, asignatura);
    Colegio.registrarProfesores(profesor);
}

function mostrarTodosEstudiantes(){
    alert(Colegio.mostrarEstudiantes());
}

function mostrarTodosProfesores(){
    alert(Colegio.mostrarProfesores());
}

function buscarEstudiante(id){
const estudiante = Colegio.buscarEstudianteId(id);
alert(estudiante.getDetalles ? estudiante.getDetalles(): estudiante);
}


