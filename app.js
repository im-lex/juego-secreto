let numeroSecreto = 0;
let intentos = 0; // contador
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    // el usuario acierta
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}!`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');    
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++; //suma de intentos
        limpiarCaja(); // Limpiar el campo
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros 

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }   else {

    // Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //condiciones iniciales
    condicionesIniciales();
    //reiniciar inciales
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

