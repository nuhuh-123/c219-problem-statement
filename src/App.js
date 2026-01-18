import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Diplomas from "./pages/Diplomas";
import DiplomaModules from "./pages/DiplomaModules";
import ModuleDetails from "./pages/ModuleDetails";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div>
            <p className="brand">RP SOI</p>
            <h1 className="headline">Course Enrolment Portal</h1>
          </div>

          <nav className="nav">
            <NavLink className="navlink" to="/diplomas">
              Diplomas
            </NavLink>
            <NavLink className="navlink" to="/register">
              Register
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/diplomas" replace />} />

          <Route path="/diplomas" element={<Diplomas />} />
          <Route path="/diplomas/:diplomaId" element={<DiplomaModules />} />
          <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />

          <Route path="/register" element={<Register />} />

          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </>
  );
}
