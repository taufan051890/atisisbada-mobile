import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
// import { MapslayoutPage } from '../mapslayout/mapslayout';
import { Nav,LoadingController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the KibAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-kib-f',
  templateUrl: 'kib-f.html',
})
export class KibFPage {
  @ViewChild(Nav) nav: Nav;
  data : string;
  plu : string;
  shownGroup : string;
  shownGroup1 : string;
  constructor(public GlobalProvider:GlobalProvider,public platform: Platform, public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.GlobalProvider.url=localStorage.getItem("server");
    this.plu = navParams.get('plu');
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });
  }

  myHandlerFunction(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
    // this.navCtrl.push(CarddataPage);
   }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = group;
    } else {
        this.shownGroup =  null; 
    }
   };

    isGroupShown(group) {
        return this.shownGroup === null;
    };


    toggleGroup1(group) {
      if (this.isGroupShown1(group)) {
          this.shownGroup1 = group;
      } else {
          this.shownGroup1 =  null; 
      }
     };
  
      isGroupShown1(group) {
          return this.shownGroup1 === null;
      };


  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading....',
      duration: 7000,
      dismissOnPageChange: true
    }).present();
  }


  ionViewDidLoad(){

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {
      this.http.get(this.GlobalProvider.url+'pages/api/api/KIBF/data.php?id='+this.plu)
      .map(result => result.json())
      .subscribe(data => {
        this.data = data.result;
        console.log(data.result);
        loader.dismiss();
      },err => {
        console.log(err);
      }
    );

    });

}

maps(idbi, table){
  this.navCtrl.push('MapslayoutPage', {
    idbi: idbi,
    table : table
  });
}

}
