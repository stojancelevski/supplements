import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  recipe: Recipe;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
      this.menuCtrl.enable(true,'sidemenu');

    this.recipe = this.navParams.get('recipe');
  }
  ingredients()
  {
    this.api.recipeId = this.recipe.recipe_id;
    this.navCtrl.push('IngredientsPage');
  }

}
