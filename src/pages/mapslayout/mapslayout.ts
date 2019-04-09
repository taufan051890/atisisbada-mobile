import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController,NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
declare var google;
/**
 * Generated class for the MapslayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { IonicPage } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
@IonicPage()
@Component({
  selector: 'page-mapslayout',
  templateUrl: 'mapslayout.html',
})
export class MapslayoutPage {
  data : string;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  idbi : string;
  table : string;
  constructor(public GlobalProvider:GlobalProvider,private socialSharing: SocialSharing,public navCtrl: NavController , public navParams: NavParams, public geolocation: Geolocation,public loadingCtrl: LoadingController, public http: Http) {
    this.ionViewDidLoad();
    this.idbi = navParams.get('idbi');
    this.table = navParams.get('table');
    this.GlobalProvider.url=localStorage.getItem("server");
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 

    let loader = this.loadingCtrl.create({
      content: 'Load Data...',
    });

    loader.present().then(() => {

      this.http.get(this.GlobalProvider.url+'pages/api/api/KIBA/detail/data.php?id='+this.idbi+'&table='+this.table)
      .map(result => result.json())
      .subscribe(data => {
        this.data = data.result;
        console.log(data.result);



        this.geolocation.getCurrentPosition().then((position) => {
 
        //  position.coords.latitude
        //  position.coords.longitude
        //  let lat = position.coords.latitude;
        //  let lang = position.coords.longitude

          let latLng = new google.maps.LatLng(data.result[0].lat,data.result[0].lang);
     
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
          // var icons = {
          //   tanah: {
          //     icon: '../assets/imgs/pin_tanah.png'
          //   }
          // };
    
          var contentString =
          '<style>td, th{padding: 5px;}</style>'+
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h6 id="firstHeading" class="firstHeading">'+data.result[0].nm_barang+'</h6>'+
                '<div id="bodyContent">'+
                    '<table>'+
                      '<tr>'+
                        '<td>Urusan </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].urusan+'</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td>Bidang </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].bidang+'</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td>SKPD </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].skpd+'</td>'+
                      '</tr>'+
                        '<tr>'+
                        '<td>Unit </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].unit+'</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td>Sub Unit </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].subUnit+'</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td>Alamat </td>'+
                        '<td> : </td>'+
                        '<td> '+data.result[0].alamat+'</td>'+
                      '</tr>'+
                      
                    '</table>'
                '</div>'+
            '</div>';
    
           let infowindow = new google.maps.InfoWindow({
             content: contentString,
             maxWidth: 300
           });
    
          
          let marker = new google.maps.Marker({
            position: latLng,
            map: this.map ,
            title: 'Uluru (Ayers Rock)'
          });
    
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
     
        }, (err) => {
          console.log(err);
        });


      },err => {
        console.log(err);
      }
    );
      loader.dismiss();
    });

 
  }

  function(success){
      console.log(success);
  }


  // shareWA(lat,lang){
  //   var url = 'www.fb.com';
  //   var gambar = 'https://cdn0.iconfinder.com/data/icons/flat-online-2/64/gps_pin_location_map_mapquest_google_maps-512.png';

  //   this.socialSharing.shareViaWhatsApp('message', gambar, url).then(() => {
  //     console.log('success' + lat +" , "+ lang);
  //   }).catch(() => {
  //     console.log('Error' + lat +" , "+ lang);
  //   });
  // }

  shareWA(lat,lang,nama){
    var url = 'https://www.google.com/maps?q='+lat+','+lang+'&z=17';
    // var gambar = 'assets/imgs/lokasi.png';
    var judul = 'Alamat Lokasi ' + nama +'.';
    this.socialSharing.shareViaWhatsApp(judul, null, url).then(() => {
      console.log('success' + lat +" , "+ lang);
    }).catch(() => {
      console.log('Error' + lat +" , "+ lang);
    });
  }

  shareFB(lat,lang,nama){
    var url = 'https://www.google.com/maps?q='+lat+','+lang+'&z=17';
    // var gambar = 'assets/imgs/lokasi.png';
    var judul = 'Alamat Lokasi ' + nama +'.';
    this.socialSharing.shareViaFacebook(judul, null, url).then(() => {
      console.log('success' + lat +" , "+ lang);
    }).catch(() => {
      console.log('Error' + lat +" , "+ lang);
    });
  }

}
