import { ApiProvider } from './../../providers/api/api';
import { SearchpagePage } from './../searchpage/searchpage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  query: string;
  constructor(public navCtrl: NavController, public api: ApiProvider) {

  }
  
  search()
  {
    console.log('clicked');
    this.api.query = this.query;
    this.navCtrl.push('SearchpagePage');
  }


}
