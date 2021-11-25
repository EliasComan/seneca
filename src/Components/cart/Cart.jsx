import React, { useContext} from 'react';
import { CartContext } from '../CartContext/CartContextProvider';
import './cart.css'

const Cart = () => {
    const {  clearCart } = useContext(CartContext);
    
    
    return(
            <>  
            <h1 className='prox'>Proximamente
            </h1>
            <button className="btn btn-dark" onClick={clearCart}> clearCart</button>
            </>
)}

export default Cart