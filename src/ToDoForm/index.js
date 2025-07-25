import React from "react";
import "./ToDoForm.css";
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
  const { createToDo, setOpenModal } = React.useContext(ToDoContext);
  const [inputText, setInputText] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    createToDo(inputText);
    setOpenModal(false);
    setInputText("");
  }

  const onCancel = () => {
    setOpenModal(false);
    setInputText("");
  };

  const onChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="form-create">
      <label>Crea una tarea</label>
      <input
        className="form-input"
        placeholder="Crea una tarea"
        value={inputText}
        onChange={onChange}
        required
        autoFocus
        autoCapitalize="sentences"
      />
      <div className="form-button-div">
        <button
          className="form-button form-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="form-button form-button-create">
          Crear
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
