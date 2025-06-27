import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const globalContext = createContext();

export const useGlobal = () => {
  const context = useContext(globalContext);
  if (!context) throw new Error("There is no GlobalProvider.");
  return context;
};

export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signout = () => signOut(auth);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const getEmpleados = async () => {
    const empleadosCollection = collection(db, "empleados");
    const snapshot = await getDocs(empleadosCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const addEmpleado = (empleado) => {
    const empleadosCollection = collection(db, "empleados");
    return addDoc(empleadosCollection, empleado);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <globalContext.Provider
      value={{
        signin,
        signInWithGoogle,
        signout,
        user,
        loading,
        getEmpleados,
        addEmpleado,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
