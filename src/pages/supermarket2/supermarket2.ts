import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the Supermarket2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-supermarket2',
  templateUrl: 'supermarket2.html',
})
export class Supermarket2Page {
    @ViewChild('map') mapElement: ElementRef;

    supermarkets = [{
        ingredients: [
            'chicken breasts',
            'jalapenos',
            'cream cheese',
            'bacon',
            'cheddar cheese',
            'Garlic',
            'Spinach',
            'Tortillas',
            'Olive Oil',
            'chicken thighs',
            'chicken legs',
            'chicken wings',
            'salt'

        ],
        name: 'Codefest Market 1',
        lat: '41.0846',
        lon: '20.7972'
    },
        {
            ingredients: [
                'flour',
                'baking powder',
                'banana',
                'egg',
                'eggs',
                'butter',
                'sugar',
                'heavy cream',
                'sour cream',
                'whipping cream',
                'mint leaves',
                'lime',
                'white rum'
            ],
            name: 'Codefest Market 2',
            lat: '41.1131',
            lon: '20.8025'
        },
        {
            ingredients: [
                'flour',
                'baking powder',
                'banana',
                'egg',
                'eggs',
                'butter',
                'sugar',
                'heavy cream',
                'sour cream',
                'whipping cream',
                'mint leaves',
                'lime',
                'white rum',
                'hot sauce',
                'mayonaise',
                'mayo',
                'carrot',
                'celery',
                'onion',
                'gnocchi',
                'garlic',
                'Parmesan',
                'potato',
                'potatoes',
                'Milk',
                'vanilla',
                'cinnamon'
            ],
            name: 'Codefest Market 3',
            lat: '41.1097',
            lon: '20.8151'
        }]
    ingredients: any;
    map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
  }

    ionViewDidLoad() {
        console.log(this.supermarkets.length);
        this.ingredients = this.navParams.get('ingredients');
        console.log(this.ingredients);
        this.initMap();
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
            for(var i = 0; i<this.supermarkets.length;i++)
            {
                let marker = 1;
                for(var j = 0; j<this.ingredients.length && marker == 1;j++)
                {
                    let found = 0;
                    for(var k = 0;k<this.supermarkets[i].ingredients.length && marker == 1 && found == 0;k++)
                    {
                        let ingredient = this.ingredients;
                        console.log(ingredient);
                        console.log(this.supermarkets[i].ingredients[k]);
                        if(ingredient.toLowerCase().includes(this.supermarkets[i].ingredients[k].toLowerCase()))
                        {
                            found = 1;
                        }
                    }
                    if(found == 0)
                    {
                        marker = 0;
                    }
                }
                if(marker == 1)
                {
                    let mymarker = new google.maps.Marker({
                        position:  new google.maps.LatLng(this.supermarkets[i].lat,this.supermarkets[i].lon),
                        title: this.supermarkets[i].name,
                        map: this.map
                    });
                }
            }
        });
    }

}
