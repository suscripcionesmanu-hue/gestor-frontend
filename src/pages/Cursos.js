import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Usamos la dirección directa de tu backend en Render
  const API_URL = "https://gestor-backend-061t.onrender.com";

  useEffect(() => {
    axios.get(`${API_URL}/cursos`)
      .then(res => {
        setCursos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando cursos");
        setLoading(false);
      });
  }, []);

  // Función para calcular el estado del curso
  const getEstadoCurso = (inicio, fin) => {
    if (!inicio) return { texto: "Sin fecha", color: "bg-gray-100 text-gray-800" };
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fInicio = new Date(inicio);
    const fFin = fin ? new Date(fin) : new Date(inicio);

    if (hoy < fInicio) return { texto: "Próximo", color: "bg-yellow-100 text-yellow-800" };
    if (hoy > fFin) return { texto: "Finalizado", color: "bg-red-100 text-red-800" };
    return { texto: "En curso", color: "bg-green-100 text-green-800" };
  };

  if (loading) return <div className="p-10 text-center">Cargando cursos...</div>;

  return (
    <div>
      {/* Cabecera */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gestión de Cursos</h1>
          <p className="text-gray-500 mt-1">Administra los cursos activos y finalizados</p>
        </div>
        <Link 
          to="/cursos/nuevo" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200 flex items-center gap-2"
        >
          <span>+</span> Nuevo Curso
        </Link>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {cursos.map(curso => {
          const estado = getEstadoCurso(curso.fecha_inicio, curso.fecha_fin);
          
          return (
            <div 
              key={curso.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Cabecera de la Tarjeta */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{curso.nombre}</h3>
                    <p className="text-blue-100 text-sm mt-1">ID: {curso.id}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${estado.color}`}>
                    {estado.texto}
                  </span>
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="p-5 flex-grow">
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span className="font-medium">{curso.empresa_nombre || 'Sin empresa'}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Inicio: {curso.fecha_inicio}</span>
                </div>

                {/* Barra de progreso simulada o info extra */}
                <div className="border-t pt-4 mt-2">
                   <p className="text-xs text-gray-400 uppercase tracking-wider">Formador</p>
                   <p className="text-sm text-gray-700 font-medium">Por asignar</p>
                </div>
              </div>

              {/* Pie de Tarjeta (Botones) */}
              <div className="bg-gray-50 px-5 py-3 flex justify-end gap-2 border-t">
                <Link 
                  to={`/curso/${curso.id}`}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg text-sm transition"
                >
                  Detalles
                </Link>
                <Link 
                  to={`/asistencia/${curso.id}`} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition"
                >
                  Asistencia
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {cursos.length === 0 && (
        <div className="col-span-3 text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No hay cursos creados todavía.</p>
          <Link to="/cursos/nuevo" className="text-blue-600 hover:underline font-medium mt-2 block">
            Crear el primer curso
          </Link>
        </div>
      )}
    </div>
  );
}