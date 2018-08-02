import { Component } from '@angular/core';
import { IonicPage, NavController,App } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';
import { Http, Response } from '@angular/http';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ScanerlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensus',
  templateUrl: 'sensus.html',
})
export class SensusPage{ 
  data : string;
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  constructor(public GlobalProvider:GlobalProvider,public appCtrl: App,public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private storage: Storage,
    public http: Http,
    public dataService: DataServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanerlayoutPage');
    this.storage.get('pageSession').then((val) => {
      console.log('Kamu Memilih Page', val);
      this.http.get(this.GlobalProvider.url+'atis/pages/api/api/sensus/dataSensus.php?id='+val)
      .map(result => result.json())
      .subscribe(data => {
        this.data = data.result;
        console.log(data.result);

      },err => {
        console.log(err);
      }

    );
  });

  this.scan();
  }

  scan() {
    var options = {
      prompt :" "
      }
    this.barcodeScanner.scan(options).then((barcodeData) => {

      this.storage.get('pageSession').then((val) => {
        return this.http.get(this.GlobalProvider.url+'atis/pages/api/api/sensus/dataSensus.php?search='+barcodeData.text)
        .map((response:Response)=>response.json())
        .subscribe((response)=> {
          this.products = response
          this.selectedProduct = this.products.find(product => product.idbi === barcodeData.text);
          if(this.selectedProduct !== undefined) {
            this.productFound = true;
            console.log(this.selectedProduct);
          } else {
            this.selectedProduct = {};
            this.productFound = false;
            this.toast.show('Data ' + barcodeData.text + ' Tidak Ada / Tidak Diketahui', '8000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          }

          console.log(this.products);
      });
      });
      
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }


  home(){
    this.appCtrl.getRootNav().setRoot(HomePage);
  }


}
