import React from 'react'
import { useContext } from "react";
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
    const { email, logout } = useContext(UserContext);

    return (
        <div className='header register-height'>
            <h1>Profile</h1>
            <h2>Email: {email}</h2>
            <button>
                <button className="btn btn-primary" onClick={logout}>
                    Cerrar sesión
                </button>
            </button>
        </div>
    )
}

export default Profile
