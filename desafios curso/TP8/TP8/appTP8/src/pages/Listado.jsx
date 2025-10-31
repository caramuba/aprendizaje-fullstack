import { Link } from "react-router-dom";
import usuarios from "../data/usuarios.json";

function Listado() {
    return (
        <main>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <Link to={`/detalle/${usuario.id}`}> {usuario.nombre}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Listado;