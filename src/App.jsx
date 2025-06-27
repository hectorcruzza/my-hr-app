import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Empleados from "./components/Empleados/Empleados";
import Asistencias from "./components/Asistencias";
import Reportes from "./components/Reportes";
import { GlobalProvider, useGlobal } from "./context/globalContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

export default function App() {
  return (
    <GlobalProvider>
      <MainContent />
    </GlobalProvider>
  );
}

function MainContent() {
  const { user, loading } = useGlobal();

  if (loading)
    return <h1 className="text-center text-2xl mt-20">Cargando...</h1>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      {user && <NavBar />}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 overflow-x-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/empleados"
            element={
              <ProtectedRoute>
                <Empleados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/asistencias"
            element={
              <ProtectedRoute>
                <Asistencias />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reportes"
            element={
              <ProtectedRoute>
                <Reportes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
