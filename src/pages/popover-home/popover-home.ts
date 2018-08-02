import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { App, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'popover-home.html',
})

export class PopoverHomePage {
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
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  Logout(){
    this.close();
    let confirm = this.alertCtrl.create({
      title: 'LOGOUT',
      message: 'Apa anda Yakin?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
            localStorage.setItem("username","logout");
            localStorage.removeItem("skpdSession");
            this.appCtrl.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}