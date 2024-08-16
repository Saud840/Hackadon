import { auth,  createUserWithEmailAndPassword} from  "./firebase.js";
  
 import {onAuthStateChanged} from  "./firebase.js";

   




    
  const register = () => {
    
     const email = document.getElementById('email');
     const password = document.getElementById('password');
    
     createUserWithEmailAndPassword(auth, email.value, password.value)
    
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user--", user)
        
        
      })
      .catch((error) => {
      const errorCode = error.code;
        const errorMessage = error.message;
       console.log("errorMessage", errorMessage)
     });
    
    
    }
    
      document.getElementById("registerBtn").addEventListener("click", register);
    

