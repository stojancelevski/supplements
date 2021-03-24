import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BcaaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bcaa',
  templateUrl: 'bcaa.html',
})
export class BcaaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BcaaPage');
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
      this.presentAlert('Alpha Amino',
          '• Helps Increase Endurance'+'<br>' +
          '• Reduces Muscle Soreness'+'<br>' +
          '• Promotes Muscle Growth'+'<br>' +
          '• Helps Prevent Muscle Breakdown\n')
    }
    bcaa2(){
        this.presentAlert('AllMax Aminocore',
            '• 100% soluble - No foam - No film'+'<br>' +
            '• 8g of pure BCAAs per serving'+'<br>' +
            '• No carbs, no sugar'+'<br>' +
            '• Delicious flavors make it easy to stay hydrated')
    }
    bcaa3(){
        this.presentAlert('Amino X',
            '• 10g of Micronized Anti-Catabolic Amino Acids per Serving!' + '<br>' +
            '• 0g of Sugar per Serving' + '<br>' +
            '• 500 IUs of Vitamin D per Serving' + '<br>' +
            '• Caffeine-Free – Can Be Used Anytime, Day or Night' + '<br>' +
            '• Mixes Completely (No Clumping)')
    }
    bcaa4(){
        this.presentAlert('Best BCAA',
            '•\tProven 2:1:1 BCAA ratio'+'<br>' +
            '•\t10 delicious flavors to choose from'+'<br>' +
            '•\tPeptide linked to promote efficient metabolization'+'<br>' +
            '•\tFormulated to decrease protein catabolism')
    }
    bcaa5(){
        this.presentAlert('Xtend BCAAs',
            '•\t7 grams of BCAAs per serving'+'<br>' +
            '•\tSugar Free and Carbohydrate Free'+'<br>' +
            '•\tHydration-Inducing Electrolytes'+'<br>' +
            '•\tSupports Muscle Growth & Strength*')
    }

}

