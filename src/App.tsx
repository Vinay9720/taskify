import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.tsx";

import { Todo } from "./model.ts";
import TodoList from "./components/TodoList.tsx";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const onAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length)
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), todo: todo, isCompleted: false },
      ]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} onChange={setTodo} onAdd={onAdd} />
      <TodoList
        todos={todos}
        onChange={setTodos}
        completedTodos={completedTodos}
        onCompletedTodosChange={setCompletedTodos}
      />
    </div>
  );
};

export default App;
