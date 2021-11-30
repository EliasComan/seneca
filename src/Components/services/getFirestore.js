import  firebase  from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW3LaazuCtABUR5n1cT1Rx-1a6d3KjYFk",
    authDomain: "seneca-7b532.firebaseapp.com",
    projectId: "seneca-7b532",
    storageBucket: "seneca-7b532.appspot.com",
    messagingSenderId: "363413090089",
    appId: "1:363413090089:web:2033450df48ae0468e9138"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore ()  {
    return firebase.firestore(app)
  }