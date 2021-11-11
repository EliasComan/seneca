import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({nombre , imagen, id}) => {
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
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to={`/${id}` } ><button type="button" class="btn btn-dark">Comprar</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item