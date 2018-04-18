import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  query: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ApiProvider, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true,'sidemenu');
    console.log('ionViewDidLoad HomePage');
  }
  search()
  {
    console.log('clicked');
    this.api.query = this.query;
    this.navCtrl.push('SearchPage');
  }
}
