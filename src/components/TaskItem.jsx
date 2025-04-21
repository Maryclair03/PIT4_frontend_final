export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 p-3 bg-gray-800 text-white">
      <span
        className={`cursor-pointer flex-grow ${task.completed ? "line-through text-gray-400" : "text-white"}`}
        onClick={() => onToggle(task)}
      >
        {task.title}
      </span>
      <div className="flex items-center">
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={() => onToggle(task)}
        >
          ✔️
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          onClick={() => onDelete(task.id)}
        >
          ✕
        </button>
      </div>
    </li>
  );
}