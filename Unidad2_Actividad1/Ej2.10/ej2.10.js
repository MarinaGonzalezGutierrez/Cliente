/*Ejercicio 2.10
Realiza un ejercicio en el que se le pida al usuario un valor numérico y mediante un bucle
 while haga una cuenta atrás mostrándola mediante una ventana.
*/

function testEj2_10(){
  

    valorNumerico = prompt("Introduce un valor numerico :");
    parseInt(valorNumerico);
    while(valorNumerico >= 0){
      alert(valorNumerico);
      valorNumerico--; //para que vaya haciendo la cuenta atras
        
    }
    
    alert("FIN PROGRAMA");

}