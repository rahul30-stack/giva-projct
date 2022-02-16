import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';

import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/compat/firestore";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup ;
 displayedColumns: string[] = ['email', 'name','action'];
 dataSource: User[] = [];
  constructor(
    private _AuthService:AuthService,
    private _UserService: UserService,
    private _FormBuilder:FormBuilder,
    private firestore: AngularFirestore,
    
  ) {

    
    
     
     this.form = _FormBuilder.group({
      email: ["",[Validators.required,Validators.email]],
      password:["",Validators.required]
    });
    this.getAllUsers();
   }

  ngOnInit(): void {
   
  }
  getAllUsers(){
    this._UserService.getAllUsers().subscribe((users: any) =>{
      console.log(users);
      this.dataSource = users;
    })
  }
 signout(){
 this._AuthService.signout();
 }
 signup(){
  if(this.form.valid){
    this._AuthService.signup(this.form.value.email,this.form.value.password,
     ()=>{
      console.log("success"),
      alert("Giva member")
     },
     ()=>{
       console.log("failed")
     });
  }
 }
 disable(user: User){
  let payload = user.userModel;
  payload.isDisabled = true;
  this._UserService.updateUser(user, payload).then((result) => {
    console.log("success");
    alert("Success");
  }, (error) => console.log(error));
}

}
