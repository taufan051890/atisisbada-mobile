import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { MapslayoutPage } from '../mapslayout/mapslayout';
import { Nav,LoadingController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the KibBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-kib-c',
  templateUrl: 'kib-c.html',
})
export class KibCPage {
  @ViewChild(Nav) nav: Nav;
  data : string;
  shownGroup : string;
  shownGroup1 : string;
  plu : string;
  constructor(public GlobalProvider:GlobalProvider,public platform: Platform, public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {

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
      this.http.get(this.GlobalProvider.url+'atis/pages/api/api/KIBC/data.php?id='+this.plu)
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
  this.navCtrl.push(MapslayoutPage, {
    idbi: idbi,
    table : table
  });
}

}