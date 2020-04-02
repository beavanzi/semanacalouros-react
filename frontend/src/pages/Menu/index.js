import React from "react";
import { NavLink, Switch } from "react-router-dom";

import "./styles.css";

export default function Menu() {
  return (
    <div className="box-container">
      <h1>Hello World!</h1>
      <div className="content-container">
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
        <div className="table-content">
          <table>
            <tr>
              <th>Dia 1</th>
              <th>Dia 2</th>
            </tr>
            <tr>
              <td>Palestra 1</td>
              <td>Apresentação</td>
            </tr>
            <tr>
              <td>Apresentação 2</td>
              <td>Palestra 2</td>
            </tr>
            <tr>
              <td>Apresentação 3</td>
              <td>Palestra 3</td>
            </tr>
            <tr>
              <td>Apresentação 4</td>
              <td>Palestra 4</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
