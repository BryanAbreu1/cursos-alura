let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMax = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else{

        // el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');   
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
    intentos++
    limpiarCaja();

    }
    return;
    }


function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto (){
let numeroGenerado = Math.floor(Math.random()*10)+1;

if(listaNumeroSorteados.length == numeroMax){
    asignarTextoElemento('p', 'Ya se soltearon todos los numero posibles');
}else{

    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();

    //Indicar el intervalo de numero
    condicionesIniciales();

    //Generar numero secreo
    

    //Iniciar el numero de intentos

    //Deshabilitar el boton de nuevo juego

    document.querySelector('#reiniciar'). setAttribute(diasable, true)
    
}
condicionesIniciales();