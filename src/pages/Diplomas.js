// src/pages/Diplomas.js
import { useMemo, useState } from "react";
import { getDiplomas } from "../api/api";
import DiplomaCard from "../components/DiplomaCard";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return diplomas;

    return diplomas.filter((d) => {
      const inDiploma =
        d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q);

      const inModules = d.modules.some(
        (m) =>
          m.code.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          m.synopsis.toLowerCase().includes(q)
      );

      return inDiploma || inModules;
    });
  }, [query, diplomas]);

  return (
    <div>
      <h2>Diplomas</h2>

      <div className="searchbar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search diplomas or modules (e.g. C219, UX, cybersecurity)..."
        />
        <p className="muted small">
          Showing {filtered.length} of {diplomas.length}
        </p>
      </div>

      <div className="grid">
        {filtered.map((d) => (
          <DiplomaCard key={d.id} diploma={d} />
        ))}
      </div>
    </div>
  );
}
