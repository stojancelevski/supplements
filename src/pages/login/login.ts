import { Component,ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public toastCtrl: ToastController,private storage: Storage,public loadingCtrl:LoadingController,private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  displayToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  signInUser() {
    let ctr = this.loadingCtrl.create(
      {
        content: 'Please wait',
        duration:4000
      }
    );
    ctr.present();
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
      .then( data => {
        this.displayToast('Success! You\'re logged in');
        this.storage.set('testApp.userId',data.uid);
        console.log(data.uid);
        this.navCtrl.setRoot( 'HomePage' );
        ctr.dismiss()
      })
      .catch( error => {
        ctr.dismiss();
        this.alert('Invalid Credentials!');
      })
  }


}
