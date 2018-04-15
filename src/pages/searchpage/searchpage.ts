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
      console.log(this.recipes[0]);

      /*let recipes:Array<Recipe> = this.data.map((data) => new Recipe(
        data.publisher,
        data.f2f_url,
        data.title,
        data.source_url,
        data.recipe_id,
        data.image_url,
        data.social_rank,
        data.publisher_url
      )
      )*/
     // console.log(recipes);
      loader.dismiss();
    }
    ).catch(err => {
      console.log(err);
      loader.dismiss();
    });

  }
  

}
