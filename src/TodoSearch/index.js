import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

export default function TodoSearch() {   //app.js va a enviar 2 props con estos nombres, que serán usados aca.
const { searchValue, setSearchValue} = React.useContext(TodoContext);
  

  const onSearchValueChange = (e)=>{
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  return [                                            //lo elementos html que se van a retornar además de poder estar dentro de un contenedor -etiqueta html-, pueden estar dento de un array.
    <input className='TodoSearch'
    placeholder='Busca tu TODO'
    value={searchValue}
    onChange={onSearchValueChange}
    />,
]
}
