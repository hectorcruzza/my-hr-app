import { useState } from "react";
import { useGlobal } from "../context/globalContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signin, signInWithGoogle } = useGlobal();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    if (error) setError(null);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin(user.email, user.password);
      navigate("/");
    } catch (error) {
      handleErrors(error.code);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      handleErrors(error.code);
    }
  };

  const handleErrors = (code) => {
    switch (code) {
      case "auth/invalid-credential":
        setError("Las credenciales ingresadas no son válidas.");
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

          <button
            type="button"
            className="w-full bg-red-900 text-white py-2 rounded hover:bg-red-800 transition"
            onClick={handleGoogleSignIn}
          >
            Iniciar con Google
          </button>
        </form>
      </div>
    </div>
  );
}
