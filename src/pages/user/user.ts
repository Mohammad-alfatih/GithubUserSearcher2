import { Component, OnInit } from '@angular/core';
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
              private userService: UserService) { }

  hasUser() {
    if(this.user != undefined) return true;
  }

  setUser(username: string) {
    this.userService.setUser(username);
    this.user = this.userService.getUser();
  }

  ionViewWillEnter() {
    this.username = this.navParams.get('name') as string;
    this.setUser(this.username);
  }
}
