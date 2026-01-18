// src/components/ModuleRow.js
import { Link } from "react-router-dom";

export default function ModuleRow({ diplomaId, module }) {
  return (
    <li className="row">
      <div>
        <p className="row-title">
          {module.code} — {module.title}
        </p>
        <p className="muted">{module.synopsis}</p>
      </div>

      <Link className="btn" to={`/diplomas/${diplomaId}/${module.id}`}>
        View
      </Link>
    </li>
  );
}
