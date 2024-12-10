//crear clases Vuelo y Vuelo Muy Rentable

class Vuelo {
    constructor(codigo, numPlazas, importeBillete){
        this.codigo = codigo;
        this.numPlazas = numPlazas;
        this.importeBillete = importeBillete;
    }

}

class VueloMuyRentable{
    constructor(codigoVuelo, ingresoEstimado){
        this.codigoVuelo = codigoVuelo;
        this.ingresoEstimado = ingresoEstimado;
    }
}

//crear array pa almacenar los vuelos añadidos y se guarden
let vuelos= [];

//pa los calculos de los ingresos
let resultadosIngresos = [];

//funcion añadir Vuelos
function almacenarVuelos(){
    const codigo = document.getElementById('codigo').value.trim();
    const numPlazas = parseInt(document.getElementById('numPlazas').value); //numero entero 
    const importeBillete = parseFloat( document.getElementById('importeBillete').value); //permite numeros decimales

    //evaluar que completa todos los campos, NO PUEDE HABER NADA VACIO
    if(!codigo || isNaN(numPlazas) || isNaN(importeBillete)){
        alert("¡Por favor, complete los campos correctamente.!")
        return;
    }

    //el codigo no puede ser igual
    // if(!codigo.values === !codigo.values){
    //     alert("El codigo no puede ser el mismo!!");
    //     return;

    // }

    //evaluar que el numPlazas y el importeBillete no pueden ser menor que 1
    if(numPlazas < 1 || importeBillete < 1){
        alert("No puede ser menos de 1.");
        return;

    }

    

    //creamos vuelos
    const vuelo = new Vuelo(codigo, numPlazas, importeBillete);

    //con el array y con push subimos los vuelos que hemos añadido
    vuelos.push(vuelo);

    //mensaje pa q te avise si ta añadido correctamente
    alert(`El vuelo con el codigo ${codigo} ha sido añadido correctamente`);

    //solo para comprobar que lo muestra
    console.log(Object.values(vuelo));
    

}

function modificarVuelo(){
    const codigo = document.getElementById('codigo').value.trim();
    const numPlazas = parseInt(document.getElementById('numPlazas').value); //numero entero 
    const importeBillete = parseFloat( document.getElementById('importeBillete').value); //permite numeros decimales

    //pa que modifique el vuelo por el codigo vaya
    const vuelo = vuelos.find(p=> p.codigo.toLowerCase() === codigo.toLowerCase());

    if(!vuelo){
        alert("La vuelo introducido no existe.");
        return;   
    }

    

    if(codigo)vuelo.codigo = codigo;
    if(!isNaN(numPlazas)) vuelo.numPlazas = numPlazas;
    if(!isNaN(importeBillete)) vuelo.importeBillete = importeBillete;

    alert(`El vuelo con codigo ${codigo} ha sido modificado correctamente.`);

}

function calculoIngresoEstimado(){
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    resultadosIngresos= [];

    vuelos.forEach(vuelo =>{
        const calculoIngreso = vuelo.numPlazas * vuelo.importeBillete;
        let estado = ''
        
        if (calculoIngreso < 10000) {
            estado = 'Poco rentable';
            // resultadosIngresos.push(new Imc(vuelo.codigo, calculoIngreso))
        }else if (calculoIngreso >= 10000 && calculoIngreso<=20000) {
            estado = 'Rentable';
            // resultadosIngresos.push(new Imc(persona.nombre, imc))
        }else if(calculoIngreso > 20000){
            estado = 'Muy rentable';
            resultadosIngresos.push(new VueloMuyRentable(vuelo.codigo, calculoIngreso));
            //solo guardar los muy rentables
        }

        //para mostrarlo
        resultadosDiv.innerHTML += `<p>${vuelo.codigo}: CALCULO INGRESO = ${calculoIngreso}  (${estado})</p>`
    });

    if (resultadosIngresos.length > 0 ) {
        resultadosDiv.innerHTML += '<h3>Vuelos muy rentables:</h3>';
        resultadosIngresos.forEach(res => {
            //atributs de la clase de los de muy rentables
            resultadosDiv.innerHTML += `<p>${res.codigoVuelo}: CALCULO INGRESO = ${res.ingresoEstimado}</p>`;
        });
    }

}