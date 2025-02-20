// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array

    actualizarLista(); // Actualiza la lista en la página

    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer un sorteo.");
        return;
    }

    let amigosSorteo = [...amigos]; // Copia del array original
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia el resultado previo

    let sorteados = {};

    amigos.forEach(amigo => {
        let opciones = amigosSorteo.filter(a => a !== amigo && !sorteados[a]);

        if (opciones.length === 0) {
            alert("No se pudo completar el sorteo. Inténtelo de nuevo.");
            return;
        }

        let amigoSecreto = opciones[Math.floor(Math.random() * opciones.length)];
        sorteados[amigoSecreto] = true;

        let li = document.createElement("li");
        li.textContent = `${amigo} -> ${amigoSecreto}`;
        resultado.appendChild(li);

        amigosSorteo = amigosSorteo.filter(a => a !== amigoSecreto);
    });
}
