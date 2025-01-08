import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
  const { completedToDos, totalToDos } = React.useContext(ToDoContext);

  if (totalToDos <= 0) {
    return (
      <h1 className='counter'>No tienes tareas</h1>
    )
  }
  if (completedToDos === totalToDos) {
    return (
      <h1 className='counter'>Has completado todas las tareas</h1>
    )
  }

  return (
    <h1 className='counter'>
      Has completado {completedToDos} de {totalToDos} tareas
    </h1>
  );
}

export { ToDoCounter };