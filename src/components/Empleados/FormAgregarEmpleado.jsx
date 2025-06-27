export default function FormAgregarEmpleado({
  nuevoEmpleado,
  handleChange,
  handleSubmit,
  cerrarForms,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h3 className="text-xl font-bold mb-4 text-red-900">
          Registrar Empleado
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoEmpleado.nombre}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="puesto"
            placeholder="Puesto"
            value={nuevoEmpleado.puesto}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="area"
            placeholder="Área"
            value={nuevoEmpleado.area}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={nuevoEmpleado.correo}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={nuevoEmpleado.telefono}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            pattern="[0-9]{10}"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={cerrarForms}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
