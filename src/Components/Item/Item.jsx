import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

const Item = ({nombre , imagen, id,categoria }) => {
   
    return(
      
      <div className="col" style={{}}>
        <Link  to={`/${categoria}/${id}` } className='card-link' >
          <div className="card h-100">
            <img src={`${imagen}`} className="card-img-top" alt="foto del nft"/>
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
            </div>
          </div>
        </Link>
      </div>
)}

export default Item