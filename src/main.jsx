import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskContextProvider } from "./context/TaskContext";

// 1. Buscamos el elemento 'root' en el index.html y creamos la raíz de React en él.
// 2. Usamos .render() para inyectar toda nuestra aplicación en ese lugar.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Envolvemos App con el Proveedor del Contexto. 
      Esto hace que la "nube de datos" envuelva a App y a todos sus hijos,
      permitiendo que cualquier componente use la lista de tareas y las funciones.
    */}
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>,
);
