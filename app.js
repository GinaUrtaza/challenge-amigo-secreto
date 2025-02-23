// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo").value.trim(); 

    if (inputAmigo == "") {
            alert("Por favor, inserte un nombre");  
            return;
    }

    if (amigos.includes(inputAmigo)) {
        alert("Este amigo ya fue agregado");
        return;
    }

    amigos.push(inputAmigo);
    console.log(amigos.length);
    actualizarListaAmigos();
    limpiarCaja();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length <2) {
        alert("No hay suficientes amigos para sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><h2>Tu amigo sorteado es:</h2> <strong>${amigoSorteado}</strong></li>`;

}
