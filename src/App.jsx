import { useState } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Empleados from "./components/Empleados/Empleados";
import Asistencias from "./components/Asistencias";
import Reportes from "./components/Reportes";

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState("Inicio");

  return (
    <div className="flex">
      <NavBar cambiarSeccion={setSeccionActiva} />
      <div className="flex-1 p-8">
        {seccionActiva === "Inicio" && <Inicio />}
        {seccionActiva === "Empleados" && <Empleados />}
        {seccionActiva === "Asistencias" && <Asistencias />}
        {seccionActiva === "Reportes" && <Reportes />}
      </div>
    </div>
  );
}
