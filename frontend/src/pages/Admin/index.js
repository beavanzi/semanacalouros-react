import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";

import api from '../../services/api';

import "./styles.css";

export default function Admin() {
    const [admin_id, setAdmin_Id] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            await api.post('sessions', { admin_id });

            localStorage.setItem('admin_id', admin_id);

            history.push('/admininfo');
        } catch (err) {
            alert('Falha no login, tente novamente!');
        }

    }

    return (
        <div>
            <h1 className="title">Hello Admin</h1>
            <div className="admin-container">
                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="Login"
                        value={admin_id}
                        onChange={e => setAdmin_Id(e.target.value)}
                    />
                    <div>
                        <button className="button" type="submit">Join</button>
                    </div>
                </form>
            </div>
        </div>
    );
}