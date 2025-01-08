import React from 'react';
import './CreateToDoButton.css';
import { ToDoContext } from '../ToDoContext';

function CreateToDoButton() {
  const { setOpenModal } = React.useContext(ToDoContext);
  return (
    <button
      className='create-button'
      onClick={
        () => {
          console.log('Le diste click al boton nuevo');
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateToDoButton };