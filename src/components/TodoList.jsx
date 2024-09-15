import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false },
      ]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-primary">
      <div className="bg-secondary shadow-lg rounded-3xl p-16">
        <h1
          className=" mb-5 font-title
   text-center  text-3xl text-textColor"
        >
          Todo App
        </h1>
        <div className="mb-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add something new"
            className="flex-grow px-3 py-2 bg-placehold border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 font-placehold "
          />
          <button
            onClick={addTodo}
            className="bg-buttonCol hover:bg-buttonHov active:bg-textColor focus:outline-none focus:ring focus:ring-buttonCol text-orange-400 px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-3 rounded-lg bg-backHov border-gray-800"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((seckin) =>
                      seckin.id === todo.id
                        ? {
                            ...seckin,
                            completed: !seckin.completed,
                          }
                        : seckin
                    )
                  )
                }
                className="mr-2 h-5 w-5 text-grey-500 "
              />
              <span
                className={`flex-grow font-todos ${
                  todo.completed
                    ? "line-through text-gray-800"
                    : "text-red-800"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  setTodos(
                    todos.filter(
                      (seckin) => seckin.id !== todo.id
                    )
                  )
                }
                className="ml-2 border-none p-2 rounded-lg bg-red-400 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
