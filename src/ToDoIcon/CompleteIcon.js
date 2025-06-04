import React from 'react';
import { ToDoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type="check"
      color={completed ? 'rgb(118, 237, 118)' : 'gray'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon };