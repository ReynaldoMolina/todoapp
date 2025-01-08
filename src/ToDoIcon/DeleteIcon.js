import React from 'react';
import { ToDoIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      color="rgb(255, 113, 113)"
      onClick={onDelete}
    />
  )
}

export { DeleteIcon };