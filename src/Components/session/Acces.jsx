import React from 'react';
import { useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Access = () =>{
const {setPassword, setemailSession, accesUsser,userOnline, error,password, emailSession} = useContext(SessionContext);
    

    return(

        <>{userOnline?
            <ItemListContainer/>
            :
            <form style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', margin:'5%'}}>
                {error  && <h3 style={{color:'red'}} > { error.message} </h3> }
            <div className="mb-3" >
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={emailSession} onChange={e => setemailSession(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button   onClick={ accesUsser }className="btn btn-dark">Submit</button>
            </form>
        
        
     }</>


    )
}


export default Access;