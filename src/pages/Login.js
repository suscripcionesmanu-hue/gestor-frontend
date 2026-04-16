import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("https://gestor-backend-061t.onrender.com/auth/login", {
        username,
        password,
      });
      
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      
      {/* LADO IZQUIERDO - BRAND / IMAGEN (Oculto en móviles) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 justify-center items-center relative overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 border-4 border-white rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="text-center z-10 p-10">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
                GESTOR PRO
            </h1>
            <p className="text-blue-100 text-xl max-w-md">
                La herramienta definitiva para la gestión de formación y control de asistencia.
            </p>
            
            <div className="mt-10 flex justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <p className="text-white font-bold text-2xl">+200</p>
                    <p className="text-blue-100 text-xs uppercase tracking-wider">Cursos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <p className="text-white font-bold text-2xl">98%</p>
                    <p className="text-blue-100 text-xs uppercase tracking-wider">Satisfacción</p>
                </div>
            </div>
        </div>
      </div>

      {/* LADO DERECHO - FORMULARIO */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8">
        <div className="w-full max-w-md">
          
            {/* Logo para móvil */}
            <div className="lg:hidden text-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600">GESTOR PRO</h1>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Bienvenido
            </h2>
            <p className="text-gray-500 mb-8">
                Introduce tus datos para acceder al panel.
            </p>

            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
                    <p className="font-medium">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
                    <input
                        type="text"
                        placeholder="Ej: admin"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        required
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="ml-2 text-gray-600">Recordarme</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">¿Olvidaste tu clave?</a>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5"
                >
                    Iniciar Sesión
                </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-10">
                © 2024 ConductaGestión. Todos los derechos reservados.
            </p>
        </div>
      </div>

    </div>
  );
}