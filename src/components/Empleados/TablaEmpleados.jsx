export default function TablaEmpleados({ onSeleccionar }) {
  const empleados = [
    {
      id: 1,
      nombre: "Héctor Cruz",
      puesto: "Diseñador UX",
      area: "Marketing",
      correo: "hector@gmail.com",
      telefono: "981-135-1094"
    },
    {
      id: 2,
      nombre: "Victoria Cruz",
      puesto: "Analista RH",
      area: "Recursos Humanos",
      correo: "victoria@gmail.com",
      telefono: "981-171-9793"
    },
    {
      id: 3,
      nombre: "Pedro Cruz",
      puesto: "Desarrollador",
      area: "TI",
      correo: "pedro@gmail.com",
      telefono: "981-126-5174"
    },
  ];

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