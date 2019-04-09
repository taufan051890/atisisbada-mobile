import { IonicPage,ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams,App, Platform } from 'ionic-angular';
import { LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
// import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
// import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the UbahProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-ubah-profile',
  templateUrl: 'ubah-profile.html',
})
export class UbahProfilePage {
id:string;
data : string;
idUser:string;
dataValue:any = {};
nama:string;
constructor(public alertCtrl: AlertController,public viewCtrl:ViewController,public GlobalProvider:GlobalProvider,public platform: Platform,public loadingCtrl: LoadingController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.id = navParams.get('id');
    this.nama = navParams.get('nama');
    this.dataValue.passwordBaru='';
    this.dataValue.passwordBaru2='';
    this.dataValue.passwordLama='';
    this.dataValue.nama = this.nama;

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {
    
      this.storage.get('pageSession').then((val) => {
        console.log('Kamu Memilih Page', val);
        this.http.get(this.GlobalProvider.url+'pages/api/api/profile/profile.php?id='+this.id)
        .map(result => result.json())
        .subscribe(data => {
          this.data = data.result;
          this.dataValue.nama = data.result[0].nama;
          this.idUser = this.id;
          console.log(data.result);
          loader.dismiss();
        },err => {
          console.log(err);
        }
      
      );
    });


    });
  }

  Ubah(id){
    if(this.dataValue.nama=="" || this.dataValue.passwordBaru=="" || this.dataValue.passwordBaru2=="" || this.dataValue.passwordLama==""){
      let confirm = this.alertCtrl.create({
        title: 'Data Tidak Boleh Kosong',
        message: 'Lengkapi Data',
        buttons: [
          {
            text: 'Close',
            handler: () => {
              console.log('Disagree clicked');
            }
          }
        ]
      });
      confirm.present();
    }else if(this.dataValue.passwordBaru != this.dataValue.passwordBaru2){
      let confirm = this.alertCtrl.create({
        title: 'Password Tidak Sama',
        message: 'Isi Password Baru dan Konfirmasi Password Tidak Sama',
        buttons: [
          {
            text: 'Close',
            handler: () => {
              console.log('Disagree clicked');
            }
          }
        ]
      });
      confirm.present();
    }else{

      var link = this.GlobalProvider.url+'pages/api/api/profile/ubahProfile.php';
      var myData = JSON.stringify({
        nama: this.dataValue.nama,
        password: this.dataValue.passwordBaru,
        password2: this.dataValue.passwordBaru2,
        passwordLama: this.dataValue.passwordLama,
        idUser:id
      });
      let loader = this.loadingCtrl.create({
        content: 'Load Data...',
      });

      loader.present().then(() => {
      this.http.post(link, myData)
      .subscribe(data => {

         var obj = JSON.parse(data["_body"]);
        if(obj.id === "1"){

          let confirm = this.alertCtrl.create({
            title: 'Ganti Data Profile Berhasil',
            message: 'Ganti Data Profile Berhasil Selamat',
            buttons: [
              {
                text: 'OKE',
                handler: () => {
                  this.viewCtrl.dismiss();
                  this.appCtrl.getRootNav().setRoot('ContactPage');
                  console.log('Disagree clicked');
                }
              }
            ]
          });
          confirm.present();
          

        }else{
          let confirm = this.alertCtrl.create({
            title: 'Password Lama Salah',
            message: 'Isi Password Lama Dengan Benar',
            buttons: [
              {
                text: 'Close',
                handler: () => {
                  console.log('Disagree clicked');
                }
              }
            ]
          });
          confirm.present();
        }
        loader.dismiss();
      }, error => {
          console.log("Oooops!");
      });
    });

    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
