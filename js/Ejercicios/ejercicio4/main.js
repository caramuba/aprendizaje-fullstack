// Variables Globales y Locales

let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let precioConIVA = 0; // Variable Global

function calcularIVA() {
    let iva = 0.21; // Variable Local
    precioConIVA = precio + (precio * iva); // Uso las variables global y local
    console.log("Precio con IVA:", precioConIVA);
}
alert("Precio sin IVA: " + precio);
calcularIVA();
alert("Precio con IVA: " + precioConIVA);