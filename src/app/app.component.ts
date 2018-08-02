import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { CarddataPage } from '../pages/carddata/carddata';
import { HomePage } from '../pages/home/home';
import { MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ScanerlayoutPage } from '../pages/scanerlayout/scanerlayout';
import { ScanerqrlayoutPage } from '../pages/scanerqrlayout/scanerqrlayout';

import { SensusPage } from '../pages/sensus/sensus';
import { RekapPage } from '../pages/rekap/rekap';
var page;
var username = localStorage.getItem("username");
 
if(username === "logout" || username === undefined || username === null){
  page = LoginPage;
}else{
  page = HomePage;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = page;

  pages: Array<{title: string, component: any}>;

  constructor(public appCtrl: App,private toastCtrl: ToastController,private storage: Storage,public menuCtrl: MenuController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  Sensus(){
    this.appCtrl.getRootNav().setRoot(SensusPage);
    this.menuCtrl.close();
  }

  Rekap(){
    this.nav.push(RekapPage);
    this.menuCtrl.close();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  presentToast(response) {
    let toast = this.toastCtrl.create({
      message: response,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  page(kib){
    if(kib === 'kiba'){
      this.nav.push(CarddataPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '95');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'kibb'){
        this.nav.push(CarddataPage);
  
        this.storage.ready().then(() => {
          this.storage.set('pageSession', '87');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });
  
        this.menuCtrl.close();
    }else if(kib === 'kibc'){
        this.nav.push(CarddataPage);

        this.storage.ready().then(() => {
          this.storage.set('pageSession', '88');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

        this.menuCtrl.close();
    }else if(kib === 'kibd'){
      this.nav.push(CarddataPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '89');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'kibe'){
      this.nav.push(CarddataPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '90');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'kibf'){
      this.nav.push(CarddataPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '91');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'kibg'){
      this.nav.push(CarddataPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '92');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'qrcode'){
      this.nav.push(ScanerqrlayoutPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '93');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else if(kib === 'barcode'){
      this.nav.push(ScanerlayoutPage);

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '94');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.menuCtrl.close();
    }else{
      this.presentToast("Page Tidak Ada!");
    }
  }
}
