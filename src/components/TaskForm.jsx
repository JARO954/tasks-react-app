import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  // Nuevo ESTADO: Usamos estados para controlar lo que el usuario escribe.
  // El estao es "local" porque solo le importa a este formulario. 'title' guarda el valor del input y 'setTitle' lo actualiza.
  // Al cambiar el valor con setTitle, React vuelve a pintar el componente automáticamente.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // CONSUMO DEL CONTEXTO: "Bajamos de la nube de datos (Contexto)"/Recuperamos solo la función createTask.
  const { createTask } = useContext(TaskContext);

  const hacerSubmit = (e) => {
    // Cancela el comportamiento por defecto del navegador (recargar la página).
    // Esto nos permite manejar el envío de datos manualmente mediante JavaScript sin perder el estado de la aplicación.
    e.preventDefault();

    // LLAMADA AL CONTEXTO: Enviamos los datos (titulo y desripción de la tarea que estan almacenados en el estado local
    // y que se guardan al hacer subit del formulario) directamente a la función global que esta en el contexto.
    // Pasamos un objeto (Por eso la sintaixs de ({})) porque así lo espera la función en TaskContext.jsx
    createTask({ title, description });

    //Pasar a vacio los datos de titulo y desripcion despues de haberlos guardado para que no se sigan monstrando en los input
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={hacerSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Crear nueva tarea
        </h1>
        {/*Input para el titulo de la tarea */}
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Nombre de la tarea"
          //Las funciones flecha simplifican el codigo
          //Ejemplo:
          /*
        onChange={function (e) {
          console.log(e.target.value);
        }}
        */
          onChange={(e) => setTitle(e.target.value)}
          //Muestra en el input el valor que tiene el estado title (se limpia despues de guardar)
          value={title}
          //Propiedad para que cuando cargue la pantalla, el foco este puesto en este campo para empezar a escribir
          autoFocus
        />
        <br></br>
        {/*Campo para la descripcion de la tarea*/}
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br></br>
        <button className="bg-indigo-500 px-3 py-1 text-white cursor-pointer">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
