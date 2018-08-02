import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { CarddataPage } from '../carddata/carddata';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
  data : string;
  dataGet : string;
  dataSelect:any = {};
  datas:any = {};
  constructor(public GlobalProvider:GlobalProvider,public platform: Platform, public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.dataSelect.kondisiBarang = '';
    this.dataSelect.thnPerolehan = '';
    this.dataSelect.luasTanah = '';
    this.dataSelect.harga = '';
    this.datas.kodeBarang = '';
    this.datas.namaBarang = '';
    
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });
  }

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
    this.navCtrl.push(CarddataPage);
   }
  ionViewDidLoad(){

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
      this.http.get(this.GlobalProvider.url+'atis/pages/api/api/search/sorting.php?id='+val)
      .map(result => result.json())
      .subscribe(data => {
        this.data = data.result;
        console.log(data.result);

      },err => {
        console.log(err);
      }
    );
      loader.dismiss();
    });
  });
}

kondisi(get,id){
  this.dataGet = '&colums='+ get +'&aksi='+id;
  this.navCtrl.push(CarddataPage,{
    sort:this.dataGet
  });
  console.log(get + ".kondisi");
}

tertinggi(get){
  this.dataGet = '&colums='+ get +'&aksi=DESC';
  this.navCtrl.push(CarddataPage,{
    sort:this.dataGet
  });
  console.log(get + ".tertinggi");
}


terendah(get){

  this.dataGet = '&colums='+ get +'&aksi=ASC';
  this.navCtrl.push(CarddataPage,{
    sort:this.dataGet
  });
  console.log(get + ".terendah");
}

submit() {

  this.dataGet = '&orderKondisiBarang='+ this.dataSelect.kondisiBarang+'&orderThnPerolehan='+ this.dataSelect.thnPerolehan+'&orderLuasTanah='+ this.dataSelect.luasTanah+'&orderHarga='+ this.dataSelect.harga+'&orderKodeBarang='+ this.datas.kodeBarang+'&orderNamaBarang='+ this.datas.namaBarang;

  this.navCtrl.push(CarddataPage,{
    sort:this.dataGet
  });
}


}
