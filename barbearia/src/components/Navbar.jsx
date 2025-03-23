import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Barbearia</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/agendamentos">Agendamentos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
