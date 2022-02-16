import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import("./feature/auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:"admin",
    loadChildren:()=> import("./feature/admin/admin.module").then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
