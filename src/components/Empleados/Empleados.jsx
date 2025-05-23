import { useState } from "react";
import TablaEmpleados from "./TablaEmpleados";
import EmpleadoCard from "./EmpleadoCard";

export default function Empleados() {
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        Gestión de Empleados
      </h2>
      <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800">
        Registrar Empleado
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <TablaEmpleados onSeleccionar={setEmpleadoSeleccionado} />
        </div>
        <div className="flex-1">
          <EmpleadoCard empleado={empleadoSeleccionado} />
        </div>
      </div>
    </div>
  );
}