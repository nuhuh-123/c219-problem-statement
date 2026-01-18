// src/pages/ModuleDetails.js
import { Link, useParams } from "react-router-dom";
import { getDiploma, getModule } from "../api/api";

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();
  const diploma = getDiploma(diplomaId);
  const module = getModule(diplomaId, moduleId);

  if (!diploma || !module) return <p>Module not found.</p>;

  return (
    <div className="card">
      <p className="muted small">Diploma: {diploma.name}</p>
      <h2 className="card-title">
        {module.code}: {module.title}
      </h2>

      <p>
        <b>Synopsis:</b> {module.synopsis}
      </p>
      <p>
        <b>Assessment:</b> {module.assessment}
      </p>
      <p>
        <b>Duration:</b> {module.duration}
      </p>

      <div className="actions">
        <Link className="btn" to={`/diplomas/${diplomaId}`}>Back</Link>

        <Link
          className="btn primary"
          to={`/register?diplomaId=${diplomaId}&moduleId=${moduleId}`}
        >
          Register Interest
        </Link>
      </div>
    </div>
  );
}
