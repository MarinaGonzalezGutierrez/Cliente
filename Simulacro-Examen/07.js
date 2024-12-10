/**
 * Completa la clase Empleado y el código para que permita:

Crear empleados con un nombre y salario.
Agregar empleados al array empleados.
Calcular el salario total de todos los empleados.
 */

class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}

let empleados = [];

// Agregar empleados al array (usa un bucle)
let nombres = ["Juan", "Ana", "Luis", "Marta"];
let salarios = [1200, 1300, 1100, 1500];

for (let i=0; i< nombres.length; i++) {
    // Tu código aquí para crear un objeto Empleado y agregarlo al array
    empleados.push(new Empleado(nombres[i], salarios[i]));
}

// Calcular el salario total
let salarioTotal = 0;
for (let empleado of empleados) {
    // Tu código aquí
    salarioTotal+= empleado.salario;
}



console.log("Salario total:", salarioTotal);
