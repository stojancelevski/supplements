import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  public platform: Platform, public geolocation: Geolocation) {
  }
  initMap()
  {
    this.geolocation.getCurrentPosition({maximumAge: 3000,timeout:5000,enableHighAccuracy: true}).then(
      (resp)=>{
        let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);

    let mapOptions = {
      center: mylocation,
      zoom: 15,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let locationMarker = new google.maps.Marker({
      position: new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude),
      title: 'My location',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5
      },
      map: this.map
    })
      }).then(()=>{
        let marker = new google.maps.Marker({
          position:  new google.maps.LatLng('41.0846','20.7972'),
          title: 'Codefest Market 1',
          map: this.map
        });
        let marker2 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.1131','20.8025'),
          title: 'Codefest Market 2',
          map: this.map
        });
        let marker3 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.1097','20.8151'),
          title: 'Codefest Market 3',
          map: this.map
        });
      });
      
  }
    

  ionViewDidLoad() {
      this.menuCtrl.enable(true,'sidemenu');
      this.initMap();
      console.log('ionViewDidLoad MapsPage');
  }

}
