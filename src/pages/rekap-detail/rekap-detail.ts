import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Nav,App  } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
// import { CarddataPage } from '../carddata/carddata';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the RekapDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rekap-detail',
  templateUrl: 'rekap-detail.html',
})
export class RekapDetailPage {
  @ViewChild(Nav) nav: Nav;
    data : string;
    f : string;
    g : string;
    h : string;
    i : string;
    j : string;
    nama : string;
    skpd : string;
    skpdRekap : string;
    skpdOperator :string;
  constructor(public GlobalProvider:GlobalProvider,public appCtrl: App,public storage: Storage,public loadingCtrl: LoadingController, public http: Http,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.GlobalProvider.url=localStorage.getItem("server");
    this.f = navParams.get('f');
    this.g = navParams.get('g');
    this.h = navParams.get('h');
    this.i = navParams.get('i');
    this.j = navParams.get('j');
    this.nama = navParams.get('nama');
    this.skpd = navParams.get('skpd');
console.log(this.nama+'kntlls');
    var SkpdOperator = localStorage.getItem("skpdOperator");
    var SkpdOperatorr = 'kntl'+SkpdOperator;
    if(SkpdOperatorr != 'kntlundefined'){
      var mystr = SkpdOperator;
      var myarr = mystr.split(".");
      if(myarr[0] === undefined){
        myarr[0] ='';
      }
      if(myarr[1] === undefined){
        myarr[1] ='';
      }
      if(myarr[2] === undefined){
        myarr[2] ='';
      }
      if(myarr[3] === undefined){
        myarr[3] ='';
      }
      if(myarr[4] === undefined){
        myarr[4] ='';
      }


      this.skpd = "";
      this.skpdOperator = '&c1='+myarr[0]+'&c='+myarr[1]+'&d='+myarr[2]+'&e='+myarr[3]+'&e1='+myarr[4];
    }

    if(localStorage.getItem("skpdSession")  != undefined){
      var mystrs = localStorage.getItem("skpdSession");
      var myarrs = mystrs.split(".");

      if(myarrs[0] === '00'){
        myarrs[0] ='';
      }
      if(myarrs[1] === '00'){
        myarrs[1] ='';
      }
      if(myarrs[2] === '00'){
        myarrs[2] ='';
      }
      if(myarrs[3] === '00'){
        myarrs[3] ='';
      }
      if(myarrs[4] === '000'){
        myarrs[4] ='';
      }

      this.skpdOperator = '&c1='+myarrs[0]+'&c='+myarrs[1]+'&d='+myarrs[2]+'&e='+myarrs[3]+'&e1='+myarrs[4];
    }
  }
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading....',
      duration: 8000,
      dismissOnPageChange: true
    }).present();
  }
    ionViewDidLoad(){


      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });


      loader.present().then(() => {
        this.http.get(this.GlobalProvider.url+'pages/api/api/rekap/detail.php?'+"&f="+this.f+"&g="+this.g+"&h="+this.h+"&i="+this.i+"&j="+this.j+"&nm_barang="+this.nama+this.skpd+this.skpdOperator)
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
  dismiss() {
    this.viewCtrl.dismiss();
  }

  barang(){
    this.viewCtrl.dismiss();
    if(this.g == undefined && this.h == undefined && this.i == undefined && this.j == undefined){
        this.skpdRekap = this.f;
    }else if(this.g != undefined && this.h == undefined && this.i == undefined && this.j == undefined){
        this.skpdRekap = this.f+'.'+this.g;
    }else if(this.g != undefined && this.h != undefined && this.i == undefined && this.j == undefined){
      this.skpdRekap = this.f+'.'+this.g+'.'+this.h;
    }else if(this.g != undefined && this.h != undefined && this.i != undefined && this.j == undefined){
      this.skpdRekap = this.f+'.'+this.g+'.'+this.h+'.'+this.i;
    }else if(this.g != undefined && this.h != undefined && this.i != undefined && this.j != undefined){
      this.skpdRekap = this.f+'.'+this.g+'.'+this.h+'.'+this.i+'.'+this.j;
    }else if(this.g != undefined && this.h != undefined && this.i != undefined && this.j != undefined){
      this.skpdRekap = '';
    }

    
    if(this.f === '01'){
      

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '95');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });
      this.appCtrl.getRootNav().setRoot('CarddataPage', {
        kodeBarangRekap: this.skpdRekap,
        skpd : this.skpd,
  
      });

      
    }else if(this.f === '02'){
        
  
        this.storage.ready().then(() => {
          this.storage.set('pageSession', '87');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

        this.appCtrl.getRootNav().setRoot('CarddataPage', {
          kodeBarangRekap: this.skpdRekap,
          skpd : this.skpd,
    
        });
  
        
    }else if(this.f === '03'){
        

        this.storage.ready().then(() => {
          this.storage.set('pageSession', '88');
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

        this.appCtrl.getRootNav().setRoot('CarddataPage', {
          kodeBarangRekap: this.skpdRekap,
          skpd : this.skpd,
    
        });

        
    }else if(this.f === '04'){
      

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '89');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.appCtrl.getRootNav().setRoot('CarddataPage', {
        kodeBarangRekap:this.skpdRekap,
        skpd : this.skpd,
  
      });

      
    }else if(this.f === '05'){
      

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '90');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.appCtrl.getRootNav().setRoot('CarddataPage', {
        kodeBarangRekap: this.skpdRekap,
        skpd : this.skpd,
  
      });

      
    }else if(this.f === '06'){
      

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '91');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.appCtrl.getRootNav().setRoot('CarddataPage', {
        kodeBarangRekap: this.skpdRekap,
        skpd : this.skpd,
  
      });

      
    }else if(this.f === '07'){
      

      this.storage.ready().then(() => {
        this.storage.set('pageSession', '92');
      });
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      });

      this.appCtrl.getRootNav().setRoot('CarddataPage', {
        kodeBarangRekap: this.skpdRekap,
        skpd : this.skpd,
  
      });
      
    }else{

    }


    
  }
}
