import React from 'react';
import { ToDoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type="check"
      color={completed ? 'green' : 'gainsboro'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon };