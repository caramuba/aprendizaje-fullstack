// Variables Globales y Locales
/*
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
*/

// usos y ambitos de las variables
var variable1 = "Hola Tierra!"; // Variable Global

if (variable1 != "") {
    var variable2 = "Hola Marte!"; // asigna el valor a la variable global "variable2"
}

function mostrarVariables() {
    var variable3 = "Hola Mercurio!"; // Variable Local
    document.writeln("El contenido de la variable2 es: " + variable3 + "<br>");
}

document.writeln("El contenido de la variable1 es: " + variable1 + "<br>"); // Siempre se puede mostrar porque es global
document.writeln("El contenido de la variable2 es: " + variable2 + "<br>");
mostrarVariables(); // Llamo a la función para mostrar variable3
// La variable3 no se puede mostrar aquí porque es local a la función mostrarVariables
