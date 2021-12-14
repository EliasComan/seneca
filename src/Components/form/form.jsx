import React from 'react';
import { useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';



const Form = ({generarOrden, setEmail,emailValidation,validation, setName, setTelefono, buyid , name, email, telefono}) => {
   const { user } = useContext(SessionContext)
 
   
   
    return(

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Finalizar compra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label  className="form-label">Nombre.</label>
                                    <input  type="text"  value={name} onChange={(e)=> setName(e.target.value)} className="form-control"  id="nombre" required />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Email.</label>
                                   { user?
                                   <h6>{user}</h6>
                                   :
                                   <>
                                   <input  type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required/>
                                   <label  className="form-label">Confirmar email.</label>
                                  <input  type="text" name='email'  onChange={(e) => validation(e.target.value)} className="form-control" id="email" required/>
                                  </>}
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Telefono.</label>
                                    <input  type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} id="telefono" required/>
                                </div>
                                { emailValidation ?
                                <button  type="submit" onClick={ (e) =>  {generarOrden(e)} }  className="btn btn-dark">comprar</button>
                                :
                                <h6 style={{color:'red'}}>El email debe ser igual en ambos casos</h6>
                                }
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