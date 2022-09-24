import React from 'react'
import './TodoList.css'
export default function TodoList(props) {
  return (
    <section>
        <ul>
            {props.children}
        </ul>
    </section>
  )
}
