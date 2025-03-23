import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from './pages/Sobre'; // Certifique-se de que esta linha está correta
import Galeria from './pages/Galeria';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Agendamentos from './pages/Agendamentos';
import "./App.css"; // Caminho atualizado

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
        <nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
          <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
          <Link to="/sobre" style={{ margin: '10px', color: 'white' }}>Sobre</Link>
          <Link to="/galeria" style={{ margin: '10px', color: 'white' }}>Galeria</Link>
          <Link to="/servicos" style={{ margin: '10px', color: 'white' }}>Serviços</Link>
          <Link to="/contato" style={{ margin: '10px', color: 'white' }}>Contato</Link>
          <Link to="/agendamentos" style={{ margin: '10px', color: 'white' }}>Agendamentos</Link>
        </nav>
        <div style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 1000 }}>
          <a href="https://www.instagram.com/barbeariacorleone/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.png" alt="Instagram" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
