import React, { useContext } from 'react';
import { useState } from 'react';
import Contador from '../contador/Contador'
import {CartContext} from '../CartContext/CartContextProvider';

const ItemDetail = ({ imagen , nombre , precio, cantidad, id  }) => {
    const [cant, setCant] = useState(0)
    const { addCart } = useContext(CartContext);
    
    
    const onAdd =  ( cant ) =>{
       setCant(cant)
       addCart({imagen: imagen, id:id, nombre:nombre, precio: precio , cantidad: cant})
   }
    return(

    <div className='item'>
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={imagen} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Precio:  {precio} ETH</small></p>
                       <Contador cant={cant} cantidad = {cantidad} onAdd={ onAdd } inicial={1}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>


)}

export default ItemDetail;