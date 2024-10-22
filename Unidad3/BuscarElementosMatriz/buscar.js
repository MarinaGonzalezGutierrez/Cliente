function buscarEj(elto, matriz){
    let encontrados = [];
    let pos = matriz.indexOf(elto);
    while(pos !=-1){
        encontrados.push(pos); //push: obtenia el elemento mas arriba de la matriz
        pos = matriz.indexOf(elto, ++pos);
    }
    return encontrados;
/*
    
colores = ['rojo', 'verde','azul', 'verde', 'amarillo' ];

encontrarTodos('azul', colores)
pos = 2
colores = [rojo, verde, verde, amarillo]
encontrados = [2]
encontrarTodos('verde', colores)
pos = 1
encontrados = [1]
pos = 3
encontrados = [1, 3]
    */
    

}

function testUnidad3(){
    colores = ['rojo', 'verde','azul', 'verde', 'amarillo' ];
    let encontradosVerde = encontrarTodos('marron', colores);
    document.write(encontradosVerde.join(', '));
}

function esPar(n){
    return n%2 == 0;
}

const esParLambda(n);

function buscarEj(){
    let numeros = [632, 3, 61, 5, 21, 23, 53, 6, 23];
    let numerosPares = numeros.reduce((max, nota) => nota>max ? nota : max);
    document.write(numeroMayor);

    
}

function obtenerMayor(max, nota){
    if(nota>max){
        return nota;
    }else{
        return max;
    }
}
const totalSuma = (total, nota) => total+=nota;