import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//de react llamamos a la funcion createContext() que permite crear contextos que no va a retornar un componente que es un objeto que contiene otros 2 componentes: provider y consumer:
//<TodoContext.Provider/> y <TodoContext.Consumer/>
//el primero lo vamos a usar para envolver toda nuestra ap. Y el segundo lo vamos a usar en las partes donde necesitemos informacion del estado compartido en lso componentes. 
const TodoContext = React.createContext();


function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
      
    const [openModal, setOpenModal] = React.useState(false);






      const completedTodos = todos.filter(todo => todo.complete).length;  //por cada elemento del array tiene la propiedad complete en true, los cuenta y devuelve su cantidad.
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >=1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {          //por cada elemento del array todo, convierte su texto en minuscula para analizarlo.
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);         //includes es un metodo de las strings para buscar
        })
        
      }
    
    
      const addTodo = (text)=>{ 
        const newTodos = [...todos];  
        newTodos.push({  
          complete: false,
          text
        })
       
        saveTodos(newTodos); 
      }

      const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);   //finIndex  busca el indice. Por cada todo del arrai analizará si el texto de ese todo es = al texto que recibe la funcion como parametro. Basicamente se analiza todo por todo caul tiene el mismo texto que lo pasado por parametro, y cuando se encuentra, se obtiene la posicion que tiene dentro del arrai.
    
        const newTodos = [...todos];  
        newTodos[todoIndex] = {  //todoIndex representa la posicion en el arrai. Como cada todo es un objeto, lo que haremos aca es cambiar su propiedad complete (el texto queda =).
          text: todos[todoIndex].text,
          complete: true,
        }
        //otra forma de hacer lo mismo es:
        //todos.[todoIndex].complete = true;
        saveTodos(newTodos); //esto actualiza el estado con el nuevo arrai de todos, que contendra los que tienen la propiedad complete en true.
      }
      const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];  
        newTodos.splice(todoIndex, 1);      //splice recibe 2 argumentos, el primero es desde donde -posicion-  vamos a recortar el array, y la segunca, cuantos elementos queremos eliminar.
        saveTodos(newTodos);
      }
    
      // console.log('Render (antes de use effect)');
      
      // React.useEffect(()=>{
      //   console.log('use effect')
      // }, [totalTodos])
      // console.log('rendes despues del use effect')


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            setOpenModal,
            openModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
//props.children  sirve para que cualquier componente que llamemos dentro del TodoProvider puedan consumir la info que va a contener el provider.
//la propiedad value contiene las propiedades que va a contener y compartir el provider. Como vamos a compartir varias propiedades vamos a ponerlas dentro de un objeto (por eso dobles {})

export {TodoContext, TodoProvider};