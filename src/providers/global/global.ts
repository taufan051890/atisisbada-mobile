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
    this.url ='http://mobile.tangerang.pilar.web.id/';
}

urlService(){
    return this.url;
  }

}
