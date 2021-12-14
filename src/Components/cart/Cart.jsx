import React, { useContext , useState} from 'react';
import {CartContext} from '../../CartContext/CartContextProvider';
import {Link }from 'react-router-dom'
import './cart.css'
import { getFirestore } from '../../services/getFire';
import Form from '../form/form';
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import CartCard from '../cartCard/CartCard';


const Cart = ()  => {
    const { user } = useContext(SessionContext)
    const {  clearCart, cart, deteleItem, precioCart } = useContext(CartContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailValidation, setEmailValidation] = useState('')
    const [buyid, setbuyId] = useState(null)
    const [telefono, setTelefono] = useState(0)
    const orden = {}
  
    const generarOrden = (e) => {
        e.preventDefault()
        orden.compra = cart.map(i => {
            const precio = Math.round(100 * (i.precio * i.cantidad))/100;
            const cantidad = i.cantidad
            const nombre = i.nombre;
            return{cantidad, precio, nombre}
        })
        user ? orden.comprador = {name, user, telefono} : orden.comprador={name, email, telefono}
        orden.precioTotal = Math.round(100 * precioCart ()) / 100 
        const getFb = getFirestore();
        getFb.collection('ordenes').add(orden)
            .then(res =>setbuyId(res.id))
            .catch(err => console.log(err))
            .finally(()=> clearCart())

        
    }

    const validation = (emailvalidation) =>{
        email === emailvalidation ? setEmailValidation(true) :setEmailValidation(false);


        
    }
    
  
    return(
        <>
            { cart.length > 0 &&
            <div className="cart-top">
            <button className="btn btn-dark" onClick={clearCart}> Limpiar carrito</button>
            <h1>Precio total: { Math.round(100 * precioCart ()) / 100 } ETH </h1> 
            <button  className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar compra </button>
            </div>
            }
                    
            <Form
            generarOrden={generarOrden}
            setEmail={setEmail}
            emailValidation={emailValidation}
            setEmailValidation={setEmailValidation} 
            setTelefono={setTelefono}  
            setName={setName} 
            buyid = {buyid}
            validation = {validation}
            />
            
            <div className="row row-cols-1 row-cols-md-3 g-4">  
                { cart.length > 0 ?
                    cart.map((i) =>  {
                        return (
                            
                            <CartCard 
                                key={i.id}deteleItem={deteleItem}
                                id= {i.id}
                                nombre={i.nombre}
                                precio={i.precio} 
                                cantidad={i.cantidad} 
                                imagen={i.imagen}/>
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
}

export default Cart