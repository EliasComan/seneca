import React, { useContext } from 'react';
import 'firebase/auth'
import {SessionContext} from '../../SessionContext/SessionContextProvider';


const Register = () => {
   
    const {setPassword, setemailSession, createUsser, error, sessionCreate} = useContext(SessionContext);
    

    return(
        <> 
            <form style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', margin:'5%'}} id='register'>
                <h2 style={{overflow:'hidden'}}>Registro</h2>
                {error  && <h3 style={{color:'red'}} > { error.message} </h3> }
                { sessionCreate && <h3 style={{color:'green'}} > Cuenta creada! : {sessionCreate} </h3>}
            <div className="mb-3" >
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  onChange={e => setemailSession(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password"  onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button   onClick={ createUsser}className="btn btn-dark">Submit</button>
            </form>
        
        
        </>

)}

export default Register;