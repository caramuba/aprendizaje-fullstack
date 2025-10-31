import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Detalle from './pages/Detalle';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listado" element={<Listado />} />
      <Route path="/detalle/:id" element={<Detalle />} />
      <Route path="*" element={<Error404 />} />  
      </Routes>
      </>
  );
}

export default App;