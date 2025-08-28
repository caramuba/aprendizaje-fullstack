//VARIABLES Y TIPOS DE DATOS

let nombre = "Camilo";    //-Modificable-
let edad = 36;    //-Modificable-
const programar = true;   //-Inmutable-
console.log(nombre, edad, programar);     //-Muestra en consola los valores de las variables-
console.log(typeof nombre, typeof edad, typeof programar);    //-Muestra en consola los tipos de datos de las variables-
console.log(typeof edad);         
console.log(typeof programar);




//OPERADORES MATEMÁTICOS

let base = 5;   //-Declarar variable base-
let altura = 6;  //-Declarar variable altura-
let area = base * altura;    //-Calcular área usando el operador *-

console.log(area);   //-Muestra en consola el valor del área-

let perimetro = (base + altura) * 2;    //-Calcular perímetro usando el operador +-
console.log(perimetro);   //-Muestra en consola el valor del perímetro-




//CONCATENACION Y TEMPATE LITERALS O TEMPLATE STRINGS

let mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;  //-Concatenar variables en un string usando template literals-
if (programar) {   //-Condicional para verificar si la variable programar es verdadera-
    mensaje += " y me gusta programar";   //-Concatena el mensaje adicional-
}

console.log(mensaje);   //-Muestra en consola el mensaje concatenado-


// CONVERSIÓN DE TIPOS DE DATOS

let num1 = "5";
let num2 = "7";
let suma = Number(num1) + Number(num2);   //-Convertir strings a números y sumar-
let sumaString = String(suma);    //-Convertir el resultado de la suma a string-
console.log(suma, sumaString);   //-Muestra en la consola el valor de suma y sumaString-


//OPERADORES LÓGICOS

if (edad >= 18 && programar) {  //-Verifica si la edad es mayor o igual a 18 y si programar es verdadero-
    console.log("Acceso Permitido");    //-Muestra en consola "Acceso Permitido" SÍ LAS DOS condiciones son verdaderas-
} else {                                            
    console.log("Acceso Denegado");     //-Muestra en consola "Acceso Denegado" SÍ UNA de las condiciones es falsa-
};

