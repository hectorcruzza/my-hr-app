export default function NavBar({ cambiarSeccion }) {
  return (
    <nav className="w-64 h-screen bg-red-900 text-white flex flex-col p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">HR App</h1>
      <button onClick={() => cambiarSeccion('Inicio')} className="text-left hover:bg-red-800 p-2 rounded">
        Inicio
      </button>
      <button onClick={() => cambiarSeccion('Empleados')} className="text-left hover:bg-red-800 p-2 rounded">
        Empleados
      </button>
      <button onClick={() => cambiarSeccion('Asistencias')} className="text-left hover:bg-red-800 p-2 rounded">
        Asistencias
      </button>
      <button onClick={() => cambiarSeccion('Reportes')} className="text-left hover:bg-red-800 p-2 rounded">
        Reportes
      </button>
    </nav>
  );
}