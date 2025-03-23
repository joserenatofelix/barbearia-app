import { useState } from "react";
import "../styles/Agendamentos.css";

function Agendamentos() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento confirmado para ${nome} em ${data} às ${hora}`);
  };

  return (
    <div className="agendamentos">
      <h2>Agende pelo nosso aplicativo</h2>
      <p>Agende um horário conosco clicando nos ícones abaixo e faça o download do nosso aplicativo.</p>
      <div className="agendamentos-container">
        <div className="agendamento-item">
          <img src="barba.png" alt="Barba" />
          <p>BARBA</p>
        </div>
        <div className="agendamento-item">
          <img src="cabelo.png" alt="Cabelo" />
          <p>CABELO</p>
        </div>
        <div className="agendamento-item">
          <img src="cabelo-barba.png" alt="Cabelo & Barba" />
          <p>CABELO & BARBA</p>
        </div>
      </div>
      <div className="download-buttons">
        <a href="https://play.google.com/store" target="_blank">
          <img src="google-play.png" alt="Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <img src="app-store.png" alt="App Store" />
        </a>
      </div>
    </div>
  );
}

export default Agendamentos;
