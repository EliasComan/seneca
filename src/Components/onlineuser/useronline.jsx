import { useContext} from 'react';
import {SessionContext} from '../../SessionContext/SessionContextProvider';
import { Link } from 'react-router-dom';
import './useronline.css'

const UserOnline = ()=>  {  

    const { userOnline, logOut } = useContext(SessionContext)


    return(

        <>{userOnline ? 
            <div className='user-online'>
            
            </div>
            : 
            <div className='user'>
                <h6><Link to='/access'><span className="badge bg-secondary">Iniciar sesion   </span></Link></h6>
                <h6> <span className="badge bg-secondary">/ </span></h6>
                <h6><Link to='/register'><span className="badge bg-secondary"> Registrarse</span></Link></h6>
            </div>
                
         }</>


    )}

export default UserOnline;