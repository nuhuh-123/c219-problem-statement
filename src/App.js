import { Routes, Route, Navigate } from "react-router-dom";
import Diplomas from "./pages/Diplomas";
import DiplomaModules from "./pages/DiplomaModules";
import ModuleDetails from "./pages/ModuleDetails";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/diplomas" replace />} />

      <Route path="/diplomas" element={<Diplomas />} />
      <Route path="/diplomas/:diplomaId" element={<DiplomaModules />} />
      <Route
        path="/diplomas/:diplomaId/:moduleId"
        element={<ModuleDetails />}
      />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}
