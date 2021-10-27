import React from 'react';
import { useState } from 'react';

const Contador = ( { cantidad,  inicial }) =>{
  const [cant, setCant] = useState(inicial)

  const handleClickMinus =() =>{
   cant > 0 ? setCant(cant-1)  : document.getElementById('buttonminus').disable= true ;
  }
  const handleClickPlus = () =>{
   cant < cantidad ? setCant(cant+1) :document.getElementById('buttonplus').disable= true ;
  }
  
    return(
            <>
            <button id = 'buttonminus' onClick={ handleClickMinus}>-</button>
            {cant}
            <button id ='buttonplus' onClick= { handleClickPlus}>+</button>
            </>
    )
}

export default Contador