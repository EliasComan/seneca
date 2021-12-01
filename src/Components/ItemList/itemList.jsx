import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../services/getFire';
import Item from '../Item/Item';


const ItemList = (  ) => {
    const [render, setRender] = useState(false)
    const [item, setItems] = useState([]);
    const { category } = useParams();
    useEffect( () => {

        const getFb = getFirestore();

       const fbQuery =  category ? getFb.collection('items').where('categoria', '==' , category ).get() : getFb.collection('items').get() 
        
        

        fbQuery.then(res => {
            setItems(res.docs.map(i =>( { id:i.id, ...i.data() } ) ) )
            })
        .catch(err => {console.log(err)})
        .finally(setRender(true))

    },[category])

   
return (
        <>{
            render ?
                item.map(item  => {return(
                    <Item 
                        key={item.id} 
                        categoria={item.categoria} 
                        id= {item.id} 
                        nombre={item.nombre}
                        imagen ={item.imagen}
                    />)})
                :
                <div style={{height:'50vh', display:'flex', alignItems:'center',justifyContent:'center',width:'100%'}}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                 </div>
                
        }</>
        )
}
export default ItemList;