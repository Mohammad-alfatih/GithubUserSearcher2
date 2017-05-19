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
  
  constructor(public navCtrl: NavController,
              private userService: UserService) {
    this.userService.getUserGroup().subscribe(users => {
      this.users = users;
    });
  }

  viewProfile(username: string) {
    this.navCtrl.push(UserPage, {name: username});
  }

  appendLastUser() {
    let lastUser: any = this.users[this.users.length - 1];
    this.userService.appendLastUser(lastUser.id);
    this.userService.getUserGroup().subscribe(users => {
      this.users = users;
    });
  }
}