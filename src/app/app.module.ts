import { ApiProvider } from './../providers/api/api';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { MapsProvider } from '../providers/maps/maps';

const firebaseAuth = {
  apiKey: "AIzaSyDG8jasoPtq0lxVsl70hJ4TBG1aYMo7kT4",
    authDomain: "codefest-b72e1.firebaseapp.com",
  databaseURL: "https://codefest-b72e1.firebaseio.com",
  projectId: "codefest-b72e1",
  storageBucket: "codefest-b72e1.appspot.com",
  messagingSenderId: "52186270167"
};

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    MapsProvider,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
