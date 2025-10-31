import { useParams } from "react-router-dom";
import usuarios from "../data/usuarios.json";

function Detalle() {
    const { id } = useParams();
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return (
        <main><h2>Usuario no encontrado</h2>
        <p>No existe Usuario con ese nombre en la lista</p>
        </main>
        );
    }

    return (
        <main>
            <h2>Detalle del Usuario</h2>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
        </main>
    );
}

export default Detalle;