import { useState } from "react";

import "../styles.css";

export default function Star() {
  return (
    <select
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option selected>Calificación en estrellas</option>
      <option value="1">1 Estrella Malo</option>
      <option value="2">2 Estrellas Deficiente</option>
      <option value="3">3 Estrellas Regular</option>
      <option value="4">4 Estrellas Bien</option>
      <option value="5">5 Estrellas Excelente</option>
    </select>
  );
}
