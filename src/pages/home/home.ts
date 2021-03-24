import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController, List } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import {Storage} from "@ionic/storage";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public menuCtrl: MenuController,
              public storage: Storage,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController)
  {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true,'sidemenu');
    console.log('ionViewDidLoad HomePage');

  }
    bcaa(){
    this.navCtrl.push('BcaaPage');
    }
    protein(){
    this.navCtrl.push('ProteinsPage');
    }
    fat(){
    this.navCtrl.push('FatburnersPage');
    }
    pre(){
    this.navCtrl.push('PreworkoutsPage');
    }
    creatine(){
    this.navCtrl.push('CreatinesPage');
    }


}
