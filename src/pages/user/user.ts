import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../services/user.service';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [ UserService ]
})
export class UserPage {
  username: string;
  user: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService) {
                this.user = false;
  }

  setUser(username: string) {
    this.user = this.userService.setUser(username);
  }
}
