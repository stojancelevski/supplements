import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'FirstPage';

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private storage: Storage,
                private toastCtrl: ToastController) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: 'HomePage'},
            {title: 'Search', component: 'SearchIPage'},
            {title: 'Maps', component: 'MapsPage'},
            {title: 'Logout', component: 'FirstPage'},


        ];
        storage.get('testApp.userId').then((val) => {

            if (val != 0 && val != null) {
                this.rootPage = 'HomePage';
            }
            else {
                this.rootPage = 'FirstPage';
            }
        });
    }

    displayToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == 'Logout') {
            this.storage.set('testApp.userId', 0);
            this.displayToast('Sucessfully Logged Out!!!')
            this.nav.setRoot('FirstPage');
        }
        else {
            this.nav.setRoot(page.component);
        }
    }
}
