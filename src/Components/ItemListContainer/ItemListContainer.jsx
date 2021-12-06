import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../services/getFire';
import './ItemListContainer.css';
import ItemList from '../ItemList/itemList'
import { useParams } from 'react-router';


const ItemListContainer = () =>{
    const [render, setRender] = useState(false)
    const [items, setItems] = useState([]);
    const { category } = useParams();
    
    useEffect( () => {
      const getFb = getFirestore();
      const fbQuery =  category ? getFb.collection('items').where('categoria', '==' , category ).get() : getFb.collection('items').get() 
        
      fbQuery.then(res => {
          setItems(res.docs.map(i =>( { id:i.id, ...i.data() })) )
            })
      .catch(err => {console.log(err)})
      .finally(setRender(true))
    },[category])
   
   
   
    return( 
               
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <ItemList items={items} render={render}/>
                </div>
         )}

export default ItemListContainer;