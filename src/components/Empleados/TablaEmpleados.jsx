export default function TablaEmpleados({
  empleados,
  onSeleccionar,
  loading,
  onEditar,
  onEliminar,
  empleadoSeleccionado,
}) {
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
          {!empleadoSeleccionado && <th className="p-2 border">Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {empleados.map((emp) => (
          <tr
            key={emp.id}
            className={`cursor-pointer text-center hover:bg-gray-200 ${
              empleadoSeleccionado?.id === emp.id ? "bg-yellow-100" : ""
            }`}
            onClick={() => onSeleccionar(emp)}
          >
            <td className="p-2 border">{emp.nombre}</td>
            <td className="p-2 border">{emp.puesto}</td>
            {!empleadoSeleccionado && (
              <td className="p-2 border">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSeleccionar(emp);
                      onEditar();
                    }}
                    title="Editar"
                  >
                    <img
                      src="editar.png"
                      alt="Editar"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEliminar(emp.id);
                    }}
                    title="Eliminar"
                  >
                    <img
                      src="eliminar.png"
                      alt="Eliminar"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
