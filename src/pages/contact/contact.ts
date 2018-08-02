import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,App, Platform } from 'ionic-angular';
import { Nav,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HomePage } from '../home/home';
import { ActionSheetController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
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
  urlService: string;
  constructor(public GlobalProvider:GlobalProvider,public actionSheetCtrl: ActionSheetController,private photoViewer: PhotoViewer,public platform: Platform,private camera : Camera,private toastCtrl: ToastController,public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.http = http;
    this.dataCode.response = '';
    this.searchS = navParams.get('search');
    this.sortS = navParams.get('sort');
    this.urlService = this.GlobalProvider.url;
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      });
  }

  myHandlerFunction(){
    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
    this.navCtrl.push(HomePage);
   }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  ionViewDidLoad(){
    console.log("hime hime " + this.searchS);
    this.loadUser();

  }

  viewImage(url){
    this.photoViewer.show(this.GlobalProvider.url+'atis/view_img.php?photoprofil=1&fname='+url);
    console.log(this.GlobalProvider.url+'atis/view_img.php?photoprofil=1&fname='+url);
  }
  home(){
    this.appCtrl.getRootNav().setRoot(HomePage);
   }


  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
 }

  takePhoto(id) {
    const options : CameraOptions = {
      quality: 40, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.presentLoading();
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        var hasil = this.base64Image;

        var link = this.GlobalProvider.url+'atis/pages/api/api/profile/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.loadUser();
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.loadUser();
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
      quality: 40, // picture quality
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
        var hasil = this.base64Image;

        var link = this.GlobalProvider.url+'atis/atis/pages/api/api/profile/upload.php';
        var myData = JSON.stringify({gambar:  hasil, id: id });
        this.loadUser();
        this.http.post(link, myData)
        .subscribe(data => {

           var obj = JSON.parse(data["_body"]);
          if(obj.id === "1"){
            this.presentToast("Berhasil Upload!");
            this.loadUser();
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
        var username = localStorage.getItem("username");
        this.http.get(this.GlobalProvider.url+'atis/pages/api/api/profile/profile.php?id='+username)
        .map(result => result.json())
        .subscribe(data => {
          this.data = data.result;
          console.log(data.result);
          
        },err => {
          console.log(err);
        }
      
      );
    });

      loader.dismiss();
    });



  }

  UploadImage(id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ubah Foto Profile',
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
