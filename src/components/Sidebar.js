import { Link, useLocation } from "react-router-dom"

export default function Sidebar(){
  const location = useLocation();

  const isActive = (path) => {
    const linkPath = path === "/dashboard" ? location.pathname === path : location.pathname.startsWith(path);
    return `block py-2.5 px-4 rounded transition duration-200 ${
      linkPath 
        ? "bg-blue-600 text-white font-semibold shadow-lg" 
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;
  }

  return(
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed shadow-xl">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">GestorPro</h1>
        <span className="text-xs text-gray-500">Plataforma de Formación</span>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <Link to="/dashboard" className={isActive("/dashboard")}>
          🏠 Dashboard
        </Link>
        
        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Gestión
        </div>
        
        <Link to="/cursos" className={isActive("/cursos")}>
          📚 Cursos
        </Link>
        <Link to="/empresas" className={isActive("/empresas")}>
          🏢 Empresas
        </Link>
        <Link to="/formadores" className={isActive("/formadores")}>
          👨‍🏫 Formadores
        </Link>
        <Link to="/alumnos" className={isActive("/alumnos")}>
          👥 Alumnos
        </Link>
        
        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Documentación
        </div>
        
        <Link to="/certificados" className={isActive("/certificados")}>
          📜 Certificados
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-800 text-xs text-gray-600">
        v2.0 SQL Edition
      </div>
    </div>
  )
}