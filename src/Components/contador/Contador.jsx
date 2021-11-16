import React, {  } from 'react';
import { useState } from 'react';
import {Link }from 'react-router-dom'
import './contador.css'

const Contador = ( { cantidad,  inicial, onAdd } ) =>{
  
  const [cant, setCant] = useState(inicial)
  const [render, setRender] = useState(true)

  const handleClickMinus =() =>{
   cant > 0 ? setCant(cant-1)  : document.getElementById('buttonminus').disable= true ;
  }
  const handleClickPlus = () =>{
   cant < cantidad ? setCant(cant+1) : document.getElementById('buttonplus').disable = true ;
  }

    return(
            <div className='contador'>{
              render ?
                <>
                  <button id = 'buttonminus' className='btn btn-dark' onClick={ handleClickMinus }>-</button>
                    <p>{cant}</p>
                  <button id ='buttonplus' className='btn btn-dark' onClick= { handleClickPlus }>+</button>
                
                <button className='btn btn-dark' onClick={() =>{onAdd(cant); setRender(false)}}>Agregar al carrito</button>
                </>
                :

               <Link to='/cart'> <button id='boton' className='btn btn-dark'> Ir al carrito  </button> </Link>
                
            }</div>
    )
}

export default Contador