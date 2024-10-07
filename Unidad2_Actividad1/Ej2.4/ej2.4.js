/*
Haz un programa que nos pregunte nuestro nombre, nuestra edad. El programa nos tiene que dar
como resultado los días que hemos vivido hasta el momento (suponiendo años de 365 días).
*/
function testEj2_4(){
    let nombre, edad;
     let diasVividos;

     nombre = prompt("Introduce tu nombre :");
     edad = prompt("Introduce tu edad :");

     diasVividos =  edad * 365;

     alert("Has vivido :"+diasVividos+ " dias.");
}