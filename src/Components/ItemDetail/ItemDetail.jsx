import React from 'react';
import Contador from '../contador/Contador'

const ItemDetail = ({ imagen , nombre , precio, cantidad }) => {
    
    
    
    
    return(

    <>
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
                        <p className="card-text"><small className="text-muted">{precio}</small></p>
                        <Contador cantidad = {cantidad} inicial={1}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>


)}

export default ItemDetail;