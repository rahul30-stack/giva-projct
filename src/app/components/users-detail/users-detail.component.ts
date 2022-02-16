import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Users} from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit,OnChanges {
  @Input() users?: Users;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentUsers: Users = {
    name: '',
    mail: '',
    disabled: false
  }; message = '';



  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.message='';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentUsers = { ...this.users };
  }
  updatedisabled(status: boolean): void {
    if (this.currentUsers.id) {
      this.usersService.update(this.currentUsers.id, { disabled: status })
      .then(() => {
        this.currentUsers.disabled = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
  updateUsers(): void {
    const data = {
      name: this.currentUsers.name,
      mail: this.currentUsers.mail
    };
    if (this.currentUsers.id) {
      this.usersService.update(this.currentUsers.id, data)
        .then(() => this.message = 'The user was updated successfully!')
        .catch(err => console.log(err));
    }
  }
  deleteUsers(): void {
    if (this.currentUsers.id) {
      this.usersService.delete(this.currentUsers.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
