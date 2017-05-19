import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
  //browser = this.inAppBrowser.create(this.user.blog);

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService /*,
              private inAppBrowser: InAppBrowser,
              private platform: Platform */) { }

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

  // openUrl() {
  //   this.platform.ready().then(() => {
  //     let browser = new InAppBrowser(this.user.blog, '_blank');
  //   });
  // }
}
