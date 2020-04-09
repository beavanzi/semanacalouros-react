import React, { useState } from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";

import "./styles.css";

export default function Avaliacao() {
    return (
        <div className="box-container">
            <Hello />
            <div className="content-container">
                <Menu />
                <form>
                    <input id="name" placeholder="Seu Nome" />
                    <div className="input-group">
                        <input id="email" type="email" placeholder="E-mail" />
                        <input id="ra" placeholder="RA" />
                    </div>
                    <input id="description" placeholder="Descrição" />
                    <button id="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}