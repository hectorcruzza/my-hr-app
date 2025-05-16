export default function TablaEmpleados() {
  const empleados = [
    { id: 1, nombre: "Héctor Cruz", puesto: "null", area: "null" },
    { id: 2, nombre: "Victoria Cruz", puesto: "null", area: "null" },
    { id: 3, nombre: "Pedro Cruz", puesto: "null", area: "null" },
  ];

  return (
    <table className="w-full mt-6 border border-gray-300">
      <thead className="bg-red-900 text-white">
        <tr>
          <th className="p-2 border">Nombre</th>
          <th className="p-2 border">Puesto</th>
          <th className="p-2 border">Área</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((emp) => (
          <tr key={emp.id} className="text-center hover:bg-gray-100">
            <td className="p-2 border">{emp.nombre}</td>
            <td className="p-2 border">{emp.puesto}</td>
            <td className="p-2 border">{emp.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}