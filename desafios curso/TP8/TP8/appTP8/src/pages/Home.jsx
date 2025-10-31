import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const irAlListado = () => {
        navigate('/Listado');
    };

    return (
        <div>
            <h1>Listado de clientes 2025</h1>
            <p>Estos son todos los clientes prefirieron nuestro servicio</p>
            <button onClick={irAListado}>Ver Lista</button>
        </div>
    );
}