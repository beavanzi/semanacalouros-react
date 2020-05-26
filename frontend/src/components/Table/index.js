import React from "react";
import Rex from "../../assets/rexBranco.png";

import "./styles.css";

export default class Table extends React.Component {
  renderTableData() {
    return this.props.atividade.map((row) => {
      console.log(row);

      const { horario, dia, atividades, plataforma } = row; //destructuring
      return (
        <tr>
          <td className="modified">{horario}</td>
          <td>{dia}</td>
          <td>{atividades}</td>
          <td>{plataforma}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.loading ? (
          <div class="loader">
            <img src={Rex} style={{ width: 180 }} />
          </div>
        ) : (
          <table>
            <tr>
              <th style={{ backgroundColor: "#000", color: "#000" }}></th>
              <th>Dia</th>
              <th>Atividades</th>
              <th>Plataforma</th>
            </tr>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        )}
      </div>
    );
  }
}

// export default function Table(props) {
//   return (
//     <div className="table-content">
//       <table></table>
//     </div>
//   );
// }

// {
/* <tr>
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
</tr> */
