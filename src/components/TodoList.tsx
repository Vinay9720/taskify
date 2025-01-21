import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo.tsx";

type Props = {
  todos: Todo[];
  onChange: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, onChange }) => {
  return (
    <div className="todos">
      <span className="todos__heading">Active Tasks</span>
      {todos.length ? (
        todos.map((el, i) => {
          return (
            <SingleTodo
              index={i}
              todo={el}
              todos={todos}
              onChange={onChange}
              key={el.id}
            />
          );
        })
      ) : (
        <h2>No Active Tasks</h2>
      )}
    </div>
  );
};

export default TodoList;
