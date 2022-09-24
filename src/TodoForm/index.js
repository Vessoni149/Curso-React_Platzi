import React from "react";
import { useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) =>{
    setNewTodoValue(e.target.value);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onSubmit = (e) =>{
        e.preventDefault();         //para que cuando el formulario se envia no se recargue la pagina.
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>  
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu nuevo TODO"></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}>
                    Calcelar
                </button>

                <button 
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
export { TodoForm };