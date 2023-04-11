import React from 'react';
import '../hoja-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ id, texto, completado, completarTarea, eliminarTarea }) => {
  return (
    <div
      className={completado ? 'tareas-contenedor completada' : 'tareas-contenedor'} >
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
};


export default Tarea;
