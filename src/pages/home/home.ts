import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
// import { AllPage } from './../all/all';
import { Nav,LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { PopoverController} from 'ionic-angular';
// import { PopoverHomePage } from '../popover-home/popover-home';
import { GlobalProvider } from '../../providers/global/global';
// import { ScanerlayoutPage } from '../scanerlayout/scanerlayout';
// import { ScanerqrlayoutPage } from '../scanerqrlayout/scanerqrlayout';
// import { CarddataPage } from '../carddata/carddata';
// import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
// import { SensusPage } from '../sensus/sensus';
// import { RekapPage } from '../rekap/rekap';

import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public counter=0;

  @ViewChild(Nav) nav: Nav;
  data : string;
  dataBanner : string;
  dataCode :any = {};
  url :string;
  urlService:string;
  animateClass:any;
  constructor(public alertCtrl: AlertController,public GlobalProvider:GlobalProvider,statusBar: StatusBar,public popoverCtrl: PopoverController,public splashScreens: SplashScreen,public platform: Platform, public loadingCtrl: LoadingController,private storage: Storage,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.dataCode.response = '';
    this.animateClass = { 'zoom-in': true };
    this.http = http;
    this.urlService = localStorage.getItem("server");
    this.GlobalProvider.url=localStorage.getItem("server");
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreens.hide();
 
      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.exitToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          // console.log("exitapp");
          platform.exitApp();
        }
      }, 0)
    });


  }

  doRefresh(refresher) {
    console.log('Started', refresher);
    setTimeout(() => {
        console.log('Async operation has ended');
        this.navCtrl.push('HomePage');
        refresher.complete();
    }, 3000);

}

  Sensus(){
    this.appCtrl.getRootNav().setRoot('SensusPage');
  }

  Rekap(){
    this.navCtrl.push('RekapPage');
  }
  exitToast() {
    let toast = this.toastCtrl.create({
      message: "Tap untuk keluar",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverHomePage');
    popover.present({
      ev: myEvent
    });
  }

  myHandlerFunction(){
     this.platform.exitApp();
   }

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
            this.bannerLoad();
            this.http.get(this.GlobalProvider.url+'pages/api/api/menu/dataMenu.php')
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

      bannerLoad(){

        let loader = this.loadingCtrl.create({
          content: 'Load Data...',
        });

        loader.present().then(() => {
          this.http.get(this.GlobalProvider.url+'pages/api/api/banner/banner.php')
          .map(result => result.json())
          .subscribe(dataBanner => {
            this.dataBanner = dataBanner.result;
            console.log(dataBanner.result);

          },err => {
            console.log(err);
          }
        );
          loader.dismiss();
        });

    }


      // loadUser(){
      //     this.presentLoading();
      //     this.http.get('http://123.231.253.228/pages/api/api/menu/dataMenu.php')
      //     .map(result => result.json())
      //     .subscribe(data => {
      //       this.data = data.result;
      //       console.log(data.result);
      //
      //     },err => {
      //       console.log(err);
      //     }
      //   );
      // }

    //  page(id) {
    //     this.storage.ready().then(() => {
    //       this.storage.set('backPage', 'back2');
    //     });

    //     var link = this.GlobalProvider.url+'pages/api/api/menu/pageMenu.php';

    //     this.dataCode.id = id;
    //     var myData = JSON.stringify({
    //       id: this.dataCode.id
    //     });

    //     this.http.post(link, myData)
    //     .subscribe(dataCode => {
    //        //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    //       var obj = JSON.parse(dataCode["_body"]);
    //       if(obj.id === "1"){
    //         this.navCtrl.push(AllPage);

    //         this.storage.ready().then(() => {
    //           this.storage.set('pageSession', obj.pageSession);
    //         });
    //         this.storage.get('pageSession').then((val) => {
    //           console.log('Kamu Memilih Page', val);
    //         });

    //       }else{
    //         this.presentToast("Page Tidak Ada!");

    //       }

    //     }, error => {
    //         console.log("Oooops!");
    //     });
    // }


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
        this.presentToast("Page Tidak Ada!");
      }
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

    Logout(){
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
              localStorage.removeItem("server");
              this.appCtrl.getRootNav().setRoot('LoginPage');
            }
          }
        ]
      });
      confirm.present();
    }


}
