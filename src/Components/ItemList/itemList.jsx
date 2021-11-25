import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../data/data'
import Item from '../Item/Item';


const ItemList = (  ) => {
    const [render, setRender] = useState(false)
    const [item, setItems] = useState();
    const { category } = useParams();
    useEffect( () => {
        const getItems =  new Promise((res,rej) => {
            setTimeout(() => {
                res(data)
                rej(err => {console.log(err)})
            }, 2000);

                })
        getItems.then(item => {
            const getItems = item.filter( item => item.category === category)
            getItems.length  === 0 ? setItems(item)  : setItems(getItems)
                    ;})
            .finally(() => {setRender(true)})

    return null
    },[category])

   
return (
        <>{
            render ?
                item.map(item  => {return(
                    <Item 
                        key={item.id} 
                        categoria={item.category} 
                        id= {item.id} 
                        nombre={item.nombre}
                        imagen ={item.imagen}
                    />)})
                :
                < div style={{height:'50vh', display:'flex', alignItems:'center',justifyContent:'center',width:'100%'}}>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                
        }</>
        )
}
export default ItemList;