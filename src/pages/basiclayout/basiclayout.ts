import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { AllPage } from '../all/all';
import { Nav,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
@IonicPage()
@Component({
  selector: 'page-basiclayout',
  templateUrl: 'basiclayout.html',
})
export class BasiclayoutPage {
  @ViewChild(Nav) nav: Nav;
  data : string;
  dataCode :any = {};
  constructor(private toastCtrl: ToastController,public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.http = http;
    this.dataCode.response = '';
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  ionViewDidLoad(){
    this.loadUser();

  }


  loadUser(){
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

   loader.present().then(() => {
    this.storage.get('pageSession').then((val) => {
      console.log('Kamu Memilih Page', val);
      this.presentLoading();
      this.http.get('http://123.231.253.228/pages/api/api/basicPage/basicPage.php?id='+val)
      .map(result => result.json())
      .subscribe(data => {
        this.data = data.result;
        console.log(data.result);

      },err => {
        console.log(err);
      }

    );
  });
    loader.dismiss();
  });
  }

  page(id) {
    var link = 'http://123.231.253.228/pages/api/api/menu/pageMenu.php';

    this.dataCode.id = id;
    var myData = JSON.stringify({
      id: this.dataCode.id
    });

    this.http.post(link, myData)
    .subscribe(dataCode => {
       //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      var obj = JSON.parse(dataCode["_body"]);
      if(obj.id === "1"){
        this.navCtrl.push(AllPage);

        this.storage.ready().then(() => {
          this.storage.set('pageSession', obj.pageSession);
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

      }else{
        this.presentToast("Page Tidak Ada!");

      }

    }, error => {
        console.log("Oooops!");
    });
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



home(){
  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
}


}
