import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../services/user.service';

import { Profile } from '../../model/profile';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [ UserService ]
})
export class UserPage {
  username: string;
  user: Profile;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService) {
  }

  hasUser() {
    if(this.user != undefined) return true;
  }

  setUserProfile(username: string) {
    this.userService.getUser(username).subscribe(user => {
      this.user = user;
    });
  }
}
