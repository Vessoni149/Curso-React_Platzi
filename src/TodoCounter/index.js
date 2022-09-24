import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

export function TodoCounter() {
  const {totalTodos, completeTodos} = React.useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>Has completado {completeTodos} de {totalTodos} TODOs</h2>
  )
}
