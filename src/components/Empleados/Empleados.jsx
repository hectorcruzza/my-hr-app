import { useEffect, useState } from "react";
import TablaEmpleados from "./TablaEmpleados";
import EmpleadoCard from "./EmpleadoCard";
import { useGlobal } from "../../context/globalContext";
import FormAgregarEmpleado from "./FormAgregarEmpleado";

export default function Empleados() {
  const { getEmpleados, addEmpleado, updateEmpleado, deleteEmpleado } =
    useGlobal();
  const [empleados, setEmpleados] = useState([]);
  const [loadingEmpleados, setLoadingEmpleados] = useState(true);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [mostrarForms, setMostrarForms] = useState(false);
  const [enEdicion, setEnEdicion] = useState(false);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    puesto: "",
    area: "",
    correo: "",
    telefono: "",
  });

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
    setEnEdicion(false);
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
    setEmpleadoSeleccionado(null);
    cargarEmpleados();
  };

  const iniciarEdicion = () => {
    setEnEdicion(true);
  };

  const cancelarEdicion = () => {
    setEnEdicion(false);
  };

  const guardarEdicion = async (datosEditados) => {
    await updateEmpleado(empleadoSeleccionado.id, datosEditados);
    setEnEdicion(false);
    setEmpleadoSeleccionado(null);
    cargarEmpleados();
  };

  const eliminarEmpleado = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de eliminar este empleado?"
    );
    if (!confirmacion) return;
    await deleteEmpleado(id);
    setEmpleadoSeleccionado(null);
    cargarEmpleados();
  };

  const handleChangeEdicion = (e, setEditable) => {
    const { name, value } = e.target;
    setEditable((prev) => ({ ...prev, [name]: value }));
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
            onEditar={iniciarEdicion}
            onEliminar={eliminarEmpleado}
            empleadoSeleccionado={empleadoSeleccionado}
          />
        </div>
        <div className="flex-1">
          <EmpleadoCard
            empleado={empleadoSeleccionado}
            enEdicion={enEdicion}
            handleChangeEdicion={handleChangeEdicion}
            handleGuardarEdicion={guardarEdicion}
            handleCancelarEdicion={cancelarEdicion}
            handleEliminar={eliminarEmpleado}
            iniciarEdicion={iniciarEdicion}
          />
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
