import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function NavBar() {
  const { user, signout } = useAuth();

  const handleSignOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-full md:w-64 bg-red-900 text-white flex md:flex-col items-center md:items-start p-4 space-y-0 md:space-y-4 shrink-0">
      <div className="flex items-center space-x-2 mb-4 md:mb-6">
        <img
          src="vite.svg"
          alt="Logo HR"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>

      <div className="flex md:flex-col gap-2 w-full">
        <Link to="/" className="text-left hover:bg-red-800 p-2 rounded w-full">
          Inicio
        </Link>
        <Link
          to="/empleados"
          className="text-left hover:bg-red-800 p-2 rounded w-full"
        >
          Empleados
        </Link>
        <Link
          to="/asistencias"
          className="text-left hover:bg-red-800 p-2 rounded w-full"
        >
          Asistencias
        </Link>
        <Link
          to="/reportes"
          className="text-left hover:bg-red-800 p-2 rounded w-full"
        >
          Reportes
        </Link>
      </div>

      <div className="mt-4 md:mt-auto w-full text-center">
        <span className="text-sm block mb-1">
          {user.displayName || user.email}
        </span>
        <button
          onClick={handleSignOut}
          className="text-sm text-white hover:underline"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
