import React from 'react';
import Item from '../Item/Item';


const ItemList = ( {items, render} ) => {
return (
        <>{
            render ?
                items.map(item  => {
                    return(
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