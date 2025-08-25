import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const correo = 'seba.leon@correo.com';
    const contrasena = 'abc123'

    return (
        <div>
            <form action="" className='formulario'>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required onChange={
                        (e) => setEmail(e.target.value)
                    } />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" required minLength={6} onChange={
                        (e) => setPassword(e.target.value)
                    } />
                </div>
                <div className='btn btn-primary' onClick={
                    () => {
                        if (password.length < 6) {
                            alert('La contraseña debe tener mínimo 6 caracteres')
                        } else if (email === correo && password === contrasena) {
                            alert('Login exitoso');
                        } else {
                            alert('Email o contraseña erroneos');
                        }
                    }
                }>Ingresar</div>


            </form>
        </div>
    )
}

export default Login
