import React from 'react';
import { useState } from 'react';

const Contador = ( { cantidad }) =>{
  const [cant, setCant] = useState(cantidad)

  const handleClickMinus =() =>{
   cant >= 0 ?? setCant(cant-1) 
  }
  const handleClickPlus = () =>{
   cant <= cantidad ?? setCant(cant+1)
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