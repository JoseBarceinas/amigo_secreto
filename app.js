// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo(){
    var nombre = document.querySelector(".input-name").value;
    if(nombre == ""){
        window.alert("Agrega un amigo")
    }
    else{
        amigos.push(nombre);//agrega los elementos a la lista amigos
        console.log(amigos); //para verificar que si se estes agregando
        document.querySelector(".input-name").value = ""; //limpia la caja despues de agregar a la lista
        listaAmigos();// ejecuta la lista cada que se agrega un nuevo amigo
    }
}

function listaAmigos(){
    document.getElementById("listaAmigos").innerHTML = ""; //limpia la lista de amigos antes de imprimir algun otro
    
    for(i = 0; i<amigos.length; i++){ //recorre desde el 0 hasta el tamaño de la lista
        var elementoLista = document.createElement("li"); //crea el elemento por cada miembro de la lista
        elementoLista.textContent = amigos[i]; //para asignarle el contenido de cada elemento de la lista al elemento li
        document.getElementById("listaAmigos").appendChild(elementoLista); // Asigna que el elementoLista es pertenieciente al div de ul
    }
}

function sortearAmigo(){
    if(amigos.length == 0){ //compruba que el espacio del arreglo amigos no este vacio
        window.alert("No existen amigos por sortear");//si esta vacio muetra el mensaje
    }
    else{
        var indiceAleatorio = Math.floor(Math.random() * amigos.length); //generara un numero aleatorio segun entre 1 y el numero maxicmo de amigos
        var amigo = amigos[indiceAleatorio];
        resultado(amigo);
    }
}
function resultado(amigo) {
    document.getElementById("resultado").innerHTML = ""; // limpia el resultado antes de mostrar un nuevo amigo
    var elemento = document.createElement("li"); // crea el elemento para el amigo sorteado
    elemento.textContent = amigo; // asigna el nombre del amigo al elemento <li>
    document.getElementById("resultado").appendChild(elemento); // Asigna que el elementoLista es pertenieciente al div de ul
}
