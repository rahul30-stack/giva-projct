import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  declarations: [
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule.forRoot(),
    MatTableModule
  ]
})
export class AdminModule { }
