var adivinanzas = [
    { pregunta: "Tiene patas pero no camina, tiene cabeza pero no piensa. ¿Qué es?", respuesta: "una mesa" },
    { pregunta: "Blanco por dentro, verde por fuera, si te lo sabes, eres muy astuto. ¿Qué es?", respuesta: "una sandía" },
    { pregunta: "Roja como un tomate, pero no es de comer, si la aprietas, se pone negra enseguida. ¿Qué es?", respuesta: "una nariz" }
];

var indiceAdivinanzaActual = 0;

function mostrarAdivinanza() {
    document.getElementById("adivinanza").textContent = adivinanzas[indiceAdivinanzaActual].pregunta;
    document.getElementById("resultado").textContent = ""; 
    document.getElementById("resultado").classList.remove("correcto", "incorrecto");
}

function comprobarRespuesta() {
    var respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
    var respuestaCorrecta = adivinanzas[indiceAdivinanzaActual].respuesta.toLowerCase();
    var resultadoElement = document.getElementById("resultado");

    if (respuestaUsuario === respuestaCorrecta) {
        resultadoElement.textContent = "¡Correcto! ¡Has adivinado la respuesta!";
        resultadoElement.classList.add("correcto");
        }
    }