import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import DarkModeToggle from "./components/DarkModeToggle";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./services/api";
import "./App.css"; 

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const loadTasks = async () => {
    const data = await fetchTodos(filter === "all" ? "" : filter);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleAdd = async (title) => {
    await createTodo(title);
    loadTasks();
  };

  const handleToggle = async (task) => {
    await updateTodo(task.id, { ...task, completed: !task.completed });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTasks();
  };

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <h1 className="title">To-Do List</h1>
        <AddTask onAdd={handleAdd} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        {tasks.length === 0 && <p className="no-tasks">No tasks found</p>}
      </div>
    </div>
  );
}



