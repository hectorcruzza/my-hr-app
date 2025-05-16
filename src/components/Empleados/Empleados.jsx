import TablaEmpleados from "./TablaEmpleados";

export default function Empleados() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        Gestión de Empleados
      </h2>
      <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800">
        Registrar Empleado
      </button>
      <TablaEmpleados />
    </div>
  );
}