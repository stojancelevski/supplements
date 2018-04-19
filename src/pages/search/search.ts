import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import {Storage} from "@ionic/storage";
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
              public menuctrl:MenuController,
              public storage: Storage
  ) {
  }

  getRecipe(recipe)
  { 
    this.putLastFive(recipe.recipe_id);
    this.navCtrl.push('RecipePage',{'recipe':recipe})
  }
  ionViewDidLoad() {
      this.menuctrl.enable(false,"menu");
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
  putLastFive(recipe_id)
  {
    this.storage.get('lastfive').then(data =>{
      let lastFiveString = data;
    if(lastFiveString == null)
    {
      this.storage.set('lastfive',recipe_id + ';');
    }
    else
    {
      let lastFive = lastFiveString.split(';');
      let found = 0;
      for(var i = 0; i<lastFive.length-1 && found === 0;i++)
      {
        if(lastFive[i] === recipe_id)
        {
          if(i > 0)
          {
            let temp = lastFive[i];
            lastFive[i] = lastFive[0];
            lastFive[0] = temp;
          }
          found = 1;
        }
      }
      lastFiveString = '';
      for(var i = 0;i<lastFive.length-1;i++)
      {
        lastFiveString += lastFive[i] + ';';
      }
      console.log(lastFiveString);
      this.storage.set('lastfive',lastFiveString);
      if(found == 0)
      {
        if(lastFive.length <= 5)
        {
          this.storage.set('lastfive',recipe_id + ';' + lastFiveString);
        }
        else
        {
          for(var i = 0; i<5;i++)
          {
            lastFive[i+1] = lastFive[i];
          }
          lastFive[0] = recipe_id;
          lastFiveString = '';
          for(var i = 0;i<lastFive.length;i++)
          {
            lastFiveString += lastFive[i] + ';';
          }
          this.storage.set('lastfive',recipe_id + ';' + lastFiveString);
        }
      }
    }
  })
}

}
