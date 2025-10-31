import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'activo' : ''}>
            Home
            </NavLink>
            <NavLink to="/Listado" className={({ isActive }) => isActive ? 'activo' : ''}>
            Listado
            </NavLink>
        </nav>
    )
}

export default Navbar;