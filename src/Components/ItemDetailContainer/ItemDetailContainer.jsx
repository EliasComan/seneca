import React, { useEffect, useState } from 'react';
import data from '../data/data'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {
    const [render, setRender] = useState(false)
    const [item, setItems] = useState();
   
   useEffect(() => {
    const getItems =  new Promise((res,rej) => {
        setTimeout(() => {
            res(data)
            rej(errr => {console.log(errr)})}, 3000);
        
    })

    getItems.then(item => {
        const itemfind = item.find(i => i.id === 2)
        setItems(itemfind)
        setRender(true)
})
 
    },[])
    
    return(
        <>
        {!render ? 
        <h1>Cargando...</h1>
         :
          <ItemDetail
            nombre={item.nombre}
            key={item.id}
            precio={item.precio}
            cantidad={item.stock}
            imagen={item.imagen.vitruvio}
          />
        }
      </>

)}


export default ItemDetailContainer;