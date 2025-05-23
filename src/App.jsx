import { useState } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Empleados from "./components/Empleados/Empleados";
import Asistencias from "./components/Asistencias";
import Reportes from "./components/Reportes";

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState("Inicio");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NavBar cambiarSeccion={setSeccionActiva} />
      <div className="flex-1 p-4 md:p-8 bg-gray-50">
        {seccionActiva === "Inicio" && <Inicio />}
        {seccionActiva === "Empleados" && <Empleados />}
        {seccionActiva === "Asistencias" && <Asistencias />}
        {seccionActiva === "Reportes" && <Reportes />}
      </div>
    </div>
  );
}
