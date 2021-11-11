import React, { useEffect, useState } from 'react';
import data from '../data/data'
import Item from '../Item/Item';


const ItemList = (  ) => {
const [item, setItems] = useState();
const dataItems = data;
useEffect( () => {
const getItems =  new Promise((res,rej) => {
  
    setTimeout(() => {
     res(dataItems.map( item => {return(
     <Item key={item.id} category={item.category} id= {item.id} nombre= {item.nombre} imagen ={item.imagen}></Item>)}))
     rej(err => {console.log(err)})
    }, 2000);

})
getItems.then(item => {setItems(item)})

return null
},[dataItems])
    return (
        <>{item}</>
    )
}
export default ItemList;