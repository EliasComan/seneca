import React, { useEffect, useState } from 'react';
import data from '../data/data'



const ItemDetailContainer = () => {
    const [render, setRender] = useState(false)
    const [item, setItems] = useState();
   
   useEffect(() => {
    const getItems =  new Promise((res,rej) => {
        setTimeout(() => {
            res(data.find(i => i.id === 2))
            rej(errr => {console.log(errr)})}, 3000);
        
    })

    getItems.then(item => {
        setItems(item)
        setRender(true)
})
 
    },[])
    console.log(item);
    
    return(
        <>
        {!render} ?
        {item}
         :
         {<h1>Cargando..</h1>}
       
        </>

)}


export default ItemDetailContainer;