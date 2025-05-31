import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signin } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signin(user.email, user.password);
      navigate("/");
    } catch (error) {
      handleErrors(error.code);
    }
  };

  const handleErrors = (code) => {
    switch (code) {
      case "auth/invalid-email":
        setError("El correo ingresado no es válido.");
        break;
      case "auth/user-disabled":
        setError("Esta cuenta ha sido deshabilitada.");
        break;
      case "auth/user-not-found":
        setError("El usuario no existe. Verifique su correo.");
        break;
      case "auth/wrong-password":
        setError("La contraseña ingresada es incorrecta.");
        break;
      case "auth/missing-password":
        setError("Ingrese la contraseña.");
        break;
      case "auth/too-many-requests":
        setError("Demasiados intentos fallidos. Intente más tarde.");
        break;
      case "auth/network-request-failed":
        setError("Error de red. Verifique su conexión.");
        break;
      case "auth/internal-error":
        setError("Ocurrió un error inesperado. Intente nuevamente.");
        break;
      default:
        setError("Ocurrió un error al iniciar sesión.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-900">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@empresa.com"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 rounded hover:bg-red-800 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
