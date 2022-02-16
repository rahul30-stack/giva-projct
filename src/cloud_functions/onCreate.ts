import * as functions from "firebase-functions";
import {db} from "../firebase";
 const onCreate = functions.auth.user().onCreate((user)=>{
     const email = user.email;
     const displayName  = user.displayName;
     
     
     db.collection("Users").add({
         email,
         displayName,
         isdisabled:false
     })
     .then(()=>{
         console.log("success");
     })
     .catch(()=>{
         console.log("failed")
     });
 });
 export default onCreate;