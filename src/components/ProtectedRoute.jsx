import { useGlobal } from "../context/globalContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useGlobal();

  if (loading)
    return <h1 className="text-center text-2xl mt-20">Cargando...</h1>;

  if (!user) return <Navigate to="/login" />;

  // console.log(user);

  return <>{children}</>;
}
