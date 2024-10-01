function testUnidad2(){
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
        */
    
    document.write(`
        ${l > 1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}: 
        ${libs.join(", ")}[""]...
    `);
    
}