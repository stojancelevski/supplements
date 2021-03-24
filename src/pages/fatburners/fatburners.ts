import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FatburnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-fatburners',
    templateUrl: 'fatburners.html',
})
export class FatburnersPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FatburnersPage');
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
        this.presentAlert('Amino Cuts',
            '•\t4.2g Amino Acids' + '<br>' +
            '•\tSugar-Free and Only 5 Calories' + '<br>' +
            '•\tGreen Coffee Extract & CLA' + '<br>' +
            '•\tNatural-Source Caffeine')
    }

    bcaa2() {
        this.presentAlert('MP Carnitine',
            '•\t1000mg of Carnitine per serving' + '<br>' +
            '•\tDesigned to support fat loss' + '<br>' +
            '•\tBalanced formula with raspberry keytones' + '<br>' +
            '•\tPromotes energy for muscle gain & weight loss')
    }

    bcaa3() {
        this.presentAlert('Nite Burn',
            '•\tNight time weight management support*' + '<br>' +
            '•\tStimulant-free formula' + '<br>' +
            '•\t30 servings per bottle')
    }

    bcaa4() {
        this.presentAlert('MP Cla',
            '•\t90, 180 & 270 serving options' + '<br>' +
            '•\tOnly 5 calories per serving' + '<br>' +
            '•\tCaffeine and sugar free' + '<br>' +
            '•\t1000mg of CLA in every serving')
    }

    bcaa5() {
        this.presentAlert('CLA+ Creatine',
            '•\tSupport athletic performance' + '<br>' +
            '•\tStimulant-free weight loss formula' + '<br>' +
            '•\t2.5g CLA Matrix + 2g Carnitine' + '<br>' +
            '•\tPromote lean muscle mass!*')
    }

}
