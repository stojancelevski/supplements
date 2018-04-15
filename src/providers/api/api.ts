import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  url = "http://food2fork.com/api/search?key=997dbcaae9b68d59fc4f9d43991a7926&q=";
  query : string; 
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
}
