class Persona {

    constructor(nombre, peso, altura){
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }



}

class Imc{
    
    constructor(nombre, imc){
        this.nombre = nombre;
        this.imc = imc;
    }
}

let personas = [];
let resultadosIMC = [];

function almacenarPersona(){
    const nombre = document.getElementById('nombre').value.trim();
    const peso = parseFloat( document.getElementById('peso').value); 
    const altura = parseFloat( document.getElementById('altura').value);
    
    if(!nombre || isNaN(peso) || isNaN(altura)){
        alert("¡Por favor, complete los campos correctamente.!")
        return;
    }

    const persona = new Persona(nombre, peso, altura);
    //push funcion de arrays
    personas.push(persona);
    alert(`${nombre} ha sido añadido correctamente`);

}

function modificarPersona(){
    const nombre = document.getElementById('nombre').value.trim();
    const peso = parseFloat( document.getElementById('peso').value);
    const altura = parseFloat( document.getElementById('altura').value);

    const persona  = personas.find(p=> p.nombre.toLowerCase() === nombre.toLowerCase());

    if(!persona){
        alert("La persona introducida no existe.");
        return;   
    }

    //evaluar tipo de dato
    if(nombre)persona.nombre = nombre;
    if(!isNaN(peso)) persona.peso = peso;
    if(!isNaN(altura)) persona.altura = altura;
    
    alert(`${nombre} ha sido modificada correctamente.`);

}

function calcularImc(){
    
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    resultadosIMC = [];
    personas.forEach(persona =>{
        const imc = (persona.peso / (persona.altura ** 2)).toFixed(2);
        let estado = ''
        
        if (imc < 18.49) {
            estado = 'Demasiado Delgado';
            resultadosIMC.push(new Imc(persona.nombre, imc))
        }else if (imc >= 25.00) {
            estado = 'Demasiado obesa';
            resultadosIMC.push(new Imc(persona.nombre, imc))
        }else{
            estado = 'Peso normal';
        }

        resultadosDiv.innerHTML += `<p>${persona.nombre}: IMC = ${imc}  (${estado})</p>`
    });

    if (resultadosIMC.length > 0 ) {
        resultadosDiv.innerHTML += '<h3>Personas fuera de peso normal:</h3>';
        resultadosIMC.forEach(res => {
            resultadosDiv.innerHTML += `<p>${res.nombre}: IMC = ${res.imc}</p>`;
        });
    }
    
}

