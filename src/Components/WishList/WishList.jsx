import React,{useContext, useEffect, useState} from 'react';
import { getFirestore } from '../../services/getFire';
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import CartCard from '../cartCard/CartCard';
//import CartCard from '../cartCard/CartCard';



const WishList = () =>{
    const [items, setItems] = useState([])
    const {  user, deleteFromWishList } = useContext(SessionContext)
    useEffect(()=>{
         if (user) {
          const getfb = getFirestore().collection('wishlist').doc(user).get()
       // getfb.then(res=>{console.log(res.data().items)})  
       getfb.then( res =>{setItems( () => res.data().items.map( i => <CartCard key ={i.item.imagen} deteleItem={deleteFromWishList} nombre={i.item.nombre} imagen={i.item.imagen}precio={''}/> ) )} )
           // getfb.then(res => {res.data()})'
             
        }
    },[user])
    return(

        <>{ 
         items
        }</>



)}


export default WishList;
