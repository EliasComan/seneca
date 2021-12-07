import React,{createContext, useState} from 'react';
import 'firebase/auth';
import firebase from 'firebase';

export const SessionContext = createContext ('');

const SessionContextProvider = ({children}) =>{
    const [emailSession, setemailSession] = useState('')
    const [password, setPassword] = useState('')   
    const [error, setError] = useState('')
    const [ sessionCreate, setSessionCreate] = useState()
    const [userOnline, setuserOnline] = useState (false)
    const [user, setUser] = useState('')

    firebase.auth().onAuthStateChanged((user) =>{
        if (user)  {
            setuserOnline(true) 
            setUser(user.email);
        }else{ 
            setuserOnline(false)
        }
    })

        const createUsser = (e) => {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(emailSession,password)
                .then(res => {setSessionCreate(res.user.email); setError('')})
                .catch(err =>{setError(err); setSessionCreate('')})
        }

        const accesUsser = (e) =>{
            e.preventDefault()
            firebase.auth().signInWithEmailAndPassword(emailSession,password)
                    .then(user => console.log(user))
                    .catch(err => {setError(err)})
        }
        
        const logOut = () =>{
            firebase.auth().signOut()
                .then(() => {
                   setUser('')
              }).catch((error) => {
                    alert(error);
              });
        }

    
    return(

            <SessionContext.Provider value = {{
                setemailSession,emailSession, 
                setPassword, password,
                createUsser,userOnline,
                setuserOnline,user, 
                error, 
                sessionCreate,
                accesUsser,
                logOut,
                }}>
                {children}
            </SessionContext.Provider>




)}

export default SessionContextProvider;