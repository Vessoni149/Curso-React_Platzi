//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";


function App() {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  
  );
}

export default App;


//ESTADOS:
//vamos a combinar Estado y eventos para que la ap reaccione ante las interacciones de los usuarios. En el componente padre app hay que crear un estado, que se lo vamos a pasar por medio de props a todos los componentes que estamos llamando desde el componente app. Y sin importar en cual de los componentes hijo el usuario interactue, todos los componestes van a poder cambiar porque van a poder escuchar los cambios a ese estado que les estamos enviandodesde el componente padre que tienen en comun.

