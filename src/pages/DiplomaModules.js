// src/pages/DiplomaModules.js
import { useParams } from "react-router-dom";
import { getDiploma } from "../api/api";
import ModuleRow from "../components/ModuleRow";

export default function DiplomaModules() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  if (!diploma) return <p>Diploma not found.</p>;

  return (
    <div>
      <h2>{diploma.name}</h2>
      <p className="muted">{diploma.description}</p>

      <h3 className="section-title">Modules</h3>

      <ul className="list">
        {diploma.modules.map((m) => (
          <ModuleRow key={m.id} diplomaId={diplomaId} module={m} />
        ))}
      </ul>
    </div>
  );
}
