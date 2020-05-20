import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

export default function AdminInfo() {
  // const admin_id = localStorage.getItem('admin_id')
  // const [avaliations, setAvaliations] = useState([]);

  // useEffect(() => {
  //     api.get('avaliations', {
  //         headers: {
  //             Authorization: admin_id,
  //         }
  //     }).then(response => {
  //         setAvaliations(response.data);
  //     })
  // }, [admin_id]);

  return 
    // <div className>
    //   <h1 className="title">Hello Admin</h1>
    //   <div className="list-container">
    //     <h2 className="title2">Avaliações cadastradas:</h2>
    //     <ul>
    //       {avaliations.map((avaliation) => (
    //         <li key={avaliation.id}>
    //           <strong>NOME:</strong>
    //           <p>{avaliation.name}</p>
    //           <strong>E-MAIL:</strong>
    //           <p>{avaliation.email}</p>
    //           <strong>RA:</strong>
    //           <p>{avaliation.ra}</p>
    //           <strong>DESCRIÇÃO:</strong>
    //           <p>{avaliation.description}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  
}
