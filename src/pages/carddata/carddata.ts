import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,App, Platform } from 'ionic-angular';
import { AllPage } from '../all/all';
import { Nav,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SearchPage } from '../search/search';
import { SortPage } from '../sort/sort';
import { GlobalProvider } from '../../providers/global/global';

import { PhotoViewer } from '@ionic-native/photo-viewer';
import { KibAPage } from '../kib-a/kib-a';
import { KibBPage } from '../kib-b/kib-b';
import { KibCPage } from '../kib-c/kib-c';
import { KibDPage } from '../kib-d/kib-d';
import { KibEPage } from '../kib-e/kib-e';
import { KibFPage } from '../kib-f/kib-f';
import { KibGPage } from '../kib-g/kib-g';
import { HomePage } from '../home/home';
import { ActionSheetController } from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import { PopoverHomePage } from '../popover-home/popover-home';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
@IonicPage()
@Component({
  selector: 'page-carddata',
  templateUrl: 'carddata.html',
})
export class CarddataPage {
  @ViewChild(Nav) nav: Nav;
  users = [];
  pages = 0;
  maximumPages = 0;
  public photos : any;
  public base64Image : string;

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  data : string;
  myData : string;
  dataGalery : string;
  dataNamaResult : string;
  dataCode :any = {};
  dataNama :any = {};
  searchS : string;
  sortS : string;
  skpd : string;
  kodeBarangRekap : string;
  urlService: string;
  animateClass:any;
  constructor(public GlobalProvider:GlobalProvider,public popoverCtrl: PopoverController,public menuCtrl: MenuController,public actionSheetCtrl: ActionSheetController,private photoViewer: PhotoViewer,public platform: Platform,private camera : Camera,private toastCtrl: ToastController,public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.http = http;
    this.animateClass = { 'zoom-in': true };
    this.dataCode.response = '';
    this.searchS = navParams.get('search');
    this.sortS = navParams.get('sort');
    this.skpd = navParams.get('skpd');
    this.kodeBarangRekap = navParams.get('kodeBarangRekap');

    this.urlService = this.GlobalProvider.url;

    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });


      
  }

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
    // this.navCtrl.push(HomePage);
    this.appCtrl.getRootNav().setRoot(HomePage);
    this.menuCtrl.close();
   }

   doRefresh(refresher) {
    console.log('Started', refresher);
    setTimeout(() => {
        console.log('Async operation has ended');
        this.navCtrl.push(CarddataPage);
        refresher.complete();
    }, 3000);

}

   openSideMenu() {
    this.menuCtrl.enable(true)
     this.menuCtrl.toggle();    
 }
 
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
  
  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverHomePage);
    popover.present({
      ev: myEvent
    });
  }

  loadImageGallery(){
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {
      this.storage.get('pageSession').then((val) => {
      this.http.get(this.GlobalProvider.url+'atis/pages/api/api/galery/galery2.php?id='+val)
      .map(result => result.json())
      .subscribe(dataGalery => {
        this.dataGalery = dataGalery.result;
        console.log(dataGalery.result);
        loader.dismiss();
      },err => {
        console.log(err);
      }
    );

    });
  });
  }

  ionViewDidLoad(){


    // let loader = this.loadingCtrl.create({
    //   content: 'Load Data...',
    // });
  

    //   loader.present().then(() => {
       
    //     setTimeout(() => {
    //       loader.dismiss();
    //     }, 5000);
        this.loadUser();
    //   });
   
    // console.log("hime hime " + this.searchS);
    // this.platform.ready().then(() => { 
    //   this.DataServiceProvider.loadData();
    //   this.users =  this.DataServiceProvider.users;
    //   this.dataGalery = this.DataServiceProvider.dataGalery;
    //   this.data = this.DataServiceProvider.data;
    //   console.log("dasas"+this.DataServiceProvider.users)
    // });

  }

  hapusImage(url,id){
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });
    var link = this.GlobalProvider.url+'atis/pages/api/api/hapusGambar/hapusGambar.php';
    var myData = JSON.stringify({gambar:  url, id: id });
    // this.loadImageGallery();

    loader.present().then(() => {
    this.http.post(link, myData)
    .subscribe(data => {

       var obj = JSON.parse(data["_body"]);
      if(obj.id === "1"){
        this.presentToast("Berhasil Hapus Gambar!");
        // this.loadImageGallery();
        this.loadImageGallery();
      }else{
        this.presentToast("Gagal Hapus Gambar");
      }
      loader.dismiss();
    }, error => {
        console.log("Oooops!");
    });
  });
  }
  
  viewImage(url){
    this.photoViewer.show(this.GlobalProvider.url+'atis/pages/api/api/images/Colored/'+url);
    console.log(this.GlobalProvider.url+'atis/pages/api/api/images/Colored/'+url);
  }

  action(url,id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opsi ',
      buttons: [
        {
          icon: !this.platform.is('md') ? 'eye' : null,
          text: 'Lihat Image',
          role: 'destructive',
          handler: () => {
            this.viewImage(url);
          }
        },{
          icon: !this.platform.is('md') ? 'clipboard' : null,
          text: 'Hapus Image',
          handler: () => {
            this.hapusImage(url,id);
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


  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
 }

  takePhoto(id) {
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });
    const options : CameraOptions = {
      quality: 40, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    // this.presentLoading();


    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        var hasil = this.base64Image;

        var link = this.GlobalProvider.url+'atis/pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        // this.loadUser('hilih');
        // this.loadImageGallery();
        loader.present().then(() => {
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            // this.loadUser('hilih');
            this.loadImageGallery();
            this.loadImageGallery();
            console.log("hime hime" + obj.hasil);
          }else{
            this.presentToast("Gagal Upload");
            
          }
          loader.dismiss();
        }, error => {
            console.log("Oooops!");
        });

      }, (err) => {
        console.log(err);
      });
    });
  }

  takePhotoGalery(id) {
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });
    const options : CameraOptions = {
      quality: 40, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    // this.presentLoading();
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        var hasil = this.base64Image;

        var link = this.GlobalProvider.url+'atis/pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        // this.loadUser('hilih');
        // this.loadImageGallery();
        loader.present().then(() => {
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            // this.loadUser('hilih');
            this.loadImageGallery();
            this.loadImageGallery();
            console.log("hime hime" + obj.hasil);
          }else{
            this.presentToast("Gagal Upload");
          }
          loader.dismiss();
        }, error => {
            console.log("Oooops!");
        });

      }, (err) => {
        console.log(err);
      });
    });
  }


  loadUser(infiniteScroll?){
if(infiniteScroll === 'hilih'){
  console.log('Kontoru deska');
  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });

    loader.present().then(() => {
    this.storage.get('pageSession').then((val) => {
    console.log('Kamu Memilih Page', val);
    var pages = 0;
    var dataSearch = this.searchS;

    if(dataSearch === undefined)
    {
      dataSearch = "";
    }else{
      dataSearch = this.searchS;
    }

    var dataSort = this.sortS;

    if(dataSort === undefined)
    {
      dataSort = "";
    }else{
      dataSort = this.sortS;
    }
    this.http.get(this.GlobalProvider.url+'atis/pages/api/api/cardData/cardData.php?id='+val+'&skpdSession'+localStorage.getItem("skpdSession")+'&skpd='+localStorage.getItem("skpdOperator")+'&skpdRekap='+this.skpd+'&kodeBarangRekap='+this.kodeBarangRekap+'&page='+pages+dataSort+dataSearch)
    .map(result => result.json())
    .subscribe(data => {


      this.data = data.result;

      this.users = data.result;

   
      
      loader.dismiss();
    },err => {
      console.log(err);
    }

  );

});

});

this.storage.get('pageSession').then((val) => {
  console.log('Kamu Memilih Page', val);
  var pages = 0;
  var dataSearch = this.searchS;

  if(dataSearch === undefined)
  {
    dataSearch = "";
  }else{
    dataSearch = this.searchS;
  }

  var dataSort = this.sortS;

  if(dataSort === undefined)
  {
    dataSort = "";
  }else{
    dataSort = this.sortS;
  }
  this.presentLoading();
  this.http.get(this.GlobalProvider.url+'atis/pages/api/api/galery/galery2.php?id='+val+'&skpdSession'+localStorage.getItem("skpdSession")+'&skpd='+localStorage.getItem("skpdOperator")+'&skpdRekap='+this.skpd+'&kodeBarangRekap='+this.kodeBarangRekap+'&page='+pages+dataSort+dataSearch)
  .map(result => result.json())
  .subscribe(dataGalery => {
    this.dataGalery = dataGalery.result;
    console.log(dataGalery.result);

  },err => {
    console.log(err);
  }

);
});
}else{
  let loader = this.loadingCtrl.create({
    content: 'Load Data...',
  });

    loader.present().then(() => {
    this.storage.get('pageSession').then((val) => {
    console.log('Kamu Memilih Page', val);
    // var pages = this.pages;

    var dataSearch = this.searchS;

    if(dataSearch === undefined)
    {
      dataSearch = "";
    }else{
      dataSearch = this.searchS;
    }

    var dataSort = this.sortS;

    if(dataSort === undefined)
    {
      dataSort = "";
    }else{
      dataSort = this.sortS;
    }

    this.http.get(this.GlobalProvider.url+'atis/pages/api/api/cardData/cardData.php?id='+val+'&skpdSession'+localStorage.getItem("skpdSession")+'&skpd='+localStorage.getItem("skpdOperator")+'&skpdRekap='+this.skpd+'&kodeBarangRekap='+this.kodeBarangRekap+'&page='+this.pages+dataSort+dataSearch)
    .map(result => result.json())
    .subscribe(data => {


      this.data = data.result;

      this.users = this.users.concat(data['result']);
     
      if (infiniteScroll) {
        infiniteScroll.complete();
        console.log(data.result);
      }

   
      loader.dismiss();

    },err => {
      console.log(err);
    }

  );

});

});

this.storage.get('pageSession').then((val) => {
  console.log('Kamu Memilih Page', val);

  // var pages = this.pages;

  var dataSearch = this.searchS;

  if(dataSearch === undefined)
  {
    dataSearch = "";
  }else{
    dataSearch = this.searchS;
  }

  var dataSort = this.sortS;

  if(dataSort === undefined)
  {
    dataSort = "";
  }else{
    dataSort = this.sortS;
  }


  // this.http.get(this.GlobalProvider.url+'atis/pages/api/api/galery/galery2.php?id='+val+'&page='+pages+dataSort+dataSearch)
  this.http.get(this.GlobalProvider.url+'atis/pages/api/api/galery/galery2.php?id='+val+dataSort+dataSearch)
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


  UploadImage(id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Foto',
      buttons: [
        {
          icon: !this.platform.is('md') ? 'camera' : null,
          text: 'Ambil Foto Sekarang',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.takePhoto(id);
          }
        },{
          icon: !this.platform.is('md') ? 'images' : null,
          text: 'Ambil Foto di Gallery',
          handler: () => {
            console.log('Archive clicked');
            this.takePhotoGalery(id);
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
  
  

  page(id) {
    var link = this.GlobalProvider.url+'atis/pages/api/api/menu/pageMenu.php';

    this.dataCode.id = id;
    var myData = JSON.stringify({
      id: this.dataCode.id
    });

    this.http.post(link, myData)
    .subscribe(dataCode => {
       //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      var obj = JSON.parse(dataCode["_body"]);
      if(obj.id === "1"){
        this.navCtrl.push(AllPage);
        this.storage.ready().then(() => {
          this.storage.set('pageSession', obj.pageSession);
        });
        this.storage.get('pageSession').then((val) => {
          console.log('Kamu Memilih Page', val);
        });

      }else{
        this.presentToast("Page Tidak Ada!");

      }

    }, error => {
        console.log("Oooops!");
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



  // home(){
  //   this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  // }

  home(){
    this.appCtrl.getRootNav().setRoot(HomePage);
   }

  search(){
    this.navCtrl.push(SearchPage);
  }

  sort(){
    this.navCtrl.push(SortPage);
  }

  view(table,id){
  
    if(table == 'view_kib_a'){
      
        this.navCtrl.push(KibAPage, {
          plu: id
        });

    }else if(table == 'view_kib_b'){
      
        this.navCtrl.push(KibBPage, {
          plu: id
        });

    }else if(table == 'view_kib_c'){
    
        this.navCtrl.push(KibCPage, {
          plu: id
        });

    }else if(table == 'view_kib_d'){
    
        this.navCtrl.push(KibDPage, {
          plu: id
        });

    }else if(table == 'view_kib_e'){
    
        this.navCtrl.push(KibEPage, {
          plu: id
        });

    }else if(table == 'view_kib_f'){
      
        this.navCtrl.push(KibFPage, {
          plu: id
        });

    }else if(table == 'view_kib_g'){
      
        this.navCtrl.push(KibGPage, {
          plu: id
        });

    }else{
      
      console.log("None");


    }

  }

  // loadUsers(infiniteScroll?) {
  //   this.http.get('https://randomuser.me/api/?results=20&page='+this.pages)
  //   .subscribe(res => {
  //     this.users = this.users.concat(res['results']);
  //     if (infiniteScroll) {
  //       infiniteScroll.complete();
  //     }
  //   })
  // }

  loadMore(jumlah, infiniteScroll) {
    this.pages++;
    var max = jumlah + 1;
    console.log(this.pages + "===" + max);

    if (this.pages === max) {
      infiniteScroll.enable(false);
    }else{
      this.loadUser(infiniteScroll);
    }
  }

   refresh(){
    this.ionViewDidLoad();
   }

}
