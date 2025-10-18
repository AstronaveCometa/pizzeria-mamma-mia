import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Register = () => {
        const navigate = useNavigate();
    const { register, error: errorContexto } = useContext(UserContext);

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

    const registerSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !passwordAgain || password !== passwordAgain) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }

        const success = await register(email, password);
        if (success) {
            alert('Registro exitoso.');
            navigate('/'); //acá manda al home si el registro fue exitoso
        }
    }

    return (
        <div className='register-height'>
            <form onSubmit={registerSubmit} className='formulario'>
                <div>
                    <label htmlFor="email">Ingrese un e-mail</label>
                    <input type="email" name="email" id="email" required onChange={
                        (e) => setEmail(e.target.value)
                    }/>
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
                <button type='submit' className='btn btn-primary'>Registrarse</button>


            </form>
        </div>
    )
}

export default Register
