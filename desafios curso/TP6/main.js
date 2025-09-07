
// TP 6

// Eventos del Mouse

const coordenadas = document.querySelector('#coordenadas p'); // Selecciona el párrafo dentro del div con id "coordenadas"

document.addEventListener(`mousemove`, (e) => { // Escucha el evento 'mousemove' en todo el documento

    const x = e.clientX; // Obtiene la posición X del cursor
    const y = e.clientY; // Obtiene la posición Y del cursor

    coordenadas.textContent = `El cursor está en las Coordenadas: X=${x}, Y=${y}`;
}); // Actualiza el contenido del párrafo con las coordenadas actuales del cursor

console.log('El DOM se ha cargado completamente');
const entrada = document.getElementById('miInput'); // Selecciona el input con id "miInput"
const boton = document.getElementById('miBoton'); // Selecciona el botón con id "miBoton"
const textoSalida = document.getElementById('salida'); // Selecciona el H2 con id "salida"

boton.addEventListener('click', function () { // Escucha el evento 'click' en el botón
    const ingresado = entrada.value.trim(); // Obtiene el valor ingresado en el input
    textoSalida.textContent = `Hola ${ingresado}`; // Actualiza el contenido del H2 con el valor ingresado
});

const objetos = [ // Declaro Array de objetos con detalles de productos
    {
        id: 1,
        imagen: "assets/img/canguro.webp",
        nombre: "Canguro",
        precio: "$1500",
        descripcion: {                         // objeto 1
            talle: "M",
            color: "Marrón",
            stock: 5
        }
    },

    {
        id: 2,
        imagen: "assets/img/gorroLana.jpg",
        nombre: "Gorro de Lana",
        precio: "$800",
        descripcion:                           // objeto 2
        {
            talle: "L",
            color: "Negro",
            stock: 10
        }
    },

    {
        id: 3,
        imagen: "assets/img/gorroTaza.webp",
        nombre: "Gorro Taza",
        precio: "$600",
        descripcion:                          // objeto 3
        {
            talle: "42",
            color: "Gris",
            stock: 8
        }
    },

    {
        id: 4,
        imagen: "assets/img/gorroVisera.webp",
        nombre: "Gorro Visera",
        precio: "$700",
        descripcion:                         // objeto 4
        {
            talle: "L",
            color: "Azul",
            stock: 15
        }
    },

    {
        id: 5,
        imagen: "assets/img/remera.jpg",
        nombre: "Remera",
        precio: "$1200",
        descripcion:                        // objeto 5
        {
            talle: "M",
            color: "Negro",
            stock: 20
        }
    }
];

const botonObj = document.getElementById('mostrarObjeto'); // Selecciona el botón con id "mostrarObjeto"
const contenedor = document.getElementById('contenedorCards'); // Selecciona el div con id "contenedorCards"

botonObj.addEventListener('click', () => { // Escucha el evento 'click' en el botón
    contenedor.innerHTML = ''; // Limpia el contenido previo del contenedor

    for (const obj of objetos) {
        const card = document.createElement('div'); // Crea un nuevo div para la tarjeta
        card.classList.add('card'); // Agrega la clase 'card' al div

        card.innerHTML = `
        <img src="${obj.imagen}" alt="${obj.nombre}" class="card-img">
        <p>Item Nº ${obj.id}</p>
        <h3 class="card-title">${obj.nombre}</h3>
        <p class="card-price">${obj.precio}</p>
        <ul class="card-description">
            <li>Talle: ${obj.descripcion.talle}</li>
            <li>Color: ${obj.descripcion.color}</li>
            <li>Stock: ${obj.descripcion.stock}</li>
        </ul>
        `; // Define el contenido HTML de la tarjeta

        contenedor.appendChild(card); // Agrega la tarjeta al contenedor

    }
}); 