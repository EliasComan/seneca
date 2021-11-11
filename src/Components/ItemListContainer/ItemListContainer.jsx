import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/itemList'


const ItemListContainer = ({ greeting }) =>{
    return( 
    <>
    <h2 className='titulo'>
        {greeting}
    </h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <ItemList/>
    </div>
    </>
    )}

export default ItemListContainer;