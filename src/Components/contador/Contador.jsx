import React from 'react';
import { useState } from 'react';

const Contador = ( { cantidad }) =>{
  const [cant, setCant] = useState(cantidad)

  const handleClickMinus =() =>{
   return setCant(cant-1)
  }
  const handleClickPlus = () =>{
  return    setCant(cant+1)
  }
  
    return(
            <>
            <button onClick={ handleClickMinus}>-</button>
            {cant}
            <button onClick= { handleClickPlus}>+</button>
            </>
    )
}

export default Contador