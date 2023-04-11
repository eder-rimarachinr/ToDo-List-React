import React, { useEffect, useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hoja-de-estilo/ListaTareas.css'

const ListaTareas = () => {

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      return JSON.parse(tareasGuardadas);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completado = !tarea.completado;
      }
      return tarea;
    })

    setTareas(tareasActualizadas)
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tarea-lista-contenedor'>

        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completado={tarea.completado}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;
