import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController, List } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import {Storage} from "@ionic/storage";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  query: string;
  lastFive: Array<Recipe>;
  temp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ApiProvider, public menuCtrl: MenuController,
  public storage: Storage, public modalCtrl: ModalController,
  public loadingCtrl: LoadingController) 
  {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true,'sidemenu');
    this.getLastRecipes();
    console.log('ionViewDidLoad HomePage');
  }
  search()
  {
    console.log('clicked');
    this.api.query = this.query;
    this.navCtrl.push('SearchPage');
  }
  getLastRecipes()
  {
    this.lastFive = [];
    let loading = this.loadingCtrl.create({
      duration: 5000,
      content: 'Please wait'
    });
    loading.present();
    this.storage.get('lastfive').then(data => {
      console.log(data);
      if(data!= null)
      {
        let lastFiveString = data;
        let lastFive = lastFiveString.split(';');
        let error = 0;
        for(var i = 0;i<lastFive.length-1 && error == 0;i++)
        {
          this.api.recipeId = lastFive[i];
          this.api.getIngredients().then(
            data =>
            {
              let recipe = data;
              this.temp = recipe;
              this.lastFive.push(this.temp);
            },
            err =>
            {
              console.log(err);
              error = 1;
            }
          )
        }
          console.log(this.lastFive);
        }
      },err => {
    console.log(err);
    
  });
  loading.dismiss();
}

  showModal(recipe)
  {
    let modal = this.modalCtrl.create('RecipeModalPage',{'recipe': recipe});
    modal.present();
  }

}
