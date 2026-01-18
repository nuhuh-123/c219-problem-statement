// src/components/DiplomaCard.js
import { Link } from "react-router-dom";

export default function DiplomaCard({ diploma }) {
  return (
    <Link to={`/diplomas/${diploma.id}`} className="card card-link">
      <h3 className="card-title">{diploma.name}</h3>
      <p className="muted">{diploma.description}</p>
      <p className="tag">{diploma.modules.length} modules</p>
    </Link>
  );
}
