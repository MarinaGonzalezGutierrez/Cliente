/**
 * Completa el siguiente código para que:

   1 Agregue un producto al final del array inventario.
   2 Encuentre el índice del producto "Manzana" y lo elimine.
   3 Imprima el inventario actualizado.
 */

   let inventario = ["Banana", "Manzana", "Naranja", "Uva"];

   // 1. Agregar "Melón" al final del inventario
   // Tu código aquí

   inventario.push("Melon");
   
   // 2. Encontrar y eliminar "Manzana" del inventario
   for (let i = 0; i < inventario.length; i++) {
       if (inventario[i]==="Manzana") {
           // Tu código aquí
           inventario.splice(i,1);
           break;
       }
   }
   
   // 3. Imprimir el inventario actualizado
   console.log("Inventario actualizado:", inventario);
   