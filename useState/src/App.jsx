import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  function handleTodo() {
    if (text.trim() === "") return;
    setTodo((prev) => [...prev, text]);
    setText("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Todo List</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-5 space-y-2">
          {todo.map((task, index) => (
            <li key={index} className="text-gray-700">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
