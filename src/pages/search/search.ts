import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { LoadingController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
// import { CarddataPage } from '../carddata/carddata';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public photos : any;
  public base64Image : string;
  public skpdOperator : string;
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  search : string;
  data : string;
  dataKota : string;
  dataUrusan : string;
  dataBidang : string;
  dataSKPD: string;
  dataUnit : string;
  dataSubUnit : string;
  dataKec: string;
  dataGalery : string;
  dataNamaResult : string;
  dataCode :any = {};
  dataNama :any = {};
  datas:any = {};
  dataSelect:any = {};
  hargaMulai:string;
  hargaEnd:string;
  constructor(public GlobalProvider:GlobalProvider,public appCtrl: App, public platform: Platform,private camera : Camera,private toastCtrl: ToastController,public http: Http,public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public loadingCtrl: LoadingController) {

    this.GlobalProvider.url=localStorage.getItem("server");
   
    this.datas.field1 = '';
    this.datas.field2 = '';
    this.datas.field3 = '';
    this.datas.field4 = '';
    this.datas.field5 = '';
    this.datas.field6 = '';
    this.datas.field7 = '';
    this.datas.field8 = '';
    this.datas.field9 = '';
    this.datas.field10 = '';
    this.datas.field11 = '';
    this.datas.field12 = '';
    this.datas.field13 = '';
    this.datas.luasDari = '';
    this.datas.luasSampai = '';
    this.datas.hargaDari = '';
    this.datas.hargaSampai = '';
    this.datas.luasLantaiDari = '';
    this.datas.luasLantaiSampai = '';
    this.datas.response = '';
    this.datas.kodeBarang = '';
    this.dataCode.response = '';
    this.http = http;

    this.skpdOperator = '';
    this.dataSelect.urusan = '';
    this.dataSelect.bidang = '';
    this.dataSelect.SKPD = '';
    this.dataSelect.unit = '';
    this.dataSelect.subunit = '';
    this.dataSelect.kota = '';
    this.dataSelect.kecamatan = '';
    this.dataSelect.tipeBangunan = '';
    this.dataSelect.perolehan = '';
    this.dataSelect.perolehanUpdate ='';
    this.dataSelect.staset ='';
    this.dataSelect.sumberDana ='';
    this.dataSelect.kondisiBarang ='';
    this.dataSelect.bertingkat ='';
    this.dataSelect.beton ='';
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });

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

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
    this.navCtrl.push('CarddataPage');
   }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
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

  ionViewDidLoad(link) {
    if(link === undefined){
      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });
  
       console.log(link);
      
        loader.present().then(() => {
        this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
        this.http.get(this.GlobalProvider.url+'pages/api/api/search/search2.php?id='+val)
        .map(result => result.json())
        .subscribe(data => {
  
  
          this.data = data.result;
          console.log(data.result);
  
        },err => {
          console.log(err);
        }
  
      );
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

      this.http.get(this.GlobalProvider.url+'pages/api/api/search/urusan.php'+linkSkpd)
      .map(result => result.json())
      .subscribe(dataUrusan => {


        this.dataUrusan = dataUrusan.result;
        console.log(dataUrusan.result);

      },err => {
        console.log(err);
      }

    );
  });

  this.storage.get('pageSession').then((val) => {
    console.log('Kamu Memilih Page', val);
    this.http.get(this.GlobalProvider.url+'pages/api/api/search/kabupatenKota.php')
    .map(result => result.json())
    .subscribe(dataKota => {


      this.dataKota = dataKota.result;
      console.log(dataKota.result);
      loader.dismiss();
    },err => {
      console.log(err);
    }

  );

});


  
    });
    }else{
      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });
  
       console.log(link);
      
        loader.present().then(() => {
        this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
        this.http.get(link)
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
  
    });
    this.storage.get('pageSession').then((val) => {
      console.log('Kamu Memilih Page', val);
      this.presentLoading();
      this.http.get(this.GlobalProvider.url+'pages/api/api/galery/galery2.php?id='+val)
      .map(result => result.json())
      .subscribe(dataGalery => {
        this.dataGalery = dataGalery.result;
        console.log(dataGalery.result);
  
      },err => {
        console.log(err);
      }
  
    );
  });
    
  }


  }

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
 }


  takePhoto(id, table) {
    const options : CameraOptions = {
      quality: 40, // picture quality
      targetWidth: 600,
      targetHeight: 400,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.presentLoading();
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        var hasil = this.photos.reverse();

        var link = this.GlobalProvider.url+'pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.submit(table);
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.submit(table);
            console.log("hime hime" + obj.hasil);
          }else{
            this.presentToast("Gagal Upload");
          }

        }, error => {
            console.log("Oooops!");
        });

      }, (err) => {
        console.log(err);
      });
  }

  takePhotoGalery(id, table) {
    const options : CameraOptions = {
      quality: 40, // picture quality
      targetWidth: 600,
      targetHeight: 400,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.presentLoading();
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        var hasil = this.photos.reverse();

        var link = this.GlobalProvider.url+'pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.submit(table);
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.submit(table);
            console.log("hime hime" + obj.hasil);
          }else{
            this.presentToast("Gagal Upload");
          }

        }, error => {
            console.log("Oooops!");
        });

      }, (err) => {
        console.log(err);
      });  
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

    changeKec(id_kota){

    this.http.get(this.GlobalProvider.url+'pages/api/api/search/kecamatan.php?kd_kota='+this.dataSelect.kota)
    .map(result => result.json())
    .subscribe(dataKec => {


      this.dataKec = dataKec.result;
      console.log(dataKec.result);

    },err => {
      console.log(err);
    }

  );
}

  changeSKPD(c1,c){
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

  submit(table) {
    this.storage.get('pageSession').then((val) => {
    console.log('Kamu Memilih Page', val);
    var link = this.GlobalProvider.url+'pages/api/api/search/dataSearch.php?id='+ val +'&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10 +'&field11='+ this.datas.field11 +'&field12='+ this.datas.field12 +'&field13='+ this.datas.field13 +'';
    console.log(link);
    

  

   this.hargaMulai = this.datas.hargaDari;
   this.hargaEnd = this.datas.hargaSampai;
   
    if(table == 'view_kib_a'){
       this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&id_kota='+this.dataSelect.kota+'&id_kec='+this.dataSelect.kecamatan+'&luasDari='+this.datas.luasDari+'&luasSampai='+this.datas.luasSampai+'&hargaDari='+this.datas.hargaDari+'&hargaSampai='+this.datas.hargaSampai+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_b'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_c'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&id_kota='+this.dataSelect.kota+'&id_kec='+this.dataSelect.kecamatan+this.dataSelect.subunit+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&luasDari='+this.datas.luasDari+'&luasSampai='+this.datas.luasSampai+'&luasLantaiDari='+this.datas.luasLantaiDari+'&luasLantaiSampai='+this.datas.luasLantaiSampai+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&bertingkat='+this.dataSelect.bertingkat+'&beton='+this.dataSelect.beton+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_d'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&id_kota='+this.dataSelect.kota+'&id_kec='+this.dataSelect.kecamatan+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_e'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_f'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&id_kota='+this.dataSelect.kota+'&id_kec='+this.dataSelect.kecamatan+'&tipeBangunan='+this.dataSelect.tipeBangunan+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&bertingkat='+this.dataSelect.bertingkat+'&beton='+this.dataSelect.beton+'&kodeBarang='+this.datas.kodeBarang;
    }else if(table == 'view_kib_g'){
      this.search = '&field1='+ this.datas.field1 +'&field2='+ this.datas.field2 +'&field3='+ this.datas.field3 +'&field4='+ this.datas.field4 +'&field5='+ this.datas.field5 +'&field6='+ this.datas.field6 +'&field7='+ this.datas.field7 +'&field8='+ this.datas.field8 +'&field9='+ this.datas.field9 +'&field10='+ this.datas.field10+'&c1='+this.dataSelect.urusan+'&c='+this.dataSelect.bidang+'&d='+this.dataSelect.SKPD+'&e='+this.dataSelect.unit+'&e1='+this.dataSelect.subunit+'&hargaDari='+this.hargaMulai+'&hargaSampai='+this.hargaEnd+'&perolehan='+this.dataSelect.perolehan+'&staset='+this.dataSelect.staset+'&sumberDana='+this.dataSelect.sumberDana+'&kondisiBarang='+this.dataSelect.kondisiBarang+'&kodeBarang='+this.datas.kodeBarang;
    }else{
      this.search = 'none';
    }



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
    

    // this.ionViewDidLoad(link);
    this.navCtrl.push('CarddataPage', {
      search: this.search
    });
    });
}

}
