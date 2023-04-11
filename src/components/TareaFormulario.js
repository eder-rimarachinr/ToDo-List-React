import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import '../hoja-de-estilo/TareaFormulario.css'

const TareaFormulario = (props) => {

  const [input, setinput] = useState('');

  const manejarCambio = e => {
    setinput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const TareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    }
    props.onSubmit(TareaNueva);
    setinput('');
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type="text"
        placeholder='Escribe una tarea'
        name='texto'
        value={input}
        onChange={manejarCambio} />
      <button
        className='tarea-boton'>
        Agregar Texto
      </button>
    </form>
  );
}

export default TareaFormulario;
