import {  auth, onAuthStateChanged, signOut,  sendEmailVerification} from  "./firebase.js";


let names= document.getElementById("name");
  let email = document.getElementById("email");
  let main= document.getElementById("main");
  let loader = document.getElementById("loader");




  onAuthStateChanged(auth, (user) => {
    if (user) {
        
        sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("Email is Sent")
    
  });

      console.log('user----', user.email.slice(0, user.email.indexOf("@")))
      names.innerHTML = user.email.slice(0, user.email.indexOf("@"));
      email.innerHTML = user.email;
      if(location.pathname !== "/profile.html"){
      window.location= "profile.html"
      }
      main.style.display = "block"
      loader.style.display = "none"
      
    }
      else {
      
      console.log('Not Login')
      if(location.pathname !== "/index.html" && location.pathname !== "/register.html"){
        window.location= "index.html"
      }
      
    }
  });


let logout = () =>{
    signOut(auth).then(() => {
        console.log("Signout Successfull")
        window.location ="index.html"

      }).catch((error) => {
        console.log("err->",error)
      });
      
}

  let logoutBtn = document.getElementById("LogoutBtn")

  logoutBtn.addEventListener("click", logout)
