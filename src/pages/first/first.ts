import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
      this.menuCtrl.enable(false,"menu");

  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }

}
