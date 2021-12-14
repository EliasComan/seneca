import React from 'react';


const CartCard = ({id, imagen, precio, cantidad, nombre, deteleItem}) =>{
    
    
    
    
    return(


                <div className="card mb-3 text-white bg-dark" style={{maxWidth: '18rem'}} >
                    <div className="row g-0">
                        <div className="col-md-4 ">
                            <img src={imagen} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8 ">
                            <div className=" ">
                                <h5 className="card-title">{nombre}</h5>
                                { precio && <p className="card-text"> precio : {Math.round(100 * (precio * cantidad))/100} ETH</p>}
                                { cantidad &&<p className="card-text"><small className="text-muted">Cantidad : {cantidad}</small></p>
                                }
                                <button  onClick={() => deteleItem(id)} className="btn btn-light">eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>

)}

export default CartCard;