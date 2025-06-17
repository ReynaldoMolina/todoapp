import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
  const { completedToDos, totalToDos } = React.useContext(ToDoContext);

  if (totalToDos <= 0) {
    return (
      <p className='counter'>No tienes tareas</p>
    )
  }
  if (completedToDos === totalToDos) {
    return (
      <p className='counter'>Has completado todas las tareas</p>
    )
  }

  return (
    <p className='counter'>
      Has completado {completedToDos} de {totalToDos} tareas
    </p>
  );
}

export { ToDoCounter };