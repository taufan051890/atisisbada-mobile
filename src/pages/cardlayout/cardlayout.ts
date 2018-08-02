import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { AllPage } from '../all/all';
import { Nav,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
@IonicPage()
@Component({
  selector: 'page-cardlayout',
  templateUrl: 'cardlayout.html',
})
export class CardlayoutPage {
  @ViewChild(Nav) nav: Nav;

  public photos : any;
  public base64Image : string;

  data : string;
  dataGalery : string;
  dataNamaResult : string;
  dataCode :any = {};
  dataNama :any = {};
  constructor(private camera : Camera,private toastCtrl: ToastController,public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.http = http;
    this.dataCode.response = '';
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  ionViewDidLoad(){
    this.loadUser();

  }



  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
 }

  takePhoto(id) {
    const options : CameraOptions = {
      quality: 50, // picture quality
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

        var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.ionViewDidLoad();
        this.ionViewDidLoad();
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
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

  takePhotoGalery(id) {
    const options : CameraOptions = {
      quality: 50, // picture quality
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

        var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.ionViewDidLoad();
        this.ionViewDidLoad();
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
            this.ionViewDidLoad();
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


  loadUser(){

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

      loader.present().then(() => {
      this.storage.get('pageSession').then((val) => {
      console.log('Kamu Memilih Page', val);
      this.http.get('http://123.231.253.228/atis/pages/api/api/cardPage/cardPage.php?id='+val)
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

  this.storage.get('pageSession').then((val) => {
    console.log('Kamu Memilih Page', val);
    this.presentLoading();
    this.http.get('http://123.231.253.228/atis/pages/api/api/galery/galery.php?id='+val)
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

  page(id) {
    var link = 'http://123.231.253.228/atis/pages/api/api/menu/pageMenu.php';

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



  home(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  }



}
