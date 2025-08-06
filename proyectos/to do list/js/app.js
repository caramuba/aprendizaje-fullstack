// -Obtener elementor del DOM- //
const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");
const filtros = document.querySelectorAll(".filtro");

let tareas = [];
let filtroActual = "todas"

function agregarTarea(texto) {
    if (texto.trim() === "") {
        return;
    }

    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false
    };
    tareas.push(nuevaTarea);
    renderTareas();
}

function renderTareas() {
    listaTareas.innerHTML = "";

    const tareasFiltradas = tareas.filter(tarea => {
        if (filtroActual === "activas") return !tarea.completada;
        if (filtroActual === "completadas") return tarea.completada;
        return true;
    });

    tareasFiltradas.forEach(tarea => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center";

        if (tarea.completada) {
            li.classList.add("list-grou-item-succes");
        }

        li.innerHTML = `
        <span style="flex:1; cursor:pointer" onclick="toggleCompletada(${tarea.id})">
        ${tarea.completada ? `<s>${tarea.texto}</s>` : tarea.texto}
        </span>
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${tarea.id})">🗑</button>
        `;

        listaTareas.appendChild(li);
    });
}

function toggleCompletada(id) {
    tareas = tareas.map(tarea => {
        if (tarea.id === id) tarea.completada =!tarea.completada;
        return tarea;
    });
    renderTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    renderTareas();
}

btnAgregar.addEventListener("click", () => {
    agregarTarea(inputTarea.value);
    inputTarea.value = "";
    inputTarea.focus();
});

filtros.forEach(btn => {
    btn.addEventListener("click", () => {
        filtros.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filtroActual = btn.dataset.filtros;
        renderTareas();
    });
});

