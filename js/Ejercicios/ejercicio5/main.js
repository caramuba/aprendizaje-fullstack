function CalcularIva() {
    var precio = prompt("ingrese el precio al cual quiere calcular el IVA");
    document.writeln("el precio sin IVA es : $" + precio + ". " + "El precio con IVA es : $" + (precio * 1.21) + ".")

}
CalcularIva();