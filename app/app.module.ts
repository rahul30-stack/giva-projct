import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'firebase-functions/v1';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DashboardComponent } from './feature/admin/dashboard/dashboard.component';
import { AdminModule } from './feature/admin/admin.module';







@NgModule({
  declarations: [
    AppComponent,
    
    
    
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    CoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    CommonModule,
    AngularFirestoreModule,
    

    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
