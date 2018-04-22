import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
    comment: any;
    name: any;
    email:any;
    title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
    displayToast(message){
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
    contact()
    {
        //var comment = document.getElementById("comment").nodeValue;

        this.displayToast('Sucessfully Sent');

        this.comment = '';
        this.name = '';
        this.email = '';
        this.title = '';
    }
}
