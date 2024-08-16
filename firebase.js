import {initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js'

import { getAuth,  signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword, signOut,
   sendEmailVerification, signInWithPopup, GoogleAuthProvider}
    from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js'



const firebaseConfig = {
    apiKey: "AIzaSyD2m6NJK2JZcfRdaFWB-Q-gBQy2FsTlyk8",
    authDomain: "hackadon-fecb9.firebaseapp.com",
    projectId: "hackadon-fecb9",
    storageBucket: "hackadon-fecb9.appspot.com",
    messagingSenderId: "194543436284",
    appId: "1:194543436284:web:5fb9a8e521e8dde570b279"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 
   const googleProvider = new GoogleAuthProvider();
 
  
  
export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    googleProvider,
    signInWithPopup,
    GoogleAuthProvider,
}