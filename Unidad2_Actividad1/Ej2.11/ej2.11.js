/*Ejercicio 2.11
Realiza el mismo ejercicio, pero con un bucle for.
Realiza un ejercicio en el que se le pida al usuario un valor numérico y mediante un bucle
 while haga una cuenta atrás mostrándola mediante una ventana.
*/
function testEj2_11(){



let valorNumerico = prompt("Introduce un valor numerico :");
valorNumerico = parseInt(valorNumerico);
for(let i=valorNumerico; i>= 0; i--){
   alert(i); 
}


}