import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import gifDinosaur from "../../assets/dinosaurgoogle.gif";

export default function Principal() {
  const history = useHistory();

  function NavToLink() {
    history.push("/info");
  }

  return (
    <div className="principal-container">
      <header>
        <h1>Recepção de Calouros</h1>
        <p>Ciência da Computação & Informática</p>
      </header>
      <nav>
        <img src={gifDinosaur} alt="Google Dinosaur" />
        <h2>Calouro - lvl. 0</h2>
        <button type="button" onClick={NavToLink}>
          START
        </button>
      </nav>
    </div>
  );
}
