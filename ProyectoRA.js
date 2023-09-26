var adivinanzas = [
    {
        pregunta: "Blanco por dentro, verde por fuera, si quieres que te lo diga, espera.",
        respuesta: "La pera"
    },
    {
        pregunta: "En un día hay 4, en un año hay 2, en una semana hay 6, ¿qué es?",
        respuesta: "La letra a"
    },
    {
        pregunta: "Tiene dientes y no come, tiene cabeza y no es hombre.",
        respuesta: "Un ajo"
    },
    {
        pregunta: "No tiene patas ni cabeza, pero puede correr a gran velocidad.",
        respuesta: "El río"
    },
    {
        pregunta: "Es redonda como una pelota, pero no se juega en el campo, ¿qué es?",
        respuesta: "La tierra"
    }
];

var preguntaActual = 0;

function mostrarPregunta() {
    var pregunta = document.getElementById("adivinanza");
    pregunta.textContent = adivinanzas[preguntaActual].pregunta;
}

function verificarRespuesta() {
    var respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
    var respuestaCorrecta = adivinanzas[preguntaActual].respuesta.toLowerCase();
    var resultado = document.getElementById("resultado");

    if (respuestaUsuario === respuestaCorrecta) {
        resultado.textContent = "¡Correcto! ¡Has adivinado la respuesta!";
    } else {
        resultado.textContent= "Incorrecto. Inténtalo de nuevo.";
    }

    // Pasar a la siguiente pregunta o finalizar el juego
    if (preguntaActual < adivinanzas.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        resultado.textContent += " ¡Has terminado el juego!";
        document.getElementById("respuesta").disabled = true;
    }

    // Limpiar el campo de respuesta
    document.getElementById("respuesta").value = "";
}