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
  ionViewDidLoad()
  {

<<<<<<< HEAD
    ionViewCanEnter() {
      this.menuCtrl.enable(true,'sidemenu');

      console.log('ionViewDidLoad IngredientsPage');
    this.api.getIngredients().then(
      data =>{
        this.data = data;
        let jsonRecipe = this.data;
        this.recipe = jsonRecipe.recipe;
        console.log(this.recipe);
    },
      err =>{
    console.log(err);
  })
=======
    this.menuCtrl.enable(true,'sidemenu');
    console.log('ionViewDidLoad IngredientsPage');
>>>>>>> fc9a40695b102cdf84a184b3b4dfc4e1f4d21f98
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
