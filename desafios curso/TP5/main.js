const titulo = document.querySelector("h1");
titulo.innerHTML = "Trabajo Practico 5 <br> Titulo modificado con JS";

const lista = ["1", "2", "3", "4", "5"];
const items = lista.map(item => `<li>${item}</li>`).join("");
const listahtml = `<ul>${items}</ul>`;

document.getElementById("contenedor").innerHTML = listahtml;

document.getElementById("btn").addEventListener("click", () => {
    alert("Oh!! Hiciste Click!");
    alert("Bienvend@!");
});