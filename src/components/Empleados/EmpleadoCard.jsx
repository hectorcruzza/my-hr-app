export default function EmpleadoCard({ empleado }) {
  if (!empleado) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-md max-w-md">
      <h3 className="text-xl font-bold text-red-900 mb-2">{empleado.nombre}</h3>
      <p><strong>Puesto:</strong> {empleado.puesto}</p>
      <p><strong>Área:</strong> {empleado.area}</p>
      <p><strong>Correo:</strong> {empleado.correo}</p>
      <p><strong>Teléfono:</strong> {empleado.telefono}</p>
    </div>
  );
}
