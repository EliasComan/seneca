import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

const Item = ({nombre , imagen, id,categoria}) => {
   
    return(
      
    
    <div className="col">
    <div className="card h-100">
      <img src={`${imagen}`} className="card-img-top" alt="foto del nft"/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to={`/${categoria}/${id}` } ><button type="button" className="btn btn-dark">Comprar</button></Link>
      </div>
    </div>
    </div>
)}

export default Item