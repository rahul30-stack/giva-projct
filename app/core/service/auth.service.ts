import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { idToken } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _afa : AngularFireAuth,
    private _Router:Router
  ) {
    
    _afa.onAuthStateChanged(user=>{
      if (user){
        this._Router.navigate(['admin']);
      }
      else{
        this._Router.navigate(['']);
      }
    })
   }
  signin(
    email :string,password:string,onSuccess:any,onError:any){
      this. _afa .signInWithEmailAndPassword(email,password)
      .then(result=>{
        console.log(result);
        onSuccess("Success");
        
       /* result.user?.getIdToken().then(idToken=>{
         console.log(idtoken);
        })*/
      })
      .catch(error=>{
        console.log(error);
        onError();
      })
    }
    getUserData() {
      let userData = sessionStorage.getItem('userData');
      if (userData) {
        return JSON.parse(userData);
      } else {
        return null;
      }
    }
    signout(){
      this._afa.signOut()
      .then(()=>{
        
      }
      )
      .catch(error=>console.log(error));
    }
    signup(
      email :string,password:string,onSuccess:any,onError:any){
        this. _afa .createUserWithEmailAndPassword(email,password)
        .then(result=>{
          console.log(result);
          onSuccess("Success");
          
         /* result.user?.getIdToken().then(idToken=>{
           console.log(idtoken);
          })*/
        })
        .catch(error=>{
          console.log(error);
          onError();
        })
      }
}
