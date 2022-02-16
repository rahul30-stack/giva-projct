import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { map } from 'rxjs/operators';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users?: Users[];
  currentusers?:Users;
  currentIndex = -1;
  title = '';


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.retreiveUsers();
  }
  retreiveUsers() {
    throw new Error('Method not implemented.');
  }
  refreshList(): void {
    this.currentusers = undefined;
    this.currentIndex = -1;
    this.retreiveUsers();
  }
  retrieveUsers(): void {
    this.usersService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.users = data;
    });
  }
  setActiveUsers(users: Users, index: number): void {
    this.currentusers = users;
    this.currentIndex = index;
  }
}



