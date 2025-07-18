import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoLoading } from "../ToDoLoading";
import { ToDoError } from "../ToDoError";
import { ToDoEmpty } from "../ToDoEmpty";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDoContext } from "../ToDoContext";

function AppUI() {
  const {
    loading,
    error,
    filteredToDos,
    saveToDos,
    completeToDo,
    deleteToDo,
    openModal,
  } = React.useContext(ToDoContext);

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {loading && <ToDoLoading />}
        {error && <ToDoError />}
        {!loading &&
          filteredToDos.filter((todo) => todo.completed === false).length ===
            0 && <ToDoEmpty />}

        {filteredToDos.map((toDo) => {
          if (toDo.completed === false) {
            return (
              <ToDoItem
                key={toDo.text}
                text={toDo.text}
                completed={toDo.completed}
                setToDos={saveToDos}
                onComplete={() => completeToDo(toDo.text)}
                onDelete={() => deleteToDo(toDo.text)}
              />
            );
          }
        })}
      </ToDoList>

      {filteredToDos.filter((todo) => todo.completed === true).length > 0 && (
        <ToDoList>
          <p className="todolist-title">Completados</p>
          {loading && <ToDoLoading />}
          {error && <ToDoError />}

          {filteredToDos.map((toDo) => {
            if (toDo.completed === true) {
              return (
                <ToDoItem
                  key={toDo.text}
                  text={toDo.text}
                  completed={toDo.completed}
                  setToDos={saveToDos}
                  onComplete={() => completeToDo(toDo.text)}
                  onDelete={() => deleteToDo(toDo.text)}
                />
              );
            }
          })}
        </ToDoList>
      )}

      <CreateToDoButton />

      {openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
