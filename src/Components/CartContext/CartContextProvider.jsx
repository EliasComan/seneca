import React, { createContext, useEffect, useState } from 'react';



export const  CartContext = createContext([]);


const CartContextProvider =  ({children}) => {
const [cart, setCart] = useState([])
const [cantCart, setCartCant] = useState(0)


const addCart =( item ) =>{
setCart([...cart, item])
}


const clearCart = () => {
    setCart([])
    setCartCant(0)
}




useEffect(()=> {
    let element = 0;
    for (let i = 0; i < cart.length; i++) {
        element += cart[i].cantidad;
        
        setCartCant(element);
    }
},[cart])

return(

            <CartContext.Provider value={ { addCart, clearCart, cantCart, cart }}>
                {children}
            </CartContext.Provider>
)}


export default CartContextProvider;