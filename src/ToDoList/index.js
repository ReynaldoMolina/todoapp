import './ToDoList.css';

function ToDoList(props) {
  return (
    <ul className='list'>
      {props.children}
    </ul>
  );
}

export { ToDoList };