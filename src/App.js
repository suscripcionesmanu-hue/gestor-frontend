import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import CursoDetalle from "./pages/CursoDetalle";
import Empresas from "./pages/Empresas";
import EmpresaDetalle from "./pages/EmpresaDetalle";
import Formadores from "./pages/Formadores";
import Alumnos from "./pages/Alumnos";
import Certificados from "./pages/Certificados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:id" element={<CursoDetalle />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/empresa/:id" element={<EmpresaDetalle />} />
          <Route path="/formadores" element={<Formadores />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/certificados" element={<Certificados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;