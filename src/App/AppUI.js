import React from "react";
import {TodoCounter} from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import { TodoForm } from "../TodoForm";
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';

function AppUI(){
  const {error, loading, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext);
    return(
<>
    <TodoCounter/>

    <TodoSearch/>
    
    
     
    <TodoList>
      {error && <TodosError error={error}/>}
      {loading &&<TodosLoading/>} 
      {(!loading && !searchedTodos.length) && <EmptyTodos/>}
  
      {searchedTodos.map(todo => (              //por cada todo del array renderizará un TodoItem
      <TodoItem  key={todo.text} 
        text={todo.text}
        complete={todo.complete}
        onComplete={()=> completeTodo(todo.text)}
        onDelete={()=> deleteTodo(todo.text)}
      />
      ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm/>
      </Modal>
      )}

   

    <CreateTodoButton
    setOpenModal = {setOpenModal}
    />
    
    </>
    );
}
export { AppUI };

