import React from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";

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
            O DIN e demais grupos da organização tem a honra de recebe-lo, e
            para comemorar sua chegada fizemos está recepção excepcionamente
            para você.
          </p>
          <p>
            Ela servirá para que você compreenda melhor os aspectos gerais do
            curso, conheça as entidades dos departamento e as externas, onde
            nosso trabalho também está presente.
          </p>
          <p>
            É importante salientar que nossa recepção é DIFERENTE da Recepção da
            UEM e diferente do TROTE.
          </p>
          <p>
            Do fundo de nossos corações binários, esperamos que participe e
            curta esta experiência!
          </p>
        </text>
      </div>
    </div>
  );
}
