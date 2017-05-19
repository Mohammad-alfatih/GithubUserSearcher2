import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserService } from '../../services/user.service';

import { Profile } from '../../model/profile';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: Profile[];
  
  constructor(public navCtrl: NavController, private userService: UserService) {
    this.userService.getUserGroup().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  // viewProfile(user: Profile) {
  //   this.userService.
  // }
}


/*
  - This page should show a list of 20 Github users.
  - When a user is clicked:
    - Set user field in UserPage equal to clicked user.
    - Open the UserPage to view
    - User's name should be included in the search bar.
*/