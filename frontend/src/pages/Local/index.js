import React from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";

import "./styles.css";

export default function Local() {
  return (
    <div className="box-container">
      <Hello />
      <div className="content-container">
        <Menu />
        <div className="content">
          <iframe
            className="local-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.2888917821651!2d-51.936927368026254!3d-23.405364891724492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd132a8d00001%3A0x6ecea148b6a6618a!2sDIN%20-%20Departamento%20de%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sus!4v1586448832288!5m2!1spt-BR!2sus"
          ></iframe>
          <p>Auditório - 2º andar - Bloco C56 (DIN)</p>
        </div>
      </div>
    </div>
  );
}
