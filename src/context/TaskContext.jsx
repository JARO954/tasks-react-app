//Importación de Hooks: Traemos las herramientas necesarias de React.
import { createContext, useState, useEffect } from "react";

// Importación con Alias: Importamos el array de tareas (de task.js).
// Le damos el alias 'data' a la lista que contiene las tareas que se reciben de task.js
import { tasks as data } from "../data/task";

// El Context actúa como una "nube de datos" (Global State).
// Almacena la información en un lugar centralizado para que cualquier
// componente hijo pueda acceder a ella sin pasar datos de mano en mano (props).

// 1. DEFINICIÓN DEL CONTEXTO (La "Emisora")
// Es el objeto que los componentes hijos importarán para conectarse a la nube de datos.
export const TaskContext = createContext();

// 2. PROVEEDOR DEL CONTEXTO (El "Emisor")
// Envuelve a toda la aplicación (al componente <App/> en main.jsx), permitiendo que los componentes hijos tenan acceso
// a los datos y funciones del contexto.
export function TaskContextProvider(props) {
  // Definición del Estado:
  // 'tasks' es la variable que contiene los datos actuales.
  // 'setTasks' es la función que usaremos para actualizar esos datos.
  // Iniciamos con un array vacío [] porque aún no hemos "traído" la información.
  const [tasks, setTasks] = useState([]);

  /**
   * Agrega una nueva tarea al estado.
   * @param {Object} task - Objeto que contiene title y description.
   */
  function createTask(task) {
    // 1. Crea un ARRAY NUEVO que contiene una copia de todos los elementos actuales que hay en el array tasks
    // (Se copia con ...tasks)
    // 2. Agrega un OBJETO NUEVO al final de esa copia con los datos de la tarea (usa el titulo que recibe por parametro).
    // 3. setTasks actualiza el estado, lo que "dispara" que React vuelva a pintar la pantalla.
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  /**
   * Elimina una tarea mediante su ID.
   * @param {number} taskId - El ID de la tarea a eliminar.
   */
  function deleteTask(taskId) {
    // .filter() crea un array nuevo recorriendo 'tasks'.
    // Mantiene todos los elementos cuyo ID sea DIFERENTE al que recibimos (taskId).
    // El elemento que coincide con el taskId queda excluido, logrando el efecto de "borrado".
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // useEffect (Sincronización):
  // Se ejecuta una vez cuando el componente se monta (gracias al array de dependencias vacío []).
  // Aquí simulamos la carga de datos pasando la información de 'data' al estado 'tasks'.
  // Se ejecuta cuando se crea el contexto (TaskContext)
  useEffect(() => {
    setTasks(data);
  }, []);

  // 3. RETORNO DEL PROVIDER
  // El atributo 'value' contiene el objeto con TODO lo que queremos exportar a la nube de datos para wue sea accesible por los componentes.
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
