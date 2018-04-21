import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  url = "http://food2fork.com/api/search?key=6273e129d5d1fe0257e377fa16a4db58&q=";
  recipeurl = "http://food2fork.com/api/get?key=6273e129d5d1fe0257e377fa16a4db58&rId=";
  query: string; 
  recipeId: string;
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  searchApi(){
  return new Promise((resolve, reject) =>
  {
    this.http.get(this.url + this.query).subscribe(
      data =>
      {
        resolve(data);
      },
      err =>
      {
        reject(err);
      }
    )
  });
  }
  getIngredients()
  {
    console.log(this.recipeurl + this.recipeId);
    return new Promise((resolve, reject) =>
  {
    this.http.get(this.recipeurl + this.recipeId).subscribe(
      data =>
      {
        resolve(data);
      },
      err =>
      {
        reject(err);
      }
    )
  });
  }



}
