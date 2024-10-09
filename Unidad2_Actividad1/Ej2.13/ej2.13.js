/*Realiza una aplicación que pida al usuario el precio de un producto sin el IVA y 
el IVA a aplicar, calculando el precio total a pagar.
*/
function testEj2_13(){
let precioSin = 0;
let porcentajeConIva = 0;
porcentajeConIva = parseFloat(porcentajeConIva);
let iva = 0;
let precioFinal = 0; 

precioSin = prompt("Introduce el precio sin el IVA :");
porcentajeConIva = prompt("Introduce el porcentaje de IVA a aplicar :");

iva = (precioSin*porcentajeConIva) / 100;

precioFinal = precioSin + iva;
alert("El precio final con el IVA aplicado es :"+precioFinal)
}