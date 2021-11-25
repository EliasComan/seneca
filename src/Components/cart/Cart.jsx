import React, { useContext} from 'react';
import { CartContext } from '../CartContext/CartContextProvider';
import {Link }from 'react-router-dom'
import './cart.css'

const Cart = () => {
    const {  clearCart, cart, deteleItem } = useContext(CartContext);
    
    
    return(
        <>
            <button className="btn btn-dark" onClick={clearCart}> clearCart</button>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">  
            
                { cart.length >= 0 ?
            cart.map((i) =>  {
                return (
                    <>
                
                    <div key={i.id} className="card mb-3 text-white bg-dark" style={{maxWidth: '18rem'}} >
                        <div className="row g-0">
                            <div className="col-md-4 ">
                            <img src={i.imagen} className="img-fluid rounded-start" alt=""/>
                            </div>
                            <div class="col-md-8 ">
                            <div className="card-body ">
                                <h5 className="card-title">{i.nombre}</h5>
                                <p className="card-text">{i.precio}</p>
                                <p className="card-text"><small className="text-muted">Cantidad : {i.cantidad}</small></p>
                                <button  onClick={() => deteleItem(i.id)} className="btn btn-light">eliminar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </>
                )})
                :
                <div className='empty-cart'>
                    <h1>Aun no hay nada aqui</h1>
                    <Link to='/'> <button className='btn btn-dark'> Seguir comprando </button> </Link>
                </div>
                }

                </div>
        </>
)}

export default Cart