//interaccion con elementos de HTML mediante DOM

var titulo = document.querySelector(`h1`) //selecciona el primer elemento h1 que encuentre en el HTML
alert(titulo.innerText); //muestra el texto que contiene el elemento h1 en una ventana emergente.
titulo.innerText = "Titulo cambiado exitosamente mediante manejo del DOM en JavaScript"; //cambia el texto del elemento h1
alert(titulo.innerText); //muestra el nuevo texto del elemento h1 en una ventana emergente.

//cambia el estilo del elemento h1
titulo.style.fontFamily = "helvetica"; 
titulo.style.color = "blue";
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "lightgrey";
titulo.style.padding = "20px";
titulo.style.transition = "all 0.5s ease";

//agrega interaccion al elemento h1
titulo.addEventListener("click", function() {
    titulo.style.color = "red";
    titulo.style.backgroundColor = "black";
});


//agrega una nueva interaccion al elemento h1
titulo.addEventListener("mouseover", function() {
    titulo.style.color = "blue";
    titulo.style.backgroundColor = "lightgrey";
});
