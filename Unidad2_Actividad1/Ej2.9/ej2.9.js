/*Ejercicio 2.9
Teniendo la variable primer_saludo = “hola”
Y la variable segundo_saludo = primer_saludo
Si ahora, le asignásemos un nuevo valor a primer_saludo =”hello”
¿Qué valor tendría segundo_saludo?
*/

function testEj2_9(){

    let primer_saludo = "hola";
    let segundo_saludo = primer_saludo;

    primer_saludo = "hello";
    alert("Valor segundo saludo :"+segundo_saludo);

    /*
    El segundo_saludo tendria como valor "hola", ya que como hemos definido segundo saludo antes de cambiar
    el valor de primer_saludo a "hello", pues aparece de la forma del principio.
    */
}