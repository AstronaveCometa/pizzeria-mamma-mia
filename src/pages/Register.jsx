import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    let igual = '';
    let estilo = {};

    if (password === passwordAgain && password !== '') {
        igual = 'Las contraseñas son iguales';
        estilo = { color: 'green' };
    } else if (password === '' || passwordAgain === '') {
        igual = '';
    } else {
        igual = 'Las contraseñas deben ser iguales';
        estilo = { color: 'red' };
    }    

    return (
        <div className='register-height'>
            <form className='formulario'>
                <div>
                    <label htmlFor="email">Ingrese un e-mail</label>
                    <input type="email" name="email" id="email" required onChange={
                        (e) => setEmail(e.target.value)
                    } />
                </div>
                <div>
                    <label htmlFor="password">Ingrese una contraseña</label>
                    <input type="password" name="password" id="password" required minLength={6} onChange={
                        (e) => setPassword(e.target.value) 
                        } />
                </div>
                <div>
                    <label htmlFor="passwordAgain">Confirme su contraseña</label>
                    <input type="password" name="passwordAgain" id="passwordAgain" required onChange={
                        (e) => setPasswordAgain(e.target.value)
                    } />
                </div>
                <div>
                    <p style={estilo}>{igual}</p>
                </div>
                <div className='btn btn-primary' onClick={
                    () => {
                        if (email !== '' && password !== '' && passwordAgain !== '' && password === passwordAgain && password.length >= 6) {
                            alert('Usuario registrado con éxito');
                        } else {
                            alert('Por favor, complete todos los campos correctamente');
                        }
                    }
                }>Registrarse</div>


            </form>
        </div>
    )
}

export default Register
