import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-i',
  templateUrl: 'search-i.html',
})
export class SearchIPage {
    query:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchIPage');
  }
    search()
    {
        console.log('clicked');
        this.navCtrl.push('Supermarket2Page',{ingredients: this.query});
    }
}
