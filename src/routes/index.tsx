import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 className="text-white text-3xl">404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
