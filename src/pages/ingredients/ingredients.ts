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
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
      this.menuCtrl.enable(true,'sidemenu');

      console.log('ionViewDidLoad IngredientsPage');
    this.api.getIngredients().then(
      data =>{
        this.data = data;
        let jsonRecipe = this.data;
        this.recipe = jsonRecipe;
        console.log(this.recipe);
    },
      err =>{
    console.log(err);
  })
  }

}
