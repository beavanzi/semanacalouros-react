//atalho rfc

import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Menu() {
  return (
    <div className="box-menu">
      <nav>
        <NavLink
          className="menu-item"
          exact
          to="/cronograma"
          activeClassName="active"
        >
          Cronograma
        </NavLink>
        <NavLink className="menu-item" to="/map" activeClassName="active">
          Mapa da UEM
        </NavLink>
      </nav>
    </div>
  );
}
