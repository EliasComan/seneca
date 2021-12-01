import React, { useContext , memo, useState} from 'react';
import {CartContext} from '../../CartContext/CartContextProvider';
import {Link }from 'react-router-dom'
import './cart.css'
import { getFirestore } from '../../services/getFire';

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
            const cantidad = i.cantidad
            const precio = Math.round(100 * (i.precio * i.cantidad))/100;
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
                    
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label  className="form-label">Nombre.</label>
                                        <input type="email" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="nombre" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Email.</label>
                                        <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Telefono.</label>
                                        <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} id="telefono"/>
                                    </div>
                                    <button onClick={   generarOrden }  className="btn btn-dark">comprar</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                               {  buyid && <p style={ {marginRight:'50%'}}>Su id de compra es : {buyid} </p> }
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">  
                { cart.length > 0 ?
                    cart.map((i) =>  {
                        return (
                            <>
                        
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
        )
})

export default Cart