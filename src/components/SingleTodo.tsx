import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Todo } from "../model";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDoneOutline, MdOutlineDownloadDone } from "react-icons/md";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  onChange: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, onChange }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const onEdit = () => {
    if (!edit && !todo.isCompleted) {
      setEdit(!edit);
    }
  };

  const onDone = (id: number) => {
    const completedTodos = todos.map((el) =>
      el.id === id ? { ...el, isCompleted: !todo.isCompleted } : el
    );
    onChange(completedTodos);
  };

  const onDelete = (id: number) => {
    onChange(todos.filter((todo) => todo.id !== id));
  };

  const onSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    onChange((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => onSubmit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onBlur={(e) => onSubmit(e, todo.id)}
          className="todos__single--text"
        />
      ) : todo.isCompleted ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={onEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => onDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => onDone(todo.id)}>
          {!todo.isCompleted ? <MdDoneOutline /> : <MdOutlineDownloadDone />}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
