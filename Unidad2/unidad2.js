function testUnidad2(){
    /*
    var cadena = "abc";
    var cadena2 = String("abc");
    var cadena3 = new String("abc");
    console.log(typeof "abc");
    document.write(typeof cadena);
    document.write("<br/>");
    document.write(typeof cadena2);
    document.write("<br/>");
    document.write(typeof cadena3);
    document.write("<br/>");
    document.write(typeof cadena3.valueOf());
    document.write("<br/>");
    let longitud =  10;
    longitud = "10";
   
    //este ejercicio consiste en ver de q tipo es el dato, que es string

    let animal = "Águila"; 
    let numPatas = 2; 
    document.write (animal + numPatas);
    document.write("<br/>");
    document.write(numPatas + numPatas + animal);
    let numColas = "1";
    document.write("<br/>");
    document.write(animal + (numPatas + numPatas));
    document.write("<br/>");
    document.write(numPatas + numColas);
    document.write("<br/>");
    document.write(cadena3 + numPatas);
    document.write("<br/>");

    cadena = "3.454645";
    let nombre = "42";
    let nom = "Joan";
    let aprobado = true;
    document.write("<br/>");
    document.write(Boolean(cadena));
    document.write("<br/>");
    document.write(Boolean(0));
    document.write("<br/>");
    document.write(Boolean(""));
    document.write("<br/>");
    document.write(Boolean(null));
    document.write("<br/>");
    document.write(Boolean(undefined));
    document.write(String(nombre));
    document.write("<br/>");
    document.write(String(nombre) + nombre);
    document.write("<br/>");
    
    document.write("<br/>");
    document.write(Number(nom));
    document.write("<br/>");
    document.write(Number(cadena) + 2);
    document.write("<br/>");
    document.write(Number(aprobado));
    document.write("<br/>");
    document.write(parseInt(cadena));
    document.write("<br/>");
    document.write(String(aprobado));
    document.write("<br/>");

    const libs = ["React", "Vue", "Angular"];
    document.write["<br/>"];
    document.write[`Este curso trata de ${libs[0]}`];

    const l = libs.length;
    //variable = condicion ? valorSiVerdadero : valorSiFalso;
    let numRuedas = coche!=null ? coche.numRuedas : 0;
    let cuantitativo = l==1 ? "Singular" : "Plural";

    /*
    if(l == 1){
        cuantitativo = "Singular";
    }else{
        cuantitativo = "Plural";
    }
        
    
    document.write(`
        ${l > 1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}: 
        ${libs.join(", ")}[""]...
    `);
    */

    //1. Ejercicio de preguntar nota y que te muestre aprobado o suspenso
    /*
    let nombre;
    let nota;
    nombre = prompt('Escriba nombre :'); //abre consola
    nota = prompt('Escriba su nota :')

    if(nota >=5){
        alert(nombre + " esta aprobado con un "+nota);
    }else{
        alert(nombre + "esta suspenso con un "+nota);
    }

    */

    //2. pedir dos numeros, convertir a enteros y ver cual es mayor de los dos.
/*
    let num1;
    let num2;
    
    num1 = prompt('Introduce el primer numero :');
    num2 = prompt('Introduce el segundo numero :');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1 > num2){
        alert(num1 + " es mayor que el "+num2);
    }else{
        alert(num2 + " es mayor que el "+num1);
    }
        */

    //3. promedio de 3 notas
    /*
    let nota1, nota2, nota3;
    nota1 = prompt('Introduce la nota 1:');
    nota2 = prompt('Introduce la nota 2:');
    nota3 = prompt('Introduce la noat 3');

    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);

    let promedio;
    promedio = (nota1+nota2+nota3)/3;

    if(promedio >= 9){
        alert("Ha sacado un sobresaliente.")
    }else if(promedio >= 7 && promedio<=8){
        alert("Ha sacado un notable.")
    }else if(promedio >=6){
        alert("Ha sacado un bien.")
    }else if(promedio >= 5){
        alert("Ha sacado un suficiente.")
    }else if(promedio < 5){
        alert("Ha suspendido.")
    }
        
*/
//4. mismo ejercicio pero con switch
/*
    let valor;
    valor = prompt('Ingrese un valor entre 1 y 5 :');
    valor = parseInt(valor);

    switch(valor){
        case 1:
            alert('uno');
            break;

        case 2:
            alert('dos');
            break;

        case 3:
            alert('tres');
            break;

        case 4:
            alert('cuatro');
            break;

        case 5:
            alert('cinco');
            break;


        default:
        alert('Debe ingresar un valor comprendido entre 1 y 5:');
        
    }
        */

    let x;
    x = prompt('Introduce un numero x :');
    x = parseInt(x);
        switch(true){
            case x > 0 && x < 10:
                alert("x > 0 && x < 10");
                break;

            case x > 0 && x < 20:
                alert("x > 0 && x < 20");
                break;

            case x > 0 || x < 100:
                alert("x < 0 && x > 100");
                break;

            default:
                alert("Ninguno");


        }

}