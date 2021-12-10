import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'
import { useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';

const Item = ({nombre , imagen, id,categoria }) => {
  const { addWishList, user } = useContext(SessionContext)
    return(
      
      <div className="col" style={{}}>
          <div className="card h-100">
            <Link  to={`/${categoria}/${id}` } className='card-link' >
            <img src={`${imagen}`} className="card-img-top" alt="foto del nft"/>
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
            </div>
             </Link>
              <button className="btn btn-dark" onClick={ () => addWishList(imagen, nombre,id,categoria, user)} >Agregar a lista de deseos</button>
          </div>
      </div>
)}

export default Item