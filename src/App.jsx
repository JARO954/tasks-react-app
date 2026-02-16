// Importamos los componentes que App va a organizar en la interfaz.
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  // IMPORTANTE: Ya NO pasamos 'tasks' ni 'createTask' como props (propiedades).
  // Ahora cada componente hijo (TaskForm y TaskList) se conectará directamente al Contexto (la nube) para pedir lo que necesite.
  //Es decir, en cada componente se importa el contexto y se recupera lo que necesite
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
