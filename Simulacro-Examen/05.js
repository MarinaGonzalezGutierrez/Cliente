//Corrige el siguiente código para que recorra un array de nombres y muestre en consola únicamente los nombres que tienen más de 5 caracteres.

let nombres = ["Ana", "Miguel", "Roberto", "Sara", "Fernando"];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= 5) { // Error aquí
        console.log(nombres[i]);
    }
}
