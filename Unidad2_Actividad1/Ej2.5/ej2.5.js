/*Ejercicio 2.5
Haz un programa que nos pida un número, y nos muestre en una única pantalla, el doble, 
el triple y el cuádruple del número que habíamos introducido (cada uno en una línea).
*/
function testEj2_5(){
    let num, doble, triple, cuadruple;
    num = prompt("Introduce un numero :");

    doble = num*2;
    triple = num*3;
    cuadruple = num*4;
    alert(`NUMERO: ${num} //salto de linea
        DOBLE: ${doble}
        TRIPLE: ${triple}
        CUADRUPLE: ${cuadruple}`);
}