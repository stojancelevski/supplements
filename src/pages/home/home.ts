import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public menuctrl:MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
      this.menuctrl.enable(true,"menu");

  }
  search()
  {
    console.log('clicked');
    this.api.query = this.query;
    this.navCtrl.push('SearchPage');
  }
  press()
  {
    console.log('HARDER DADDY!')
  }
}
