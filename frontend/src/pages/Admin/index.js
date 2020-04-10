import React from 'react';
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Admin() {
    return (
        <div>
            <h1 className="title">Hello Admin</h1>
            <div className="admin-container">
                <input placeholder="Login" />
                <input type="password" placeholder="Password" />
                <nav>
                <NavLink className="button" type="submit" to="/admininfo" >
                    Join
                </NavLink>
                </nav>
            </div>
        </div>
    );
}