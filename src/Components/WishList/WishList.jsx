import React,{useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';



const WishList = () =>{
    
    const { WishList } = useContext(SessionContext)
    
    return(

        <button className='btn btn-dark'>
            AGREGAR A LA WISHLIST
        </button>



)}


export default WishList;
