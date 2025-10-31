import { Navlink } from 'react-router-com';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <Navlink to="/" calssName={({ isActive }) => isActive ? 'activo' : ''}>
            Home
            </Navlink>
            <Navlink to="./Listado" calssName={({ isActive }) => isActive ? 'activo' : ''}>
            Listado
            </Navlink>
        </nav>
    )
}