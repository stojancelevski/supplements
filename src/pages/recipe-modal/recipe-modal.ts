import {Component} from '@angular/core';
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
<<<<<<< HEAD
    recipe: Recipe;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.recipe = this.navParams.get('recipe');

        console.log('nla', this.navParams.get('recipe'));
        console.log(this.recipe.title);
=======
  recipe: Recipe;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewCanEnter()
  {
    let myrecipe = this.navParams.get('recipe');
    this.recipe =myrecipe.recipe;
  }
  ionViewDidLoad() {
>>>>>>> 626717be7dc014b2fead340434b6de577feb0a01
    }


    /* ionViewDidLoad() {
         console.log("load");

         this.recipe = this.navParams.get('recipe');

       console.log('nla', this.navParams.get('recipe'));
       console.log(this.navParams.get('recipe'));
   }*/

    goToHome() {
        this.navCtrl.setRoot('HomePage');
    }
}
