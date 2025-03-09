// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert(`Welcome, Today is a great day to be Happy 😊`);


let amigos = []



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

//function agregar amigo
function agregarAmigo() {
    let inputAmigo = document.querySelector(`#amigo`);
    let nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo===``) {
        alert(`Inserte un nombre por favor`);
        return;
    }

    if(amigos.includes(nombreAmigo)) {
        alert(`Agrega un nombre diferente a los anteriores`);
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();
    limpiarCaja();
    return;

}

//limpiarcaja
function limpiarCaja() {
    let valorCaja = document.querySelector(`#amigo`);
    valorCaja.value = ``;
}

function actualizarLista() {
    let listaAmigos = document.getElementById(`listaAmigos`)
    listaAmigos.innerHTML = ``;

    for(let i = 0; i < amigos.length; i++) {
        let nuevoNombre = document.createElement(`li`);
        nuevoNombre.textContent = amigos[i];
        listaAmigos.appendChild(nuevoNombre);
    }
    return;
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert(`Ingresa nombre de amigos para sortear`);
        return;

    }   

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const nombreSorteado = amigos[indiceAleatorio];

    const resultado = document.querySelector(`#resultado`);
    resultado.innerHTML = `Amigo sorteado: <strong>${nombreSorteado}</strong>`;


}


//Best regards Gerchon
asignarTextoElemento(`h1`, `Juego del amigo secreto`);
asignarTextoElemento(`h2`, `Añade el nombre de varios amigos para sortear`);