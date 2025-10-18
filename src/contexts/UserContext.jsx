import { createContext, useState, useEffect } from "react";
import axios from "axios";

const URL_BASICA = 'http://localhost:5000/api/auth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${URL_BASICA}/login`, { email, password });
      const { token: tokenRecibido } = response.data;

      setToken(tokenRecibido);
      setEmail(email);

      localStorage.setItem('token', tokenRecibido);

      setError(null);
      return true;
    } catch (err) {
      setError('Error al iniciar sesión. Verifique credenciales.');
      console.error('Login Error:', err);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(`${URL_BASICA}/register`, { email, password });
      const { token: tokenRecibido } = response.data;

      setToken(tokenRecibido);
      setEmail(email);

      localStorage.setItem('token', tokenRecibido);

      setError(null);
      return true;
    } catch (err) {
      setError('Error en el registro. Verifique credenciales.');
      console.error('Register Error:', err);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
  };

  const getProfile = async () => {
    if (!token) {
      setEmail(null);
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.get(`${URL_BASICA}/me`, config);
      setEmail(response.data.email);

    } catch (err) {
      if (err.response && err.response.status === 401) {
        logout();
      }
      console.error('Error al obtener perfil:', err);
    }
  };

  useEffect(() => {
    getProfile();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, error, login, logout, register, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;