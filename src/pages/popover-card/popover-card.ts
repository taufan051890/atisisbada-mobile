import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { App, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-popover-card',
  templateUrl: 'popover-card.html',
})
export class PopoverCardPage {
constructor(public viewCtrl: ViewController,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {}
close() {
    this.viewCtrl.dismiss();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  Profile(){
    this.close();
    this.appCtrl.getRootNav().setRoot(ContactPage);
  }

  About(){
    this.close();
    this.appCtrl.getRootNav().setRoot(AboutPage);
  }

  Menu(){
    this.close();
    this.appCtrl.getRootNav().setRoot(MenuPage);
  }

}