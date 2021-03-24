import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CreatinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creatines',
  templateUrl: 'creatines.html',
})
export class CreatinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatinesPage');
  }
    presentAlert(msg1,msg2) {
        let alert = this.alertCtrl.create({
            title: msg1,
            subTitle: msg2,
            buttons: ['Dismiss']
        });
        alert.present();
    }
    bcaa1(){
        this.presentAlert('Best Creatine',
            '•\t4g proprietary Creatine blend'+'<br>' +
            '•\tZero Sugar'+'<br>' +
            '•\t6 advanced forms of Creatine'+'<br>' +
            '•\t500mg Betaine Anhydrous')
    }
    bcaa2(){
        this.presentAlert('Cellulor Creatine',
            '•\tComes in 2 delicious flavors: Fruit Punch & Icy Blue Razz'+'<br>' +
            '•\tMicronized Creatine Monohydrate'+'<br>' +
            '•\tFormulated to replenish ATP levels')
    }
    bcaa3(){
        this.presentAlert('Allmax Creatine',
            '•\t100% Pure Micronized highest grade Creatine!' + '<br>' +
            '•\tImproves Performance in Short-Burst, High Intensity Training!' + '<br>' +
            '•\tThe World’s Most Studied and Proven Supplement!')
    }
    bcaa4(){
        this.presentAlert('MP Creatine',
            '•\t100% unflavored creatine monohydrate'+'<br>' +
            '•\t60 full servings per container'+'<br>' +
            '•\tDesigned to support increased training capacity'+'<br>' +
            '•\tMixes easily into water or your favorite workout beverage')
    }
    bcaa5(){
        this.presentAlert('Xtend BCAAs',
            '•\tPure creatine monohydrate powder'+'<br>' +
            '•\tReplenish creatine stores'+'<br>' +
            '•\tHPLC tested creatine'+'<br>' +
            '•\tLow cost per serving')
    }

}
