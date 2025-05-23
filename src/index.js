import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Creamos la ruta principal con el modulo createRoot proveniente de la clase del index
const container = document.getElementById("root");
const root = createRoot(container);
// Renderizamos
root.render(<App />);
