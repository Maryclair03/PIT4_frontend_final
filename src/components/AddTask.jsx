import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center border rounded p-2 bg-white shadow"> {/* Flex container with shadow */}
        <input
          className="flex-grow border-none outline-none p-2"
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded" type="submit">+</button>
      </div>
    </form>
  );
}