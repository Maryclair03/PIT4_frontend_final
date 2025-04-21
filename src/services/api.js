const BASE_URL = "http://localhost:8000";

export const fetchTodos = async (status = "") => {
  const res = await fetch(`${BASE_URL}/todos/?status=${status}`);
  return await res.json();
};

export const createTodo = async (title) => {
  const res = await fetch(`${BASE_URL}/todos/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  return await res.json();
};

export const updateTodo = async (id, updatedTodo) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });
  return await res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
};


