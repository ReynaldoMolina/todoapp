import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';
import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <li className='list-item'>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`${props.completed && "p-checked"}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { ToDoItem };