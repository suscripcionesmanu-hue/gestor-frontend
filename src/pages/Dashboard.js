import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    // Llamamos a tu backend para pedir cursos
    axios.get("http://localhost:4000/cursos")
      .then(res => {
        setCursos(res.data);
      })
      .catch(err => {
        console.log("Error cargando cursos. ¿Backend encendido?");
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Panel de Control
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm font-medium">Total Cursos</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">{cursos.length}</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <p className="text-gray-500 text-sm font-medium">Usuarios</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">1</h2>
        </div>
      </div>
    </div>
  );
}