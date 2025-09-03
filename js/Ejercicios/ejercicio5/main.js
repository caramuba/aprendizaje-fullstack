// Invocar la función

CalcularIva(); // Llamada a la función
CalcularIva(); // Llamada a la función

// Definición de la función
function CalcularIva() { 
    var precio = prompt("ingrese el precio al cual quiere calcular el IVA"); // Solicitar el precio al usuario
    precio = parseFloat(precio); // Convertir el precio a número decimal
    document.writeln("El precio con IVA es : $" + (precio * 1.21) + ". <br>"); // Mostrar el precio con IVA

}