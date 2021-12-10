import React,{useContext, useEffect, useState} from 'react';
import { getFirestore } from '../../services/getFire';
import {SessionContext} from '../../SessionContext/SessionContextProvider';



const WishList = () =>{
    const [items, setItems] = useState([])
    const {  user, deleteFromWishList } = useContext(SessionContext)
    useEffect(()=>{
         if (user) {
            const getfb = getFirestore().collection('wishlist').doc(user).get()
             getfb.then( res =>{setItems(   res.data().items ); console.log(res.data().items);} )
        }
    },[user,items])

    return(
        <>{ 
         items.map((i, index) => {return(
         <div key={index} className="card mb-3 text-white bg-dark" style={{maxWidth: '18rem'}} >
            <div className="row g-0">
                <div className="col-md-4 ">
                <img src={i.item.imagen} className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-8 ">
                <div className="card-body ">
                    <h5 className="card-title">{i.item.nombre}</h5>
                    <button  onClick={ () =>deleteFromWishList( i.item.nombre,i.item.imagen, user)} className="btn btn-light">eliminar</button>
                </div>
                </div>
            </div>
         </div>
       )})}</>



)}


export default WishList;
