// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//hacemos una lista 
let listaAmigo = [] ;

console.log(listaAmigo.length);

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }
     // Agregar el nombre a la lista si no esta vacio
     listaAmigo.push(nombre);

     // Limpiar el campo de entrada
     input.value = "";
 
     mostrarLista();
 }
 function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigo.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigo.length === 0) {
        alert("Agrega al menos un nombre antes de sortear."); // Verifica que exista por lo menos un amigo 
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigo.length); 
    let amigoSecreto = listaAmigo[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}