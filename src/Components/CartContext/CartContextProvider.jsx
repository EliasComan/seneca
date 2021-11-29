import React, { createContext, useState } from 'react';



export const  CartContext = createContext([]);


const CartContextProvider =  ({children}) => {
const [cart, setCart] = useState([])


const isinCart  = ( item ) => {
   return cart.some( i =>  i.id === item.id)
    
}


const addCart =( item ) =>{

    if (isinCart(item) === true ){

     const newCart =  cart.filter(itemcart => {return(
         
             itemcart.id === item.id ? itemcart.cantidad += item.cantidad : itemcart
        )})
        setCart(newCart)
    }
    else{
            setCart([...cart, item]) }
        }

const deteleItem = (id) =>{

setCart( cart.filter(i => {return i.id !== id}));
}


const clearCart = () => {
    setCart([])
}


const cantItem = () =>{
  return  cart.reduce((acum, item)=>  acum = acum + item.cantidad,0)
}

const precioCart = () =>{
    return cart.reduce((acum, item) => acum = acum +item.precio, 0 )
}

return(

            <CartContext.Provider value={ { addCart, clearCart, cantItem, cart, deteleItem, precioCart }}>
                {children}
            </CartContext.Provider>
)}


export default CartContextProvider;