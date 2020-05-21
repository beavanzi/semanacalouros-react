//atalho rfc

import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Menu() {
  return (
    <div className="box-menu">
      <nav>
        <NavLink className="menu-item" to="/info" activeClassName="active">
          Informações
        </NavLink>
        <NavLink
          className="menu-item"
          exact
          to="/cronograma"
          activeClassName="active"
        >
          Cronograma
        </NavLink>
        <NavLink className="menu-item" to="/local" activeClassName="active">
          Local
        </NavLink>
        {/* <NavLink className="menu-item" to="/avaliacao" activeClassName="active">
          Avaliação
        </NavLink> */}
      </nav>
    </div>
  );
}
