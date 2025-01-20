import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, onChange, onAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        onAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
