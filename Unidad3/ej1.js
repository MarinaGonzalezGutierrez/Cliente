function testEj1(){
    numArray = new Array(0,1,2,3,4,5,6);
    //alert(numArray.length); //longitud matriz
    let coches = new Array();
    coches[0] = "Porsche";
    coches[1] = "Renault";
    alert(coches.length);
    let colores = ['Rojo', 'Azul', 'Verde'];
    coches[2] = "Seat";
    let a = ['Lunes', 'Martes', 3, 4, 5, 6, 'Domingo'];

    document.write(a.join(' | '));
    let ejemplo = [0,1,2,3, 4, 5, 6, 7];
    let otraMatriz = ejemplo.splice(3,4); //havcer copia
    otraMatriz[1] = 4;
    document.write(ejemplo.join(', '));
    //document.write('<br>', otraMatriz[1]);
}

function compararCadenaLongitud(){
    if(f1.length > Float32Array.length){
        return 1;
    }else if(f1.length < Float32Array.length){
        return -1;
    }else{
        return 0;
    }
}

function testUnidad3(){
    /*
    let frutas = ['Naranja', 'Pera', 'Melocoton', 'Albaricoque', 'Uva'];
    let frutasReverse = frutas.slice().reverse();
    frutas.sort(compararCadenaLongitud);
    document.write(frutas.join(', '));
    document.write('<br>', frutasReverse.join(', '))
    */

    var dimension1 = ["00", "01", "02"];
    var dimension2 = ["10", "11", "12"];

    var matriz2d = [dimension1, dimension2];
    alert(matriz2d[1][2]); //mostraria 12
}

function testUnidad4(){
    let dimension1 = ["00", "01", "02"];
    dimension1.unshift("03");
    document.write(dimension1.join(' ,'));
    let x = dimension1.pop();
    document.write
}