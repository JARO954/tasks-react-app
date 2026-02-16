import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; // Importamos la referencia al contexto para poder consumir sus datos

function TaskCard({ task }) {
  // CONSUMO DEL CONTEXTO: Recuperamos la función deleteTask de la nube de datos (el contexto TaskContext).
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      {/* Usamos una función flecha () => para que 'deleteTask' NO se ejecute al cargar la página.
      De esta forma, la función queda "en espera" y solo se activa cuando el usuario hace clic,
      permitiéndonos pasarle el ID de la tarea específica que queremos borrar. 
      */}
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        Borrar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
