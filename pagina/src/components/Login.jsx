import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import regGif from "../headerbtns/metal-unscreen.gif";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Realizar solicitud de inicio de sesión al backend
      const response = await axios.post('http://localhost:8000/login', { username, password });

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', response.data.token);

      // Redirigir al usuario a la página protegida
      navigate('/Hero');
    } catch (error) {
      // Manejar el error de inicio de sesión
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-pink-400 font-rubik">
        <form onSubmit={handleLogin} className="grid gap-4">
          <h1 className='text-8xl font-rubik text-white hover: mb-8 drop-shadow-2xl'>¡Ingresa!</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button type='submit' className="px-4 py-2">
                        <img src={regGif} alt="Iniciar Sesión" className="w-35 h-35 object-contain cursor-pointer hover:scale-110 duration-300 ease-in-out animate-pulse" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;