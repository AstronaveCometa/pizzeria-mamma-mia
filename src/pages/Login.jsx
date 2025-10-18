import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, error: errorContexto } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }

        setCargando(true);
        const success = await login(email, password);
        setCargando(false);

        if (success) {
            navigate('/'); //ir al home si uno hace login exitosamente
        }
    }

    return (
        <div className='register-height'>
            <form onSubmit={handleSubmit} className='formulario'>
                {errorContexto && <p className="text-danger">{errorContexto}</p>}
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        required 
                        minLength={6} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button 
                    className='btn btn-primary' 
                    type="submit" 
                    disabled={cargando} // Deshabilitar el boton mientras carga el login
                >
                    {cargando ? 'Ingresando...' : 'Ingresar'}
                </button>
            </form>
        </div>
    )
}

export default Login;