import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRouteLoading } from "./store/useRouteLoading";
import RouteTransitionLoader from "./components/RouteTransitionLoader";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import Home from "./pages/Home/Home";
import Curso from './pages/Curso/Curso';

export default function AppRoutes() {
  const location = useLocation();
  const setLoading = useRouteLoading((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <RouteTransitionLoader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>
    </>
  );
}
