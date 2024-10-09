function testEj2_36(){
    let dividendo = prompt("Introduce el dividendo (debe ser mayor que el divisor):");
    dividendo = parseInt(dividendo);
    let divisor = prompt("Introduce el divisor :");
    divisor = parseInt(divisor);

    
        //18/3
        //18-3 X=15, CONTADOR = 1
        //15-3 X=12, COTADOR = 2
        //12-3 X=9, CONTADOR = 3
        //9-3 X=6, CONTADOR=4
        //6-3 X=3, CONTADOR=5
        //3-3 X=0, CONTADOR=6

        if(dividendo < divisor){
            alert("El dividendo debe ser superior al divisor");
            
        }else if(divisor <= 0){
            alert("El divisor no puede ser negativo o 0.")

        }else{
        
        let x = dividendo;
        let contador = 0;

        while(x >= divisor){
            x-=divisor;
            contador++;
        }

        alert("La division de :"+dividendo+ "/"+ divisor+ " da como cociente "+contador+ " y da como resto "+x);
    }
}