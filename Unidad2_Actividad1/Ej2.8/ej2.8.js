function testEj2_8(){
    /*Ejercicio 2.8
Haz un programa que funcione de la manera siguiente:
•
Nos pida nuestro nombre.
•
Nos pida nuestro primer apellido.
•
Nos pida en que población vivimos.
•
Al final nos presente:
=======================
Hola “nombre y apellido”
Adiós habitante de “Población”
*/

let nombre, primerApellido, poblacion;

nombre = prompt("Introduce tu nombre :");
primerApellido = prompt("Introduce tu primer apellido :");
poblacion = prompt("Introduce la cantidad de poblacion :");

alert(`Hola: ${nombre} ${primerApellido}
    Adiós habitante de ${poblacion}`);
}