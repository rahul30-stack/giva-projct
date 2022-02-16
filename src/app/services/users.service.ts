import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private dbPath = '/Users';
  usersRef: AngularFirestoreCollection<Users>;
  
  constructor (private db: AngularFirestore) { 
    this.usersRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Users> {
    return this.usersRef;
  }
  create(users: Users): any {
    return this.usersRef.add({ ...users });
  }
  update(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
