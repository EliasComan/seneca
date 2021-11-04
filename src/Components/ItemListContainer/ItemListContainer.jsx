import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/itemList'


const ItemListContainer = ({ greeting }) =>{
    return( 
    <>
    <h2 className='titulo'>
        {greeting}
    </h2>
    <ItemList/>
    </>
    )}

export default ItemListContainer;