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
  markers = [];
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
      }).then(()=>{
        let marker = new google.maps.Marker({
          position:  new google.maps.LatLng('41.0846','20.7972'),
          map: this.map
        });
        let marker2 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.1131','20.8025'),
          map: this.map
        });
        let marker3 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.1097','20.8151'),
          map: this.map
        });
      });
      
  }
    

  
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  
  clearMarkers() {
    this.setMapOnAll(null);
  }
  
  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
  ionViewDidLoad() {
     
      this.menuCtrl.enable(true,'sidemenu');
      this.initMap();
      console.log('ionViewDidLoad MapsPage');
  }

}
