import { useState, useEffect } from "react";

export default function EmpleadoCard({
  empleado,
  enEdicion,
  handleChangeEdicion,
  handleGuardarEdicion,
  handleCancelarEdicion,
  handleEliminar,
  iniciarEdicion,
}) {
  const [editable, setEditable] = useState({
    nombre: "",
    puesto: "",
    area: "",
    correo: "",
    telefono: "",
  });

  useEffect(() => {
    if (empleado && enEdicion) {
      setEditable({
        nombre: empleado.nombre,
        puesto: empleado.puesto,
        area: empleado.area,
        correo: empleado.correo,
        telefono: empleado.telefono,
      });
    }
  }, [empleado, enEdicion]);

  if (!empleado) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-md max-w-md text-center">
      <div className="flex justify-center mb-4">
        <img
          src="empleado.png"
          alt="Empleado"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {enEdicion ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGuardarEdicion(editable);
          }}
        >
          <input
            type="text"
            name="nombre"
            value={editable.nombre}
            onChange={(e) => handleChangeEdicion(e, setEditable)}
            placeholder="Nombre"
            className="border p-2 rounded w-full mb-2"
            required
          />
          <input
            type="text"
            name="puesto"
            value={editable.puesto}
            onChange={(e) => handleChangeEdicion(e, setEditable)}
            placeholder="Puesto"
            className="border p-2 rounded w-full mb-2"
            required
          />
          <input
            type="text"
            name="area"
            value={editable.area}
            onChange={(e) => handleChangeEdicion(e, setEditable)}
            placeholder="Área"
            className="border p-2 rounded w-full mb-2"
            required
          />
          <input
            type="email"
            name="correo"
            value={editable.correo}
            onChange={(e) => handleChangeEdicion(e, setEditable)}
            placeholder="Correo"
            className="border p-2 rounded w-full mb-2"
            required
          />
          <input
            type="tel"
            name="telefono"
            value={editable.telefono}
            onChange={(e) => handleChangeEdicion(e, setEditable)}
            placeholder="Teléfono"
            pattern="[0-9]{10}"
            className="border p-2 rounded w-full mb-2"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => handleCancelarEdicion()}
              className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800"
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
      ) : (
        <>
          <h3 className="text-xl font-bold text-red-900 mb-2">
            {empleado.nombre}
          </h3>
          <p>
            <strong>Puesto:</strong> {empleado.puesto}
          </p>
          <p>
            <strong>Área:</strong> {empleado.area}
          </p>
          <p>
            <strong>Correo:</strong> {empleado.correo}
          </p>
          <p>
            <strong>Teléfono:</strong> {empleado.telefono}
          </p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => iniciarEdicion()}
              className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Editar
            </button>
            <button
              onClick={() => handleEliminar(empleado.id)}
              className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
