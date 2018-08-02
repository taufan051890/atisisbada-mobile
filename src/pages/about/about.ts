import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });
  }

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
    this.appCtrl.getRootNav().setRoot(HomePage);
   }

   home(){
    this.appCtrl.getRootNav().setRoot(HomePage);
   }

  route(route){
    if(route=="profile"){
      this.navCtrl.push(ContactPage);
    }else if(route =="about"){
      this.navCtrl.push(AboutPage);
    }else{
      this.navCtrl.push(HomePage);
    }
  }

}
