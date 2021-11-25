import React, { createContext, useEffect, useState } from 'react';



export const  CartContext = createContext([]);


const CartContextProvider =  ({children}) => {
const [cart, setCart] = useState([])
const [cantCart, setCartCant] = useState(0)

const isinCart  = ( item ) => {
   const condition =  cart.some( i =>  i.id === item.id)
    return condition;
}


const addCart =( item ) =>{
const iscart = isinCart(item) 
    if (iscart === true ){

        cart.map(itemcart => {return(
             itemcart.id === item.id ? itemcart.cantidad = item.cantidad : itemcart
        )})}
    else{
            setCart([...cart, item]) }
        
        }

const deteleItem = (id) =>{

setCart( cart.filter(i => {return i.id !== id}));
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
    cart === 0 ? setCartCant(0) : setCartCant(element);
},[cart])


return(

            <CartContext.Provider value={ { addCart, clearCart, cantCart, cart, deteleItem }}>
                {children}
            </CartContext.Provider>
)}


export default CartContextProvider;