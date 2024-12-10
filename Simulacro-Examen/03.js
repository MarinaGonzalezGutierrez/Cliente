// Corrige y completa el siguiente código para que cree un objeto Coche con una propiedad marca, un método acelerar() que aumente la velocidad en 10, y un método mostrarVelocidad() que imprima la velocidad actual.

class Coche {
    
    constructor(marca) {
        this.marca = marca;
        this.velocidad = 0; // Error aquí
    }
    
    acelerar() {
        // Completa este método
        this.velocidad+=10;
    }

    mostrarVelocidad() {
        console.log("Velocidad actual:", this.velocidad);
    }
}

const miCoche = new Coche("Toyota");
miCoche.acelerar();
miCoche.mostrarVelocidad(); // Debería imprimir "Velocidad actual: 10"