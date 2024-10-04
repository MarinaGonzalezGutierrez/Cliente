function testEj2_3(){
    let num1, num2;
    let div;
    num1 = prompt('Introduce el num1:');
    num2 = prompt('Introduce el num2:');
    
    /*
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    */

    div = num1/num2;
    alert("El resultado de "+num1+ " / "+num2 +" es :"+div);

    //Si intentamos dividir dos textos, dara error, ya que no se pueden dividir dos Strings.
}