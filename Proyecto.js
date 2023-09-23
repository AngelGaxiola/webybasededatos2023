var adivinanzas = [
    { pregunta: "Tiene patas pero no camina, tiene cabeza pero no piensa. ¿Qué es?", respuesta: "una mesa" },
    { pregunta: "Blanco por dentro, verde por fuera, si te lo sabes, eres muy astuto. ¿Qué es?", respuesta: "una sandía" }
];

var indiceAdivinanzaActual = 0;

function mostrarAdivinanza() {
    document.getElementById("adivinanza").textContent = adivinanzas[indiceAdivinanzaActual].pregunta;
}