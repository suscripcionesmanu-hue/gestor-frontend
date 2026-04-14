import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Usuario" };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-700">
        Panel de Control
      </h2>
      
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          Hola, <strong>{user.name}</strong>
        </span>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-4 rounded transition duration-200"
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}