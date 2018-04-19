import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
  public platform: Platform) {
    platform.ready().then(() =>{
      this.initMap();
    })
  }
  initMap()
  {
    this.map = new google.maps.Map(this.mapElement.nativeElement,{
      zoom: 7,
      center: {lat: 41.85,lng:-87.65}
    });
  }
  ionViewDidLoad() {
      this.menuCtrl.enable(true,"sidemenu");
      console.log('ionViewDidLoad MapsPage');
  }

}
