import React from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";
import caccomImg from "../../assets/caccom.png";
import cainfoImg from "../../assets/cainfo.png";
import dinImg from "../../assets/din.png";
import petImg from "../../assets/pet.png";

import "./styles.css";

export default function Info() {
  return (
    <div className="box-container">
      <Hello />
      <div className="content-container">
        <Menu />
        <text>
          <p id="binary">
            01010011 01100101 01101010 01100001 00100000 01100010 01100101
            01101101 00100000 01110110 01101001 01101110 01100100 01101111
          </p>
          <h1>Saudações, calouro/a!</h1>
          <p>
            Nós do DIN, PET Informática, Centro Acadêmico de Informática
            (CAINFO) e Centro Acadêmico de Ciência da Computação (CACCOM) temos
            a honra de recebê-lo e, para comemorar sua chegada, fizemos está
            recepção excepcionamente para você.
          </p>
          <p>
            Ela servirá para que você compreenda melhor os aspectos gerais do
            curso, conheça as entidades dos departamento e as externas, onde
            nosso trabalho também está presente.
          </p>
          <p>
            É importante salientar que nossa recepção é DIFERENTE da Recepção da
            UEM e diferente do TROTE, e irá ocorrer no formato de evento online
            este ano por conta do Covid-19.
          </p>
          <p>
            Do fundo de nossos corações binários, esperamos que participe e
            curta esta experiência!
          </p>

          <h2>Realização:</h2>
          <div className="container-footer">
            <img src={dinImg} alt="Logo DIN" />
            <img src={caccomImg} alt="Logo CACCOM" />
            <img src={cainfoImg} alt="Logo CAINFO" />
            <img src={petImg} alt="Logo PET" />
          </div>
        </text>
      </div>
    </div>
  );
}
