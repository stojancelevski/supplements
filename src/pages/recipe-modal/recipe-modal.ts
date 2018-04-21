import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RecipeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-modal',
  templateUrl: 'recipe-modal.html',
})
export class RecipeModalPage {
  recipe: Recipe;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.recipe = this.navParams.get('recipe');

      console.log(this.navParams.get('recipe'));
      console.log(this.navParams.get('recipe'));
  }

  goToHome(){
  this.navCtrl.setRoot('HomePage');
  }
}
