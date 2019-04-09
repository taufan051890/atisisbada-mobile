import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Rekap3Page } from '../rekap3/rekap3';
// import { RekapDetailPage } from '../rekap-detail/rekap-detail';
import { ModalController } from 'ionic-angular';
// import { CariSkpdPage } from '../cari-skpd/cari-skpd';
import { PopoverController} from 'ionic-angular';
// import { PopoverHomePage } from '../popover-home/popover-home';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rekap2',
  templateUrl: 'rekap2.html',
})
export class Rekap2Page {
  data : string;
  f : string;
  search :string;
  skpd : string;
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

  status :string;
  nmSKPD: string;
  shownGroup : string;
  shownGroup1 : string;
  animateClass:any;
  constructor(public GlobalProvider:GlobalProvider,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public loadingCtrl: LoadingController, public http: Http,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    this.f = navParams.get('f');
    this.animateClass = { 'fade-in-right-item': true };
    this.skpd = navParams.get('skpd');
    this.c1nama = navParams.get('c1nama');
    this.cnama= navParams.get('cnama');
    this.dnama = navParams.get('dnama');
    this.enama = navParams.get('enama');
    this.e1nama = navParams.get('e1nama');
    this.GlobalProvider.url=localStorage.getItem("server");
        
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());

        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl'+SkpdOperator;
        if(SkpdOperatorr != 'kntlundefined'){
        var mystr = SkpdOperator;
        var myarr = mystr.split(".");
        this.search = '&c1='+myarr[0]+'&c='+myarr[1]+'&d='+myarr[2]+'&e='+myarr[3]+'&e1='+myarr[4];

        this.http.get(this.GlobalProvider.url+'pages/api/api/rekap/nmSKPD.php?'+this.search)
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

      });
  }

  myHandlerFunction(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
   }



  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading....',
      duration: 6000,
      dismissOnPageChange: true
    }).present();
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

  cariSkpd(){
    const modal = this.modalCtrl.create('CariSkpdPage');
    modal.present();
  }

  ionViewDidLoad(){

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {
      this.http.get(this.GlobalProvider.url+'pages/api/api/rekap/rekap.php?'+"&f="+this.f)
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

openPopover(myEvent) {
  let popover = this.popoverCtrl.create('PopoverHomePage');
  popover.present({
    ev: myEvent
  });
}
  action(nama,f,g) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opsi '+nama,
      buttons: [
        {
          icon: !this.platform.is('md') ? 'eye' : null,
          text: 'Lihat Selanjutnya',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push('Rekap3Page', {
              f: f,
              g: g,
              skpd:this.skpd,
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
            const modal = this.modalCtrl.create('RekapDetailPage', {
              f: f,
              g: g,
              skpd: this.skpd,
              nama:nama,

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
