import React from 'react';
import { useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';



const Form = ({generarOrden, setEmail, setName, setTelefono, buyid , name, email, telefono}) => {
   const { user} = useContext(SessionContext)
   
   
    return(

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
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="nombre" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Email.</label>
                                   { user?
                                   <h6>{user}</h6>
                                   :
                                   <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email"/>}
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
)}

export default Form;