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
            subTitle: 'After registering you will need to sign in with your credentials, and then you can easily search a recipe.',
            buttons: ['OK']
        });
        alert.present();
    }
    showAlert2() {
        let alert = this.alertCtrl.create({
            title: 'How to search for recipes containing my ingredients?',
            subTitle: 'Use the search page from the side menu, and in the input type the ingredient you want.',
            buttons: ['OK']
        });
        alert.present();
    }
    showAlert3() {
        let alert = this.alertCtrl.create({
            title: 'Where can I buy the ingredients I need?',
            subTitle: 'After you search for the ingredient, you will be shown the nearest market around you that offer that same ingredient. ',
            buttons: ['OK']
        });
        alert.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
