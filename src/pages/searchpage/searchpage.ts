import { ApiProvider } from './../../providers/api/api';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the SearchpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchpage',
  templateUrl: 'searchpage.html',
})
export class SearchpagePage {

  data: any;
  recipes : Array<Recipe>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider,
  private loading: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loading.create({
      content: "Please wait",
      duration: 5000
    });
    loader.present();
    this.api.searchApi().then(data =>
    {
      this.data = data;
      let jsonRecipes= this.data.recipes;
      this.recipes = jsonRecipes;
      console.log(this.recipes);
      loader.dismiss();
    }
    ).catch(err => {
      console.log(err);
      loader.data;
    });

  }


}
