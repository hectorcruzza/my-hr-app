export default function EmpleadoCard({ empleado }) {
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

      <h3 className="text-xl font-bold text-red-900 mb-2">{empleado.nombre}</h3>
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
    </div>
  );
}
