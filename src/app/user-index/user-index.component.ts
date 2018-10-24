import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute) {

    this.users = this.route.snapshot.data['users'];
    // this.userService.index()
    // .then(users =>
    //   this.users = users
    // )
    // .catch(response => null);
  }

  ngOnInit() {
  }

}
