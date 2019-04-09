import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  urlService:string;
  constructor(private storage: Storage,public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    platform.ready().then(()=>{
      this.urlService = localStorage.getItem("server");
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });
  }

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
    this.appCtrl.getRootNav().setRoot('HomePage');
   }

   home(){
    this.appCtrl.getRootNav().setRoot('HomePage');
   }

  route(route){
    if(route=="profile"){
      this.navCtrl.push('ContactPage');
    }else if(route =="about"){
      this.navCtrl.push('AboutPage');
    }else{
      this.navCtrl.push('HomePage');
    }
  }

  page(kib){
    if(kib === '95'){
      this.navCtrl.push('CarddataPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '95');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '87'){
        this.navCtrl.push('CarddataPage');
  
        this.storage.ready().then(() => {
          this.storage.set('pageSession', '87');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });
  
    }else if(kib === '88'){
        this.navCtrl.push('CarddataPage');

        this.storage.ready().then(() => {
          this.storage.set('pageSession', '88');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

    }else if(kib === '89'){
      this.navCtrl.push('CarddataPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '89');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '90'){
      this.navCtrl.push('CarddataPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '90');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '91'){
      this.navCtrl.push('CarddataPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '91');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '92'){
      this.navCtrl.push('CarddataPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '92');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '93'){
      this.navCtrl.push('ScanerqrlayoutPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '93');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else if(kib === '94'){
      this.navCtrl.push('ScanerlayoutPage');

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '94');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

    }else{
      // this.presentToast("Page Tidak Ada!");
    }
  }

  Sensus(){
    this.appCtrl.getRootNav().setRoot('SensusPage');
  }

}
