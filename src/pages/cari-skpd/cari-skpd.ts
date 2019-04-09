import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
// import { RekapPage } from '../rekap/rekap';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the CariSkpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cari-skpd',
  templateUrl: 'cari-skpd.html',
})
export class CariSkpdPage {
  public skpdOperator : string;
  dataUrusan : string;
  dataBidang : string;
  dataSKPD: string;
  dataUnit : string;
  search : string;
  dataSubUnit : string;
  nmSKPD: string;
  dataSelect:any = {};
  urusanSession:string;
  dataUrusanSession :string;
  constructor(public GlobalProvider:GlobalProvider,public appCtrl: App,private storage: Storage,public loadingCtrl: LoadingController, public http: Http,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.skpdOperator = '';
    this.dataSelect.urusan = '';
    this.dataSelect.bidang = '';
    this.dataSelect.SKPD = '';
    this.dataSelect.unit = '';
    this.dataSelect.subunit = '';

    this.GlobalProvider.url=localStorage.getItem("server");

console.log("skpdSession"+localStorage.getItem("skpdSession"));
    if(localStorage.getItem("skpdSession") != undefined){
      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });
      
      var mystr = localStorage.getItem("skpdSession");
      var myarr = mystr.split(".");
      
      var linkSkpd = "";
      var skpdOperator = localStorage.getItem("skpdOperator");
      if (skpdOperator == undefined){
         linkSkpd = "";
        console.log('no'+linkSkpd);
      }else{
         linkSkpd = "&skpd="+localStorage.getItem("skpdOperator");
        console.log(linkSkpd);
      }

        this.dataSelect.urusan = myarr[0];
        this.dataSelect.bidang = myarr[1];
        this.dataSelect.SKPD = myarr[2];
        this.dataSelect.unit = myarr[3];
        this.dataSelect.subunit = myarr[4];

        loader.present().then(() => {
          this.http.get(this.GlobalProvider.url+'pages/api/api/search/bidang.php?c1='+this.dataSelect.urusan+linkSkpd)
          .map(result => result.json())
          .subscribe(dataBidang => {
      
      
            this.dataBidang = dataBidang.result;
            console.log(dataBidang.result);
          },err => {
            console.log(err);
          });

          this.http.get(this.GlobalProvider.url+'pages/api/api/search/SKPD.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+linkSkpd)
          .map(result => result.json())
          .subscribe(dataSKPD => {
        
        
            this.dataSKPD = dataSKPD.result;
            console.log(dataSKPD.result);
          },err => {
            console.log(err);
          });

          this.http.get(this.GlobalProvider.url+'pages/api/api/search/unit.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+linkSkpd)
          .map(result => result.json())
          .subscribe(dataUnit => {
          
          
            this.dataUnit = dataUnit.result;
            console.log(dataUnit.result);
          },err => {
            console.log(err);
          });


          this.http.get(this.GlobalProvider.url+'pages/api/api/search/subunit.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+linkSkpd)
          .map(result => result.json())
          .subscribe(dataSubUnit => {
          
          
            this.dataSubUnit = dataSubUnit.result;
            console.log(dataSubUnit.result);
           loader.dismiss();
          },err => {
            console.log(err);
          });
          });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CariSkpdPage');
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });
    this.storage.get('pageSession').then((val) => {
      console.log('Kamu Memilih Page', val);
       this.skpdOperator = localStorage.getItem("skpdOperator");
      var linkSkpd = "";
      if (this.skpdOperator == undefined){
         linkSkpd = "";
        console.log('no'+linkSkpd);
      }else{
         linkSkpd = "?skpd="+localStorage.getItem("skpdOperator");
        console.log(linkSkpd);
      }
      

      loader.present().then(() => {
      this.http.get(this.GlobalProvider.url+'pages/api/api/search/urusan.php'+linkSkpd)
      .map(result => result.json())
      .subscribe(dataUrusan => {


        this.dataUrusan = dataUrusan.result;
        console.log(dataUrusan.result);
        loader.dismiss();
      },err => {
        console.log(err);
      }

    );
  });
});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  

  changeBidang(){
      this.dataSelect.bidang = '';
      this.dataSelect.SKPD = '';
      this.dataSelect.unit = '';
      this.dataSelect.subunit = '';

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });
    var linkSkpd = "";
    var skpdOperator = localStorage.getItem("skpdOperator");
    if (skpdOperator == undefined){
       linkSkpd = "";
      console.log('no'+linkSkpd);
    }else{
       linkSkpd = "&skpd="+localStorage.getItem("skpdOperator");
      console.log(linkSkpd);
    }
    loader.present().then(() => {
    this.http.get(this.GlobalProvider.url+'pages/api/api/search/bidang.php?c1='+this.dataSelect.urusan+linkSkpd)
    .map(result => result.json())
    .subscribe(dataBidang => {


      this.dataBidang = dataBidang.result;
      console.log(dataBidang.result);
    loader.dismiss();
    },err => {
      console.log(err);
    });
  });
}

changeSKPD(){
    this.dataSelect.SKPD = '';
    this.dataSelect.unit = '';
    this.dataSelect.subunit = '';

  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });
  var skpdOperator = localStorage.getItem("skpdOperator");
  var linkSkpd = "";
  if (skpdOperator == undefined){
     linkSkpd = "";
    console.log('no'+linkSkpd);
  }else{
     linkSkpd = "&skpd="+localStorage.getItem("skpdOperator");
    console.log(linkSkpd);
  }
  loader.present().then(() => {
  this.http.get(this.GlobalProvider.url+'pages/api/api/search/SKPD.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+linkSkpd)
  .map(result => result.json())
  .subscribe(dataSKPD => {


    this.dataSKPD = dataSKPD.result;
    console.log(dataSKPD.result);
loader.dismiss();
  },err => {
    console.log(err);
  });
});
}

changeUnit(){
    this.dataSelect.unit = '';
    this.dataSelect.subunit = '';

  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });
var linkSkpd = "";
var skpdOperator = localStorage.getItem("skpdOperator");
if (skpdOperator == undefined){
    linkSkpd = "";
  console.log('no'+linkSkpd);
}else{
    linkSkpd = "&skpd="+localStorage.getItem("skpdOperator");
  console.log(linkSkpd);
}
loader.present().then(() => {
this.http.get(this.GlobalProvider.url+'pages/api/api/search/unit.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+linkSkpd)
.map(result => result.json())
.subscribe(dataUnit => {


  this.dataUnit = dataUnit.result;
  console.log(dataUnit.result);
 loader.dismiss();
},err => {
  console.log(err);
});
});
}

SubUnit(){
    this.dataSelect.subunit = '';

  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });
var linkSkpd = "";
var skpdOperator = localStorage.getItem("skpdOperator");
if (skpdOperator == undefined){
   linkSkpd = "";
  console.log('no'+linkSkpd);
}else{
   linkSkpd = "&skpd="+localStorage.getItem("skpdOperator");
  console.log(linkSkpd);
}

console.log('sub unit');
loader.present().then(() => {
this.http.get(this.GlobalProvider.url+'pages/api/api/search/subunit.php?c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+linkSkpd)
.map(result => result.json())
.subscribe(dataSubUnit => {


  this.dataSubUnit = dataSubUnit.result;
  console.log(dataSubUnit.result);
 loader.dismiss();
},err => {
  console.log(err);
});
});
}

submit() {
  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });

  this.search = '&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit;
  loader.present().then(() => {
  this.http.get(this.GlobalProvider.url+'pages/api/api/rekap/nmSKPD.php?'+this.search)
  .map(result => result.json())
  .subscribe(nmSKPD => {



    this.nmSKPD = nmSKPD.result;
    
    // this.navCtrl.push(RekapPage, {
    //   search: this.search,
    //   c1nama :nmSKPD.result[0].c1nama,
    //   cnama :nmSKPD.result[0].cnama,
    //   dnama :nmSKPD.result[0].dnama,
    //   enama :nmSKPD.result[0].enama,
    //   e1nama :nmSKPD.result[0].e1nama,
    //   status :nmSKPD.result[0].status,
    // });
  


      if(this.dataSelect.urusan === ''){
        this.dataSelect.urusan ="00";
      }

      if(this.dataSelect.bidang === ''){
        this.dataSelect.bidang ="00";
      }

      if(this.dataSelect.SKPD === ''){
        this.dataSelect.SKPD ="00";
      }

      if(this.dataSelect.unit === ''){
        this.dataSelect.unit ="00";
      }

      if(this.dataSelect.subunit === ''){
        this.dataSelect.subunit ="000";
      }
      
      localStorage.setItem("skpdSession",this.dataSelect.urusan+'.'+this.dataSelect.bidang+'.'+this.dataSelect.SKPD+'.'+this.dataSelect.unit+'.'+this.dataSelect.subunit);
      console.log("SKPDnya " +localStorage.getItem("skpdSession") );
    

    this.viewCtrl.dismiss();

    this.appCtrl.getRootNav().setRoot('RekapPage', {
      search: this.search,
      c1nama :nmSKPD.result[0].c1nama,
      cnama :nmSKPD.result[0].cnama,
      dnama :nmSKPD.result[0].dnama,
      enama :nmSKPD.result[0].enama,
      e1nama :nmSKPD.result[0].e1nama,
      status :nmSKPD.result[0].status,

    });
    loader.dismiss();
    
    console.log(nmSKPD.result);

  },err => {
    console.log(err);
  }

  );

  // this.ionViewDidLoad(link);

  });
}


}
