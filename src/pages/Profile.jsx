import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='header register-height'>
            <h1>Profile</h1>
            <h2>Email: seba.leon@correo.com</h2>
            <button>
                <Link to='/'>
                    Cerrar sesión
                </Link>
            </button>
        </div>
    )
}

export default Profile
