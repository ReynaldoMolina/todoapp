import { ReactComponent as SVGLoading} from './icon-loading.svg';
// import flork from './flork.webp';
import './ToDoLoading.css';

function ToDoLoading() {
  return (
    <span className='loading-container'>
      <SVGLoading className='loading-icon'/>
      {/* <img className='loading-icon' alt='Loading' src={flork}></img> */}
    </span>
  );
}

export { ToDoLoading };