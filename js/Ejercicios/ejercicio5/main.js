// Invocar la función
/*
CalcularIva(); // Llamada a la función
CalcularIva(); // Llamada a la función

// Definición de la función
function CalcularIva() { 
    var precio = prompt("ingrese el precio al cual quiere calcular el IVA"); // Solicitar el precio al usuario
    precio = parseFloat(precio); // Convertir el precio a número decimal
    document.writeln("El precio con IVA es : $" + (precio * 1.21) + ". <br>"); // Mostrar el precio con IVA
}
*/

// Parametros y Argumentos

var descuento = 15;
var precio = parseFloat(prompt("Ingrece el precio a calcular"));

CalcularIVA( precio ); // Llamada a la función con argumentos
CalcularDescuento( precio, descuento ); // Llamada a la función con argumentos

function CalcularIVA( precio ) { // Definición de la función con parámetros
    document.writeln("El precio con IVA es : $" + (precio * 1.21) + ". <br>"); // Mostrar el precio con IVA
}

function CalcularDescuento( pcio, desc ) { // Definición de la función con parámetros
    document.writeln("El precio con descuento es : $" + (pcio - (pcio * desc / 100)) + ". <br>"); // Mostrar el precio con descuento
}
