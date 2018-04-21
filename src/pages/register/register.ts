import { Component, ViewChild,Input } from '@angular/core';
import { IonicPage, NavController,MenuController, NavParams, AlertController,ToastController,LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,
              private fire: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public menuCtrl:MenuController,
              public loadCtrl:LoadingController,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
      this.menuCtrl.enable(false,'sidemenu');
      setTimeout(() => {
          this.user.setFocus();
      },500);
  }

  alert(message: string) {
    this.alertCtrl.create({
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
  registerUser() {
    let cdr = this.loadCtrl.create({
      content: 'Please wait',
      duration: 4000
    });
    cdr.present();
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {

          this.displayToast('Registered! Go and login now!');
          this.navCtrl.setRoot('LoginPage');
          cdr.dismiss();
        }
      )
      .catch(error => {
        cdr.dismiss();
        this.displayToast(error.message);

      });
  }


}
