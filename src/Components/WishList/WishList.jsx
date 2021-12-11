import React,{useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../services/getFire';
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import './Wishlist.css'



const WishList = () =>{
    const [items, setItems] = useState([])
    const {  user, deleteFromWishList } = useContext(SessionContext)
    useEffect(()=>{
         if (user) {
            const getfb = getFirestore().collection('wishlist').doc(user).get()
             getfb.then( res =>{setItems(   res.data().items )} )
        }
    },[user,items])

    return(
        <>{ items.length > 0 ?
            items.map((i, index) => {return(
            <div key={index} className="card mb-3 text-white bg-dark" style={{maxWidth: '18rem'}} >
                <div className="row g-0">
                    <div className="col-md-4 ">
                    <img src={i.item.imagen} className="img-fluid rounded-start" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h5 className="card-title">{i.item.nombre}</h5>
                    <div className="card-body">
                        <button  onClick={ () =>deleteFromWishList( i.item.nombre,i.item.imagen,i.item.id,i.item.categoria, user)} className="btn btn-light btn-sm">eliminar</button>
                        <Link to={`/${i.item.categoria}/${i.item.id}`} ><button className='btn btn-light btn-sm'> Ir al detail </button></Link>
                    </div>
                    </div>
                </div>
            </div>
       )})
       :
       <div className='vacio'>
       <h1>Aun no hay nada aqui</h1>
       </div>
       }</>



)}


export default WishList;
