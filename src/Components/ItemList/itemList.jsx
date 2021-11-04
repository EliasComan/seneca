import React, { useState } from 'react';
import data from '../data/data'
import Item from '../Item/Item';


const ItemList = (  ) => {
const [item, setItems] = useState();
const dataItems = data;
const getItems =  new Promise((res,rej) => {
    setTimeout(() => {
     res(dataItems.map( item => {return(
     <Item key={item.id} nombre= {item.nombre} imagen ={item.imagen.vitruvio}></Item>)}))
     
    }, 2000);

})
getItems.then(item => {setItems(item)})

    return (
        <>{item}</>
    )
}
export default ItemList;