import { useEffect, useState } from "react";
import axios from "axios";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/cursos")
      .then(res => setCursos(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Listado de Cursos</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Nombre</th>
              <th className="text-left py-3">Empresa</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map(c => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{c.nombre}</td>
                <td className="py-3">{c.empresa_nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}