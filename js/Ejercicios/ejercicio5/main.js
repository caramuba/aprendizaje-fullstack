function CalcularIva() {
    var precio = prompt("ingrese el precio al cual quiere calcular el IVA");
    document.writeln("El precio con IVA es : $" + (precio * 1.21) + ".")

}
CalcularIva();