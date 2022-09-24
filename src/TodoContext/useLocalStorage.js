import React from "react";

//Creando un React Hook:

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem){    //con el ! podemos verificar si localStorage existe, es null, undefined, false, o un string vacio. Entonces si no existe:
          localStorage.setItem(itemName,JSON.stringify(initialValue))   //creamos un item en el localStorage con un arrai vacio (pasado a string), que es lo que se muestra en un principio al iniciar la app.
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        } catch(error){
          setError(error);
        }
      }, 1000)
    })
    
  
  
   
  
  
    const saveItem = (newItem)=>{
     try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
     }catch(error){
      setError(error);
     }
  
    }
    return {        //al crear hooks personalizados, si va a recibir mas de un estado, no se va a usar un arrai para contenerlos sino un objeto. Acá item y loading son estados.
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage};

  //LocalStorage: como en este proyecyo no se usa backend usaremos la herramienta de persistencia de datos local storage, que permite guardar la info en el navegador y mantenerla activa, sin importar si el navegador se cierra.
//El método setItem() de la interfaz Storage, cuando reciba una clave y un valor (recibe 2 parametros), añadirá estos al almacén, o actualizará el valor si la clave ya existe.
//Parámetros:
//keyName:
//Un DOMString conteniendo la clave que se quiere crear/actualizar. Nombre de lo que se va a guardar.
//keyValue
//Un DOMString conteniendo el valor que se le quiere dar a la clave que se está creando/actualizando.
//localstorage SOLO puede guardar texto. Serán necesarios los metodos JSON.stringify() que convierte un json a texto, y JSON.parse() que transforma lo que sea en un objeto json.
//el metodo .getItem('') recibe el item guardado como parametro y lo devuelve.