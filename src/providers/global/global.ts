import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public url:string;
  constructor() {
    this.url = "http://123.231.253.228/";
}

urlService(){
    return this.url;
  }

}
