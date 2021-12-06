import React, { useContext , memo, useState} from 'react';
import {CartContext} from '../../CartContext/CartContextProvider';
import {Link }from 'react-router-dom'
import './cart.css'
import { getFirestore } from '../../services/getFire';
import Form from '../form/form';

const Cart = memo (()  => {

    const {  clearCart, cart, deteleItem, precioCart } = useContext(CartContext);
    const [ buyer, setBuyer] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [buyid, setbuyId] = useState(null)
    const [telefono, setTelefono] = useState(0)

 
    
    
    const generarOrden = (e) => {
        e.preventDefault();
        
        const compra = cart.map(i => {
            const precio = Math.round(100 * (i.precio * i.cantidad))/100;
            const cantidad = i.cantidad
            const nombre = i.nombre;
            return{cantidad, precio, nombre}

        })

        const comprador = {name, email, telefono}

      setBuyer({comprador,compra})  

      const getFb = getFirestore();
      const ordenes = getFb.collection('ordenes').add(buyer)
             ordenes .then(res => setbuyId(res.id))
              ordenes.catch(err => console.log(err))
    }
    
  
    return(
        <>
            { cart.length > 0 &&
            <div className="cart-top">
            <button className="btn btn-dark" onClick={clearCart}> Limpiar carrito</button>
            <h1>Precio total: { Math.round(100 * precioCart ()) / 100 } ETH </h1> 
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar compra </button>
            </div>
            }
                    
            <Form
            generarOrden={generarOrden} 
            setEmail={setEmail} 
            setTelefono={setTelefono}  
            setName={setName} 
            buyid = {buyid}
            />
            
            <div className="row row-cols-1 row-cols-md-3 g-4">  
                { cart.length > 0 ?
                    cart.map((i) =>  {
                        return (
                            <div key={i.id} className="card mb-3 text-white bg-dark" style={{maxWidth: '18rem'}} >
                                <div className="row g-0">
                                    <div className="col-md-4 ">
                                    <img src={i.imagen} className="img-fluid rounded-start" alt=""/>
                                    </div>
                                    <div className="col-md-8 ">
                                    <div className="card-body ">
                                        <h5 className="card-title">{i.nombre}</h5>
                                        <p className="card-text"> precio : {Math.round(100 * (i.precio * i.cantidad))/100} ETH</p>
                                        <p className="card-text"><small className="text-muted">Cantidad : {i.cantidad}</small></p>
                                        <button  onClick={() => deteleItem(i.id)} className="btn btn-light">eliminar</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )})
                    
                    :
                    <div className='empty-cart'>
                        <h1>Aun no hay nada aqui</h1>
                        <Link to='/'> <button className='btn btn-dark'> Seguir comprando </button> </Link>
                    </div>
                }

                </div>
        </>
        )
})

export default Cart