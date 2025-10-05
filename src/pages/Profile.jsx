import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
    const { token, setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const logout = () => {
        setToken(false);
        navigate('/login');
    }
    return (
        <div className='header register-height'>
            <h1>Profile</h1>
            <h2>Email: seba.leon@correo.com</h2>
            <button>
                <button className="btn btn-primary" onClick={logout}>
                    Cerrar sesión
                </button>
            </button>
        </div>
    )
}

export default Profile
