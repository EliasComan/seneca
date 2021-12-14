import React, { useContext, useState } from 'react';
import 'firebase/auth'
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Register = () => {
    const [confirmacion, setConfirmacion] = useState(false)
   
    const {setPassword,password, setemailSession, createUsser,user, error, sessionCreate} = useContext(SessionContext);
    
    const confirmarContraseña = (contraseña) =>{
        contraseña === password ? setConfirmacion(true) :  setConfirmacion(false)
    }
   
   
    return(
        <> { !user ?
            <form style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', margin:'5%'}} id='register'>
                <h2 style={{overflow:'hidden'}}>Registro</h2>
                {error  && <h3 style={{color:'red'}} > { error.message} </h3> }
                { sessionCreate && <h3 style={{color:'green'}} > Cuenta creada! : {sessionCreate} </h3>}
            <div className="mb-3" >
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  onChange={e => setemailSession(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password"  onChange={e => setPassword(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                  <input type="password"  onChange={e => confirmarContraseña(e.target.value)} className="form-control"/>
            </div>
          { confirmacion ? 
           <button   onClick={ createUsser}className="btn btn-dark">Crear cuenta</button>
            :
            <h6 style={{color:'red'}}>La contraseña debe ser igual en ambos casos</h6>
            }
            </form>
 
            :
            <ItemListContainer/>
            }
        
        </>

)}

export default Register;