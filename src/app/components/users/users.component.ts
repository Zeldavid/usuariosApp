import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  res: string;

  constructor( private _usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this._usersService.getUsers()
    .subscribe( (data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }

  goToUser( idx: number ) {
    console.log(idx);
    this.router.navigate(['/user', idx]);
  }

}
