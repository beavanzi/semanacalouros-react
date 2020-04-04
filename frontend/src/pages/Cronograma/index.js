import React from "react";
import Menu from "../../components/Menu";
import Hello from "../../components/Hello";

import "./styles.css";

export default function Cronograma() {
  return (
    <div className="box-container">
      {/* <h1>Hello World!</h1> */}
      <Hello />
      <div className="content-container">
        <Menu />
        <div className="table-content">
          <table>
            <tr>
              <th style={{ backgroundColor: "#000", color: "#000" }}></th>
              <th>Dia 1</th>
              <th>Dia 2</th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fff", color: "#000" }}>3:55</td>
              <td>Palestra 1</td>
              <td>Apresentação</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fff", color: "#000" }}>3:55</td>

              <td>Apresentação 2</td>
              <td>Palestra 2</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fff", color: "#000" }}>3:55</td>

              <td>Apresentação 3</td>
              <td>Palestra 3</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fff", color: "#000" }}>3:55</td>

              <td>Apresentação 4</td>
              <td>Palestra 4</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
