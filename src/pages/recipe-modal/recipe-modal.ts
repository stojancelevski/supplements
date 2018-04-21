import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

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
    constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    }
    ionViewCanEnter()
    {
        let myrecipe = this.navParams.get('recipe');
        this.recipe =myrecipe.recipe;
    }
    ionViewDidLoad() {

    }
    ingredients()
    {
        this.api.recipeId = this.recipe.recipe_id;
        this.api.getIngredients().then(data => {
                let recipeWithIngredients = data;
                this.navCtrl.push('IngredientsPage',{recipe: recipeWithIngredients});
            },
            err => {
                console.log(err);
            }
        )

    }

    goToHome() {
        this.navCtrl.setRoot('HomePage');
    }
}
