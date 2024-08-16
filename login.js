import { auth, signInWithEmailAndPassword , googleProvider, signInWithPopup, GoogleAuthProvider} from  "./firebase.js";
 import {  onAuthStateChanged} from  "./firebase.js";

const login = ()=> {

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  console.log(email.value, password.value);
  
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  
  .then((userCredential) => {
      const user = userCredential.user;
      console.log("user--", user)
      window.location= "profile.html"
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage)
    });
  
  
  }
  
  document.getElementById("LoginBtn").addEventListener("click", login);

  let SignInWithGoogle = ()=>{

    signInWithPopup(auth, googleProvider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("user-->", user)
      window.location= "profile.html"
      
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
     const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
     console.log("errorMessage", errorMessage)

    });
  

   }
  document.getElementById("signinwithGoogle").addEventListener("click", SignInWithGoogle);
