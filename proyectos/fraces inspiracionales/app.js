let frases = [
    "La vida es un viaje, no un destino.",
    "El conocimiento es poder, abrete a aprender y serás inparable",
    "La perseverancia es la clave del éxito.",
    "La creatividad es la inteligencia divirtiéndose.",
    "La felicidad no es un destino, es una forma de viajar.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es lo que sucede mientras estás ocupado haciendo otros planes.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La única forma de hacer un mal trabajo es no hacerlo.",
    "La vida es un desafío, enfréntalo.",
    "La vida es un regalo, disfrútalo.",
    "Puedes vivir tu sueño, hazlo realidad.",
    "La vida es una aventura, atrévete a vivirla.",
    "Eres tu propia obra maestra.",
    "La vida es un juego, juega para ganar.",
    "Cada día es una oportunidad, aprovecha cada momento.",
]

const boton = document.getElementById("btn-frase");
const contenedorfrase = document.getElementById("frase");

function fraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

boton.addEventListener("click", () => {
    const nuevaFrase = fraseAleatoria();
    contenedorfrase.textContent = `"${nuevaFrase}"`;

    contenedorfrase.classList.remove("frase-animada");
    void contenedorfrase.offsetWidth;
    contenedorfrase.classList.add("frase-animada");
    
});