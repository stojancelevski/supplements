import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  data: any;
  recipes : Array<Recipe>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              private loading: LoadingController,
              public menuCtrl:MenuController
  ) {
  }

  getRecipe(recipe)
  {
    this.navCtrl.push('RecipePage',{'recipe':recipe})
  }
  ionViewDidLoad() {
      this.menuCtrl.enable(true,"sidemenu");
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
