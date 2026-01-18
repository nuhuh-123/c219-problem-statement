// src/pages/Register.js
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getDiploma, getModule } from "../api/api";

export default function Register() {
  const [searchParams] = useSearchParams();
  const diplomaId = searchParams.get("diplomaId");
  const moduleId = searchParams.get("moduleId");

  const selection = useMemo(() => {
    if (!diplomaId || !moduleId) {
      return { text: "No course selected yet.", valid: false };
    }
    const diploma = getDiploma(diplomaId);
    const module = getModule(diplomaId, moduleId);

    if (!diploma || !module) {
      return { text: "Invalid course selection.", valid: false };
    }

    return {
      text: `${diploma.name} — ${module.code} ${module.title}`,
      valid: true,
      diploma,
      module,
    };
  }, [diplomaId, moduleId]);

  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card">
        <h2 className="card-title">Registration Successful ✅</h2>
        <p className="muted">
          Thanks! We will contact you via email with more details.
        </p>

        <div className="summary">
          <p>
            <b>Name:</b> {form.name}
          </p>
          <p>
            <b>Email:</b> {form.email}
          </p>
          <p>
            <b>Course:</b> {selection.text}
          </p>
        </div>

        <div className="actions">
          <Link className="btn" to="/diplomas">
            Back to Diplomas
          </Link>

          {selection.valid && (
            <Link className="btn primary" to={`/diplomas/${diplomaId}/${moduleId}`}>
              Back to Module
            </Link>
          )}
        </div>
      </div>
    );
  }


  return (
    <div className="card">
      <h2 className="card-title">Register Your Interest</h2>

      <p className="muted">
        <b>Selected course:</b> {selection.text}
      </p>

      {!selection.valid && (
        <p className="muted small">
          Tip: Go to a module details page and click “Register Interest” so the
          course is auto-filled.
        </p>
      )}

      <form className="form" onSubmit={onSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="e.g. Zai Yu"
          />
        </label>

        <label className="label">
          Email
          <input
            className="input"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="e.g. zaiyu@email.com"
          />
        </label>

        <button className="btn primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
