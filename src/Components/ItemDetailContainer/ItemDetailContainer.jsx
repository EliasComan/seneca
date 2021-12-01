import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore } from '../services/getFire';



const ItemDetailContainer = () => {
  
  const [render, setRender] = useState(false)
  const [item, setItems] = useState({});
  const { id } = useParams();

useEffect(() => {
  

      const getFb = getFirestore();
      getFb.collection('items').doc(id).get()
      .then(item => setItems({id:item.id, ...item.data()}) )
      .finally(setRender(true))


  return(null)
    },[id])
    
    return(
        <>
          {!render ? 
          < div style={{height:'50vh', display:'flex', alignItems:'center',justifyContent:'center',width:'100%'}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
            :
              <ItemDetail
                nombre={item.nombre}
                key={item.id}
                precio={item.precio}
                cantidad={item.stock}
                imagen={item.imagen}
                id= {item.id}
              />
          }
        </>

)}


export default ItemDetailContainer;