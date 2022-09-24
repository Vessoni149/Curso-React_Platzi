import React from 'react'
import './CreateTodoButton.css'

export default function CreateTodoButton(props) {
const onClickButton = () => {
props.setOpenModal(prevState => !prevState);
}
//en vez de enviar por parametro true o false, podemos enviar una funcion. Ésta funcion prevState devuelve el Estado anterior a la actualizacion. si el modal esta abierto el prevState va a ser true, si esta cerrado false.
  return (
    <button 
    className='CreateTodoButton'
    onClick={onClickButton}
    >
      +
    </button>
  )
}
//dentro del onClick hay que poner una funcion con lo que queremos que se ejecute, si por ej ponemos directamente un console.log sin una funcion que lo ejecute, el evento de ejecutara al cargar la pagina en vez de al darle click al boton. Esto sucede independientemente de si la funcion la creamos dentro el mismo onClick o fuera de el.
