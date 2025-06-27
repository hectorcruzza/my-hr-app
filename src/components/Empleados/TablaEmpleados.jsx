export default function TablaEmpleados({ empleados, onSeleccionar, loading }) {
  if (loading) {
    return (
      <div className="mt-6 text-center text-gray-600">
        Cargando empleados...
      </div>
    );
  }

  if (empleados.length === 0) {
    return (
      <div className="mt-6 text-center text-gray-600">
        No hay empleados registrados.
      </div>
    );
  }

  return (
    <table className="w-full mt-6 border border-gray-300">
      <thead className="bg-red-900 text-white">
        <tr>
          <th className="p-2 border">Nombre</th>
          <th className="p-2 border">Puesto</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((emp) => (
          <tr
            key={emp.id}
            className="cursor-pointer text-center hover:bg-gray-200"
            onClick={() => onSeleccionar(emp)}
          >
            <td className="p-2 border">{emp.nombre}</td>
            <td className="p-2 border">{emp.puesto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
