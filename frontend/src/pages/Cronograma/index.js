import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";
import Table from "../../components/Table";

import "./styles.css";

export default function Cronograma() {
  const ApiURL =
    "https://script.google.com/macros/s/AKfycbym_40P0a9KpewKla4p5YhcH41f7wCbFO1FDGD8zcivxJesBicQ/exec";
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    var result = fetch(ApiURL)
      .then((response) => response.json())
      .then((d) => setAtividades(d.filter((item) => item.horario.length > 0)));
  }, []);

  return (
    <div className="box-container">
      <Hello />
      <div className="content-container">
        <Menu />
        <Table atividade={atividades} />
      </div>
    </div>
  );
}
