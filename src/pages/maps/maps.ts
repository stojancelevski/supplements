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
          position:  new google.maps.LatLng('41.179413996149606','20.678191689549294'),
          title: 'M-Fitness Center',
          map: this.map
        });
        let marker2 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.177912015014726','20.677730349598733'),
          title: 'Bujar',
          map: this.map
        });
        let marker3 = new google.maps.Marker({
          position:  new google.maps.LatLng('41.17774243433562','20.67407181650242'),
          title: 'Pazar',
          map: this.map
        });
        let marker4 = new google.maps.Marker({
            position:  new google.maps.LatLng('41.17680569505442','20.677966383992043'),
            title: 'Fitnes Vita',
            map: this.map
        });
        let marker5 = new google.maps.Marker({
            position:  new google.maps.LatLng('41.18133261680457','20.683727768956032'),
            title: 'Risto Krle',
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
