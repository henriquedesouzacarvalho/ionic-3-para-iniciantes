import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage:any = ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  // openPage(page) {
  //   this.navCtrl.push(page);
  // }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openAbout() {
    this.navCtrl.push(AboutPage);
  }

}
