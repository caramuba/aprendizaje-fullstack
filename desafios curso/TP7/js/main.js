async function cargarDatos() {
    try {
        const respuesta = await fetch(`data.json`);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar el archivo data.json`);
        }

        const productos = await respuesta.json();

        console.log('Datos cargados:', productos);

        const contenedor = document.getElementById('contenedorProductos');
        const tablaCarrito = document.querySelector('#tablaCarrito tbody');

        productos.forEach(producto => {

            const tarjeta = document.createElement('div');

            tarjeta.classList.add('tarjeta');

            tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.prenda}">
            <h3>${producto.prenda}</h3>
            <p>Precio: $${producto.precio}</p>
            <button>Agregar al carrito</button>
            `;

            const boton = tarjeta.querySelector('button');
            boton.addEventListener('click', () => {

                const fila = document.createElement('tr');

                fila.innerHTML = `
                <td>${producto.prenda}</td>
                <td>${producto.color}</td>
                <td>${producto.talle}</td>
                <td>$${producto.precio}</td>
                `;

                tablaCarrito.appendChild(fila);
                tarjeta.remove();
            });

            contenedor.appendChild(tarjeta);
        });
    }

    catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}
cargarDatos();