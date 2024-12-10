// Completa la función para que reciba un array de números y devuelva la suma de sus elementos.

function sumarElementos(array) {
    // Completa aquí:
    
    let suma = 0;
    for (let i=0; i<array.length; i++) {
        suma += array[i];
    }
    return suma;
}


console.log(sumarElementos([1, 2, 3, 4]))// Debería devolver 10