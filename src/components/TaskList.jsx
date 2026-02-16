import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // CONSUMO DEL CONTEXTO: Recuperamos la lista de tareas (tasks) directamente de la nube de datos (el contexto TaskContext).
  const { tasks } = useContext(TaskContext);

  // Renderizado Condicional:
  // Si el array está vacío, detenemos la ejecución aquí y mostramos el mensaje.
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay ninguna tarea por ahora.
      </h1>
    );
  }

  /* RENDERIZADO DE LA LISTA:
     1. .map() recorre el array 'tasks' y por cada objeto genera un componente <TaskCard />.
     2. Es vital usar 'key={task.id}' para que React identifique cada elemento de forma única usando el id de cada tarea.
     3. Pasamos el objeto 'task' completo como propiedad al componente hijo.
  */
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
