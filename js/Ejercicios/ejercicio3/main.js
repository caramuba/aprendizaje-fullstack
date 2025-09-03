// Control de continuidad con break y continue
var texto = "hola a todos, este es el texto";
var letras = texto.split("");
var resultado = "";
/*
for (var i = 0; i < letras.length; i++) {
    if (letras[i] === " ") {
        break; // Sale del bucle al encontrar el primer espacio
    } else {
        resultado += letras[i];
    }
};
        alert(resultado);
*/

for (var i = 0 ; i < letras.length; i++) {
    if (letras[i] === " ") {
        continue; // Salta la iteración al encontrar un espacio
    } else {
        resultado += letras[i];
    }
}
alert(resultado);