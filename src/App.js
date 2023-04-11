import './App.css';
import ListaTareas from './components/ListaTareas';
import adidasLogo from './images/logo.jpg'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={adidasLogo} alt="logo" />
      </div>
      <div
        className='tareas-listas-principales'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
