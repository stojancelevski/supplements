import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IngredientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html',
})
export class IngredientsPage {
  recipe: Recipe;
  ingredients: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider,public menuCtrl: MenuController) {
  }

  ionViewCanEnter() {
    let recipe = this.navParams.get('recipe');
    this.recipe = recipe.recipe;
    this.ingredients = this.recipe.ingredients;
    }
  showOnMap()
  {
    this.navCtrl.push('SuperMarketsPage',{ingredients: this.recipe.ingredients})
  }

}
