import React,{createContext, useState} from 'react';
import 'firebase/auth';
import firebase from 'firebase';
import { getFirestore } from '../services/getFire';


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
    
    const wishList = (user) =>{
        getFirestore().collection('wishlist').doc(user).set({items:{}})
        
    }
    
    const addWishList = (item, user) =>{
       const update = getFirestore().collection('wishlist').doc(user)
        update.update({
            items: firebase.firestore.FieldValue.arrayUnion(item)
        })
        
    }
    
    const deleteFromWishList = (item, user) =>{
        const deleteItem = getFirestore().collection('wishlist').doc(user)
        deleteItem.update({
            items: firebase.firestore.FieldValue.arrayRemove(item)
        })
    }

    const getWishList =(user) => {
            getFirestore().collection('wishlist').doc(user).get();
    }

    const createUsser = (e) => {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(emailSession,password)
                .then(res => {
                    setSessionCreate(res.user.email);
                    wishList(res.user.email);
                    
                })
                .catch(err =>{
                    setError(err); 
                    setSessionCreate('')})
               
                }
        

    const accesUsser = (e) =>{
        e.preventDefault()
            firebase.auth().signInWithEmailAndPassword(emailSession,password)
                    .then(user => setUser(user.user.email))
                    .catch(err => {setError(err)})
                }
    const logOut = () =>{
            firebase.auth().signOut()
                .then(() => {
                   setUser('') })
                .catch((error) => {
                    alert(error);});
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
                wishList,
                addWishList,
                getWishList,
                deleteFromWishList
                }}>
                {children}
            </SessionContext.Provider>




)}

export default SessionContextProvider;