import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userById: any[] = [];

  constructor( private _usersService: UsersService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe( params => {
      this._usersService.getUsersById( params['id'] )
      .subscribe( (resId: any) => {
        this.userById = resId;
        console.log(this.userById);
      });
    });
  }

  ngOnInit() {
  }

}
