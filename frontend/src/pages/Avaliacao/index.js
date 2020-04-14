import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";

import api from "../../services/api";

import "./styles.css";

export default function Avaliacao() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRa] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  async function handleAvaliacao(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      ra,
      description,
    };

    try {
      await api.post("avaliations", data);

      alert("Avaliação enviada com sucesso!");

      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="box-container">
      <Hello />
      <div className="content-container">
        <Menu />
        <form onSubmit={handleAvaliacao}>
          <input
            id="name"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-group">
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="ra"
              placeholder="RA"
              value={ra}
              onChange={(e) => setRa(e.target.value)}
            />
          </div>
          <input
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button id="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
