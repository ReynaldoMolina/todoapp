import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;
  const filteredToDos = toDos.filter((toDo) => {
    const todoText = toDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeToDo = (text) => {
    const newItems = [...toDos];
    const toDoIndex = newItems.findIndex(
      (element) => element.text === text
    );
    if (newItems[toDoIndex].completed) {
      newItems[toDoIndex].completed = false;
    } else {
      newItems[toDoIndex].completed = true;
    }
    saveToDos(newItems);
  }

  const deleteToDo = (text) => {
    const newItems = [...toDos];
    const toDoIndex = newItems.findIndex(
      (element) => element.text === text
    );
    newItems.splice(toDoIndex, 1);
    saveToDos(newItems);
  }

  const createToDo = (text) => {
    const newItems = [...toDos];
    let newItem = {
      text: text,
      completed: false
    };
    newItems.push(newItem);
    saveToDos(newItems);
  }

  return (
    <ToDoContext.Provider value={{
      completedToDos,
      totalToDos,
      searchValue,
      setSearchValue,
      filteredToDos,
      completeToDo,
      deleteToDo,
      saveToDos,
      loading,
      error,
      openModal,
      setOpenModal,
      createToDo
    }}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };