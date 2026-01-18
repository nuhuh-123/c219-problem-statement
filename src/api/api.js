// src/api/api.js
import { diplomas } from "./data";

export function getDiplomas() {
  return diplomas;
}

export function getDiploma(diplomaId) {
  return diplomas.find((d) => d.id === diplomaId);
}

export function getModule(diplomaId, moduleId) {
  const diploma = getDiploma(diplomaId);
  return diploma?.modules.find((m) => m.id === moduleId);
}
