import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,App } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Rekap2Page } from '../rekap2/rekap2';
import { RekapDetailPage } from '../rekap-detail/rekap-detail';
import { ModalController } from 'ionic-angular';
import { CariSkpdPage } from '../cari-skpd/cari-skpd';
import { PopoverController} from 'ionic-angular';
import { PopoverHomePage } from '../popover-home/popover-home';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rekap',
  templateUrl: 'rekap.html',
})
export class RekapPage {
  data : string;
  search :string;
  c1nama :string;
  cnama :string;
  dnama :string;
  enama :string;
  e1nama :string;

  c1namaSKPDOperator :string;
  cnamaSKPDOperator :string;
  dnamaSKPDOperator :string;
  enamaSKPDOperator :string;
  e1namaSKPDOperator :string;

  c1namaSKPDSession:string;
  cnamaSKPDSession:string;
  dnamaSKPDSession:string;
  enamaSKPDSession:string;
  e1namaSKPDSession :string;

  status :string; 
  shownGroup : string;
  shownGroup1 : string;
  nmSKPD: string;
  animateClass: any;
  constructor(public GlobalProvider:GlobalProvider,public popoverCtrl: PopoverController,public appCtrl: App,public modalCtrl: ModalController,public loadingCtrl: LoadingController, public http: Http,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    this.animateClass = { 'fade-in-right-item': true };
    this.search = navParams.get('search');
    this.c1nama = navParams.get('c1nama');
    this.cnama= navParams.get('cnama');
    this.dnama = navParams.get('dnama');
    this.enama = navParams.get('enama');
    this.e1nama = navParams.get('e1nama');
    
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());

      var SkpdOperator = localStorage.getItem("skpdOperator");
      var SkpdOperatorr = 'kntl'+SkpdOperator;
      if(SkpdOperatorr != 'kntlundefined'){
      var mystr = SkpdOperator;
      var myarr = mystr.split(".");
      this.search = '&c1='+myarr[0]+'&c='+myarr[1]+'&d='+myarr[2]+'&e='+myarr[3]+'&e1='+myarr[4];

      this.http.get(this.GlobalProvider.url+'atis/pages/api/api/rekap/nmSKPD.php?'+this.search)
      .map(result => result.json())
      .subscribe(nmSKPD => {
        this.nmSKPD = nmSKPD.result;
        console.log(nmSKPD.result);

        this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
        this.cnamaSKPDOperator= nmSKPD.result[0].cnama;
        this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
        this.enamaSKPDOperator = nmSKPD.result[0].enama;
        this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;

      },err => {
        console.log(err);
      }
    );
  }

  if(localStorage.getItem("skpdSession") != undefined){
    var mystrs = localStorage.getItem("skpdSession");
    var myarrs = mystrs.split(".");
    this.search = '&c1='+myarrs[0]+'&c='+myarrs[1]+'&d='+myarrs[2]+'&e='+myarrs[3]+'&e1='+myarrs[4];

    this.http.get(this.GlobalProvider.url+'atis/pages/api/api/rekap/nmSKPD.php?'+this.search)
    .map(result => result.json())
    .subscribe(nmSKPD => {
      this.nmSKPD = nmSKPD.result;
      console.log(nmSKPD.result);

      this.c1nama = nmSKPD.result[0].c1nama;
      this.cnama = nmSKPD.result[0].cnama;
      this.dnama = nmSKPD.result[0].dnama;
      this.enama = nmSKPD.result[0].enama;
      this.e1nama = nmSKPD.result[0].e1nama;

    },err => {
      console.log(err);
    }
  );
}
    });

  }


  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading....',
      duration: 6000,
      dismissOnPageChange: true
    }).present();
  }

  home(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
  }


  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
    this.navCtrl.push(HomePage);
   }


  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverHomePage);
    popover.present({
      ev: myEvent
    });
  }

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




  ionViewDidLoad(){
   

      
      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });
  
      loader.present().then(() => {
        this.http.get(this.GlobalProvider.url+'atis/pages/api/api/rekap/rekap.php')
        .map(result => result.json())
        .subscribe(data => {
          this.data = data.result;
          console.log(data.result);
          console.log('kontoru'+this.c1nama);
          loader.dismiss();
        },err => {
          console.log(err);
        }
      );
      });
}

cariSkpd(){
  const modal = this.modalCtrl.create(CariSkpdPage);
  modal.present();
}

  action(nama,id) {
      var skpd;
      
      if(this.search != undefined){
        skpd = this.search;
      }else{
        skpd='';
      }

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opsi '+nama,
      buttons: [
        {
          icon: !this.platform.is('md') ? 'eye' : null,
          text: 'Lihat Selanjutnya',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(Rekap2Page, {
              f: id,
              skpd:skpd,
              c1nama:this.c1nama,
              cnama:this.cnama,
              dnama:this.dnama,
              enama:this.enama,
              e1nama:this.e1nama,
            });
            console.log('Destructive clicked');
          }
        },{
          icon: !this.platform.is('md') ? 'clipboard' : null,
          text: 'Total Harga & Jumlah Barang',
          handler: () => {

            const modal = this.modalCtrl.create(RekapDetailPage, {
              f: id,
              skpd:skpd,
              nama:nama
            });
            modal.present();
            console.log('Archive clicked');
          }
        },{
          icon: !this.platform.is('md') ? 'close' : null,
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
