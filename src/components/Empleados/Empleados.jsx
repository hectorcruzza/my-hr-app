import { useEffect, useState } from "react";
import TablaEmpleados from "./TablaEmpleados";
import EmpleadoCard from "./EmpleadoCard";
import { useGlobal } from "../../context/globalContext";
import FormAgregarEmpleado from "./FormAgregarEmpleado";

export default function Empleados() {
  const [loadingEmpleados, setLoadingEmpleados] = useState(true);
  const { getEmpleados, addEmpleado } = useGlobal();
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    puesto: "",
    area: "",
    correo: "",
    telefono: "",
  });
  const [mostrarForms, setMostrarForms] = useState(false);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    setLoadingEmpleados(true);
    const datos = await getEmpleados();
    setEmpleados(datos);
    setLoadingEmpleados(false);
  };

  const handleSeleccionar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
  };

  const handleChange = (e) => {
    setNuevoEmpleado({ ...nuevoEmpleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmpleado(nuevoEmpleado);
    setNuevoEmpleado({
      nombre: "",
      puesto: "",
      area: "",
      correo: "",
      telefono: "",
    });
    setMostrarForms(false);
    cargarEmpleados();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Gestión de Empleados</h2>

      <button
        onClick={() => setMostrarForms(true)}
        className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800 mb-6"
      >
        Registrar
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <TablaEmpleados
            empleados={empleados}
            onSeleccionar={handleSeleccionar}
            loading={loadingEmpleados}
          />
        </div>
        <div className="flex-1">
          <EmpleadoCard empleado={empleadoSeleccionado} />
        </div>
      </div>

      {mostrarForms && (
        <FormAgregarEmpleado
          nuevoEmpleado={nuevoEmpleado}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cerrarForms={() => setMostrarForms(false)}
        />
      )}
    </div>
  );
}
