import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PreworkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preworkouts',
  templateUrl: 'preworkouts.html',
})
export class PreworkoutsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreworkoutsPage');
  }
    presentAlert(msg1, msg2) {
        let alert = this.alertCtrl.create({
            title: msg1,
            subTitle: msg2,
            buttons: ['Dismiss']
        });
        alert.present();
    }

    bcaa1() {
        this.presentAlert('C4',
            '•\t1.6g CarnoSyn Beta-Alanine' + '<br>' +
            '•\t1g Creatine Nitrate (NO3-T)' + '<br>' +
            '•\t150mg Caffeine' + '<br>' +
            '•\t1g Arginine AKG')
    }

    bcaa2() {
        this.presentAlert('Impact Igniter',
            '•\tExplosive pre-workout stimulant' + '<br>' +
            '•\t20 servings per container' + '<br>' +
            '•\t2 delicious fruity flavors' + '<br>' +
            '•\t6g Citrulline Malate 2:1')
    }

    bcaa3() {
        this.presentAlert('One More Rep',
            '•\tPowered with beetroot powder and L-citrulline' + '<br>' +
            '•\t25 servings per container' + '<br>' +
            '•\tDesigned to promote focus, energy & pump' + '<br>' +
            '•\tDelicious flavors with no artificial colors')
    }

    bcaa4() {
        this.presentAlert('Vapor X5',
            '•\tUltimate neurosensory experience!' + '<br>' +
            '•\tEnhanced Amino Booster Matrix' + '<br>' +
            '•\tAdvanced Weight Loss Plus Matrix')
    }

    bcaa5() {
        this.presentAlert('The Curse',
            '•\t5 delicious flavors' + '<br>' +
            '•\tExtreme Mental Focus Matrix' + '<br>' +
            '•\tBlood Flow Amplifier Matrix supports pumps' + '<br>' +
            '•\t50 Servings per container')
    }

}
