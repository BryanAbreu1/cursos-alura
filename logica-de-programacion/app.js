//Declaracion de variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces ='vez';

//Creando un bucle con el condicional while
while(numeroUsuario != numeroSecreto){
let numeroUsuario= parseInt (prompt('Me indicas un numero del 1/10 por favor:'));


console.log (typeof(numeroUsuario));

//Condicion si acerto o no el numero

    if(numeroUsuario == numeroSecreto){
        alert(`Acertaste el numero, El numero es: ${numeroSecreto}. Y los intento fueron en: ${intentos} ${intentos==1 ?'vez' : 'veces'}  `);
    }
    else{
        if(numeroUsuario> numeroSecreto){

            alert('El numero es mas bajo');
        }
        else{
        alert('El numero es mayor');

        //Incrementando el contador de intento y cambiando la palabra 'vez por 'veces'
        //intentos= intentos +1;
        intentos++
        //palabraVeces= 'veces';
        }
        
        //limitar al usuario un numero de veces de intentos

        if(intentos> 3){
            alert('llegaste al numero max de intentos');
            break;
        }

    }
}