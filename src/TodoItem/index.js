import React from 'react'
import './TodoItem.css'
export default function TodoItem(props) {


  return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
        onClick={props.onComplete}
        > 
          √
        </span>
        <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete"
        onClick={props.onDelete}>
          X
        </span>
      </li>
    );
}
//Para combinar texto con variables de js hay que usar {} y ``.
//en el caso de estos span, se quiere decir que si props.complete es T entonces (&&) se va a agregar la clase que sigue en ''.