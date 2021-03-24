import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProteinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proteins',
  templateUrl: 'proteins.html',
})
export class ProteinsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProteinsPage');
  }presentAlert(msg1, msg2) {
        let alert = this.alertCtrl.create({
            title: msg1,
            subTitle: msg2,
            buttons: ['Dismiss']
        });
        alert.present();
    }

    bcaa1() {
        this.presentAlert('Best Protein',
            '•\t24g protein per serving' + '<br>' +
            '•\tHigh-quality 100% whey proteins' + '<br>' +
            '•\tNo fillers or maltodextrin' + '<br>' +
            '•\t5.5g BCAAs')
    }

    bcaa2() {
        this.presentAlert('MP Combat',
            '•\t25 grams of high-quality protein' + '<br>' +
            '•\tOnly 1g of sugar' + '<br>' +
            '•\tBanned-substance tested' + '<br>' +
            '•\tNo artificial dyes or colors')
    }

    bcaa3() {
        this.presentAlert('Impact Whey Protein',
            '•\tUp to 80% protein content' + '<br>' +
            '•\tHelps with recovery and muscle growth' + '<br>' +
            '•\t100% whey protein concentrate' + '<br>' +
            '•\tAmazing range of flavors')
    }

    bcaa4() {
        this.presentAlert('Nitro Tech',
            '•\tWhey Isolate & peptides primary source' + '<br>' +
            '•\tAmplifies recovery, performance & strength*' + '<br>' +
            '•\t30g Protein per serving' + '<br>' +
            '•\tDelicious flavors & easy mixability!')
    }

    bcaa5() {
        this.presentAlert('Syntha 6',
            '•\tSustained release (up to 8 hrs of amino acid nitrogen delivery)' + '<br>' +
            '•\tMulti-functional AM/PM protein blend' + '<br>' +
            '•\t6 different proteins sourced used' + '<br>' +
            '•\t12 "ridiculously" delicious flavors')
    }

}
