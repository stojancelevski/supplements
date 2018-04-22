import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
    showAlert1() {
        let alert = this.alertCtrl.create({
            title: 'Where to start?',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
    showAlert2() {
        let alert = this.alertCtrl.create({
            title: 'How to search for recipes containing my ingredients?',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
    showAlert3() {
        let alert = this.alertCtrl.create({
            title: 'Where can I buy the ingredients I need?',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
