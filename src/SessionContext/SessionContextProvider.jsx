import React,{createContext, useEffect, useState} from 'react';
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

    const signGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
            .then((result) => {
                var user = result.user.email;
                console.log( user);})

                .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode,errorMessage, email, credential);
                    })
    }
    
    useEffect( () => {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user)  {
                setuserOnline(true) 
                setUser(user.email);
            }else{ 
                setuserOnline(false)
            }
    })},[])
    
    const wishList = (user) =>{
        getFirestore().collection('wishlist').doc(user).set({items:{item:{nombre:'',imagen:''}},})
        
    }

    const addWishList = (imagen,nombre,id,categoria, user) =>{
       const update = getFirestore().collection('wishlist').doc(user)
        update.update({
           items:firebase.firestore.FieldValue.arrayUnion({item:{nombre:nombre, imagen:imagen, id:id,categoria:categoria}})
               
        })
        
    }
    
    const deleteFromWishList = (nombre,imagen,id,categoria, user) =>{
        const deleteItem = getFirestore().collection('wishlist').doc(user)
        deleteItem.update({
            items:firebase.firestore.FieldValue.arrayRemove({item:{nombre:nombre, imagen:imagen,id:id,categoria:categoria}})
        })
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
                deleteFromWishList,
                signGoogle
                }}>
                {children}
            </SessionContext.Provider>




)}

export default SessionContextProvider;