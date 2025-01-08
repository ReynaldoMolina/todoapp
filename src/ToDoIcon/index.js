import { ReactComponent as SVGCheck} from './icon-check.svg';
import { ReactComponent as SVGDelete} from './icon-delete.svg';
import './ToDoIcon.css';

const iconTypes = {
  "check": (color) => <SVGCheck className='icon-check' fill={color}/>,
  "delete": (color) => <SVGDelete className='icon-delete' stroke={color}/>
}

function ToDoIcon({ type, color, onClick }) {
  return (
    <span onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  )
}

export { ToDoIcon };