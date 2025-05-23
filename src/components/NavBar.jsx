export default function NavBar({ cambiarSeccion }) {
  return (
    <nav className="w-full md:w-64 bg-red-900 text-white flex md:flex-col items-center md:items-start p-4 space-y-0 md:space-y-4">
      <div className="flex items-center space-x-2 mb-4 md:mb-6">
        <img
          src=""
          alt="Logo HR"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>

      <div className="flex md:flex-col gap-2 w-full">
        <button onClick={() => cambiarSeccion('Inicio')} className="text-left hover:bg-red-800 p-2 rounded w-full">
          Inicio
        </button>
        <button onClick={() => cambiarSeccion('Empleados')} className="text-left hover:bg-red-800 p-2 rounded w-full">
          Empleados
        </button>
        <button onClick={() => cambiarSeccion('Asistencias')} className="text-left hover:bg-red-800 p-2 rounded w-full">
          Asistencias
        </button>
        <button onClick={() => cambiarSeccion('Reportes')} className="text-left hover:bg-red-800 p-2 rounded w-full">
          Reportes
        </button>
      </div>
    </nav>
  );
}