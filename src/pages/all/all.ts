import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
// import { ToastController } from 'ionic-angular';
import { Nav,LoadingController  } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { HomePage } from '../home/home';
import { ListlayoutPage } from '../listlayout/listlayout';
import { MapslayoutPage } from '../mapslayout/mapslayout';
import { CardlayoutPage } from '../cardlayout/cardlayout';
import { BasiclayoutPage } from '../basiclayout/basiclayout';
import { ScanerlayoutPage } from '../scanerlayout/scanerlayout';
import { ScanerqrlayoutPage } from '../scanerqrlayout/scanerqrlayout';
import { CarddataPage } from '../carddata/carddata';

// import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
// import { Storage } from '@ionic/storage';
/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-all',
  templateUrl: 'all.html'
})
export class AllPage {
  @ViewChild(Nav) nav: Nav;
  data : any = {};
  dataCode :any = {};
  url :string;
  backPage :string;
  constructor(public loadingCtrl: LoadingController,private toastCtrl: ToastController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.dataCode.response = '';
    this.http = http;

    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }


      ionViewDidLoad(){
        this.storage.get('backPage').then((val) => {

          this.loadingCtrl.create({
            content: val,
          });

          if(val === "back2"){
            console.log(val + 'a');
            this.loadUser();
           }else{
            console.log('asas');
            this.navCtrl.push(HomePage);
          }
        });



      }

      presentLoading() {
        this.loadingCtrl.create({
          content: 'Loading...',
          duration: 3000,
          dismissOnPageChange: true
        }).present();
      }

      home(){
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      }


      loadUser(){

          this.storage.get('pageSession').then((val) => {
            console.log('Kamu Memilih Page', val);
          this.http.get('http://123.231.253.228/atis/pages/api/api/menu/allPageMenu.php?id='+val)
          .subscribe(data => {
            var obj = JSON.parse(data["_body"]);




              if(obj.layout === "basic_menu"){
                this.navCtrl.push(BasiclayoutPage);
                this.http.get('http://123.231.253.228/atis/pages/api/api/basicPage/basicPage.php?id='+val)
              }else if(obj.layout === "card_menu"){

                this.navCtrl.push(CardlayoutPage);
                this.http.get('http://123.231.253.228/atis/pages/api/api/cardPage/cardPage.php?id='+val)

              }else if(obj.layout === "maps"){

                this.appCtrl.getRootNav().setRoot(MapslayoutPage);

              }else if(obj.layout === "list_item"){

                this.navCtrl.push(ListlayoutPage);

              }else if(obj.layout === "scaner_qr"){

                this.navCtrl.push(ScanerqrlayoutPage);

              }else if(obj.layout === "scaner_barkode"){

                this.navCtrl.push(ScanerlayoutPage);

              }else if(obj.layout === "data_card"){

                this.navCtrl.push(CarddataPage);

              }else{
                this.presentToast("Page Tidak Dikenali!");
                this.navCtrl.push(HomePage);
              }
           
            
            console.log(obj.layout);
            console.log(obj.nama);
          },err => {
           
            console.log(err);
          }
        );
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




}
