import React from 'react';

import "./styles.css";

export default function Admin() {
    return (
        <div>
            <h1 className="title">Hello Admin</h1>
            <div className="admin-container">
                <input placeholder="Login" />
                <input type="password" placeholder="Password" />
                <button type="submit">Join</button>
            </div>
        </div>
    );
}