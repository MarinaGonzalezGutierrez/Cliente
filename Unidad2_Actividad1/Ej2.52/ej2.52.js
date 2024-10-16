function testEj2_52(){
/*
 let numero = 140;
    let base = 2;

140/2 ->resto= 0, cociente = 70
70/2 -> resto = 0, cociente = 35
35/2 -> resto = 1, cociente = 17
17/2 -> resto = 1, cociente = 8
8/2 -> resto = 0, cociente = 4
4/2 -> resto = 0, cociente = 2
2/2 -> resto = 0, cociente = 1
1/2 -> resto = 1, cociente = 0

Binario: 10001100

base = 7
140/7 -> resto=0, cociente=20
20/7 -> resto = 6, cociente =2
260
*/

let numero = prompt("Introduce un numero positivo decimal:");
let base = prompt("Introduce la base(2-9)");
numero = parseInt(numero);
base = parseInt(base);
if(isNaN(numero) && numero<1){
    alert("El numero introducido no es correcto");
}

else if(isNaN(base) || base<2 || base<9){
    alert("El numero introducido como base no es correcto ")
}else{
    let c = numero;
    let r;
    let res= '';

    while(c>=base){
        r = c % base;
        c = c/base;
        c = parseInt(c);
        res = String(r) + res;

    }
    res = String(c) + res;
    document.write("El numero ", numero, " en base ", base, " es", res);
}

}