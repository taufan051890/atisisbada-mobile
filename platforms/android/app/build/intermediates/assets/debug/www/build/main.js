webpackJsonp([18],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasiclayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
var BasiclayoutPage = /** @class */ (function () {
    function BasiclayoutPage(toastCtrl, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.dataCode = {};
        this.http = http;
        this.dataCode.response = '';
    }
    BasiclayoutPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    BasiclayoutPage.prototype.ionViewDidLoad = function () {
        this.loadUser();
    };
    BasiclayoutPage.prototype.loadUser = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                _this.presentLoading();
                _this.http.get('http://123.231.253.228/atis/pages/api/api/basicPage/basicPage.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (data) {
                    _this.data = data.result;
                    console.log(data.result);
                }, function (err) {
                    console.log(err);
                });
            });
            loader.dismiss();
        });
    };
    BasiclayoutPage.prototype.page = function (id) {
        var _this = this;
        var link = 'http://123.231.253.228/atis/pages/api/api/menu/pageMenu.php';
        this.dataCode.id = id;
        var myData = JSON.stringify({
            id: this.dataCode.id
        });
        this.http.post(link, myData)
            .subscribe(function (dataCode) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(dataCode["_body"]);
            if (obj.id === "1") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_all__["a" /* AllPage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('pageSession', obj.pageSession);
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                });
            }
            else {
                _this.presentToast("Page Tidak Ada!");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    BasiclayoutPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    BasiclayoutPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], BasiclayoutPage.prototype, "nav", void 0);
    BasiclayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basiclayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\basiclayout\basiclayout.html"*/'<!--\n  Generated template for the BasiclayoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar hideBackButton>\n      <ion-title *ngFor="let itemNama of data;  let i=index">\n          <div *ngIf="i < 1">\n              {{ itemNama.namaPage }}\n          </div>\n        </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadUser()" style="color: white;">\n         <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="home()" style="color: white;">\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="basic-content" padding style=\'background-color: #c1fffb;\' >\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-4 (click)="page(item.id)" *ngFor="let item of data">\n          <ion-card style="border: 1px solid #3fa0a2;" *ngIf="item.namaPage != \'Page Tidak Ada!\'">\n\n           <!-- <form>\n            <ion-item>\n              <ion-input type="text" value="{{ item.id_menu_1}}" name="m1" [(ngModel)]="data.m1"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_2}}" name="m2" [(ngModel)]="data.m2"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_3}}" name="m3" [(ngModel)]="data.m3"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_4}}" name="m4" [(ngModel)]="data.m4"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_5}}" name="m5" [(ngModel)]="data.m5"></ion-input>\n            </ion-item>\n           </form> -->\n\n                <img src="http://123.231.253.228/atis/pages/api/api/images/Colored/{{ item.icon }}" style="width: 100%; padding: 8%;"/>\n            <ion-card-content style="border-top: 1px solid #1b9ca0;padding: 5px 4px; text-align:center;">\n              <ion-card-title style="font-size:  13px;padding:  0px 0;margin: 0px 0;">\n               {{ item.nama }}\n                </ion-card-title>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\basiclayout\basiclayout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], BasiclayoutPage);
    return BasiclayoutPage;
}());

//# sourceMappingURL=basiclayout.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardlayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
var CardlayoutPage = /** @class */ (function () {
    function CardlayoutPage(camera, toastCtrl, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.dataCode = {};
        this.dataNama = {};
        this.http = http;
        this.dataCode.response = '';
    }
    CardlayoutPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    CardlayoutPage.prototype.ionViewDidLoad = function () {
        this.loadUser();
    };
    CardlayoutPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    CardlayoutPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    CardlayoutPage.prototype.takePhoto = function (id) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.ionViewDidLoad();
            _this.ionViewDidLoad();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    CardlayoutPage.prototype.takePhotoGalery = function (id) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.ionViewDidLoad();
            _this.ionViewDidLoad();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    _this.ionViewDidLoad();
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    CardlayoutPage.prototype.loadUser = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                _this.http.get('http://123.231.253.228/atis/pages/api/api/cardPage/cardPage.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (data) {
                    _this.data = data.result;
                    console.log(data.result);
                }, function (err) {
                    console.log(err);
                });
                loader.dismiss();
            });
        });
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.presentLoading();
            _this.http.get('http://123.231.253.228/atis/pages/api/api/galery/galery.php?id=' + val)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataGalery) {
                _this.dataGalery = dataGalery.result;
                console.log(dataGalery.result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CardlayoutPage.prototype.page = function (id) {
        var _this = this;
        var link = 'http://123.231.253.228/atis/pages/api/api/menu/pageMenu.php';
        this.dataCode.id = id;
        var myData = JSON.stringify({
            id: this.dataCode.id
        });
        this.http.post(link, myData)
            .subscribe(function (dataCode) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(dataCode["_body"]);
            if (obj.id === "1") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_all__["a" /* AllPage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('pageSession', obj.pageSession);
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                });
            }
            else {
                _this.presentToast("Page Tidak Ada!");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    CardlayoutPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CardlayoutPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], CardlayoutPage.prototype, "nav", void 0);
    CardlayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardlayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\cardlayout\cardlayout.html"*/'<!--\n  Generated template for the CardlayoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n      <ion-title *ngFor="let itemNama of data;  let i=index">\n        <div *ngIf="i < 1">\n            {{ itemNama.namaPage }}\n        </div>\n      </ion-title>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="loadUser()" style="color: white;">\n           <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="home()" style="color: white;">\n          <ion-icon name="md-arrow-round-back"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n<ion-card  *ngFor="let item of data" >\n\n\n\n  <ion-slides pager *ngIf="item.namaPage != \'Page Tidak Ada!\'">\n    <div *ngFor="let itemGalery of dataGalery">\n        <ion-slide *ngIf="item.id == itemGalery.id_menu">\n            <img  src="http://123.231.253.228/atis/pages/api/api/images/Colored/{{ itemGalery.gambar }}" />\n        </ion-slide>\n     <!-- <img *ngIf="item.id != itemGalery.id_menu" src="http://taufantritama.com/api/images/Colored/Default.png"/>       -->\n    </div>\n\n\n  </ion-slides>\n\n  <ion-card-content *ngIf="item.namaPage != \'Page Tidak Ada!\'">\n    <ion-card-title>\n      {{ item.nama }}\n    </ion-card-title>\n    <p>\n      {{ item.deskripsi }}\n    </p>\n  </ion-card-content>\n\n  <ion-row no-padding *ngIf="item.namaPage != \'Page Tidak Ada!\'">\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start (click)="page(item.id)">\n        <ion-icon name=\'search\'></ion-icon>\n        View More\n      </button>\n    </ion-col>\n\n    <ion-col>\n        <button style="color: #00c2ff;" ion-button clear small color="danger" icon-start (click)="takePhotoGalery(item.id)">\n            <ion-icon ios="ios-images" md="md-images"></ion-icon>\n          Upload\n        </button>\n      </ion-col>\n\n    <ion-col>\n        <button style="color: #007aff;" ion-button clear small color="danger" icon-start (click)="takePhoto(item.id)">\n            <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n          Foto\n        </button>\n      </ion-col>\n\n  </ion-row>\n\n\n</ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\cardlayout\cardlayout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], CardlayoutPage);
    return CardlayoutPage;
}());

//# sourceMappingURL=cardlayout.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap3_rekap3__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap2Page = /** @class */ (function () {
    function Rekap2Page(GlobalProvider, popoverCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.f = navParams.get('f');
        this.animateClass = { 'fade-in-right-item': true };
        this.skpd = navParams.get('skpd');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
            var SkpdOperator = localStorage.getItem("skpdOperator");
            var SkpdOperatorr = 'kntl' + SkpdOperator;
            if (SkpdOperatorr != 'kntlundefined') {
                var mystr = SkpdOperator;
                var myarr = mystr.split(".");
                _this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + _this.search)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (nmSKPD) {
                    _this.nmSKPD = nmSKPD.result;
                    console.log(nmSKPD.result);
                    _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                    _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                    _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                    _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                    _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    }
    Rekap2Page.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    Rekap2Page.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    Rekap2Page.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    Rekap2Page.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    Rekap2Page.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    Rekap2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php?' + "&f=" + _this.f)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rekap2Page.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    Rekap2Page.prototype.action = function (nama, f, g) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rekap3_rekap3__["a" /* Rekap3Page */], {
                            f: f,
                            g: g,
                            skpd: _this.skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: f,
                            g: g,
                            skpd: _this.skpd,
                            nama: nama,
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Rekap2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap2',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap2\rekap2.html"*/'<!--\n  Generated template for the Rekap2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar hideBackButton>\n\n                <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                \n                    <ion-title>Rekap</ion-title>\n               \n                <ion-buttons end>\n                        <a ion-button icon-only (click)="openPopover($event)">\n                        <ion-icon name="more"></ion-icon>\n                    </a>\n                </ion-buttons>\n          \n            </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n        <div *ngIf="c1nama != undefined">\n                <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                <b>\n                                <h2>\n                                    SKPD	\n                                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                    style="\n                                    color: #d49624;\n                                    text-align:  right;\n                                    float:  right;\n                                    ">\n                                </ion-icon>\n                                </h2>\n                                </b>\n                                </ion-label>\n                            </ion-item>\n                            <div *ngIf="isGroupShown1(i)"> \n                            \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        URUSAN\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ c1nama }}\n                                </h4>\n                        </ion-item>\n                \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            BIDANG\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ cnama }}\n                                    </h4>\n                            </ion-item>\n                \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SKPD\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ dnama }}\n                            </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ enama }}\n                                </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SUB UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ e1nama }}\n                                </h4>\n                        </ion-item>\n                                \n                                        \n                </div>\n            </div>\n        \n            <div *ngIf="c1nama == undefined">\n                    <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                    <b>\n                                    <h2>\n                                        SKPD	\n                                        <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                        style="\n                                        color: #d49624;\n                                        text-align:  right;\n                                        float:  right;\n                                        ">\n                                    </ion-icon>\n                                    </h2>\n                                    </b>\n                                    </ion-label>\n                                </ion-item>\n                                <div *ngIf="isGroupShown1(i)"> \n                                \n                                    <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            URUSAN\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ c1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                    \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                                BIDANG\n                                            </h3></b>\n                                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                                            {{ cnamaSKPDOperator }}\n                                        </h4>\n                                </ion-item>\n                    \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SKPD\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ dnamaSKPDOperator }}\n                                </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ enamaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            SUB UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ e1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                                    \n                                            \n                    </div>\n                </div>\n        \n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-1 style="\n            padding: 2px;\n            border-top: 1px solid #1f1f1f;\n            border-left: 1px solid #1f1f1f;\n            border-bottom: 1px solid #1f1f1f;\n            background: #7eddec;\n            text-align:  center;">\n                <b><h6>No</h6></b>\n            </ion-col>\n\n            <ion-col col-11 style="\n            padding: 2px;\n            border: 1px solid #1f1f1f;\n            background: #7eddec;">\n                <b><h6>Nama Barang</h6></b>\n            </ion-col>\n\n            <!-- <ion-col col-1 style="padding: 2px">\n                <ion-buttons end>\n                    <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                    <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                    </button>\n                    \n                </ion-buttons>\n            </ion-col> -->\n        </ion-row>\n\n            <ion-row *ngFor="let item of data" [ngClass]="animateClass">\n                <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                padding: 2px;\n                border-top: 1px solid #1f1f1f;\n                border-left: 1px solid #1f1f1f;\n                border-bottom: 1px solid #1f1f1f;\n                text-align:  center;\n                background: #f3fdff;">\n                    <h6 class="kolom"> {{ item.no }}</h6>\n                </ion-col>\n\n                <ion-col col-10 *ngIf="item.no != \'no\'" style="\n                padding: 2px;\n                border-top: 1px solid #1f1f1f;\n                border-left: 1px solid #1f1f1f;\n                border-bottom: 1px solid #1f1f1f;\n                background: #f3fdff;">\n                    <h6 class="kolom">{{ item.nm_barang }}</h6>\n                </ion-col>\n\n                <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                padding: 2px;\n                border-top: 1px solid #1f1f1f;\n                border-right: 1px solid #1f1f1f;\n                border-bottom: 1px solid #1f1f1f;\n                text-align:  center;\n                background: #f3fdff;" (click)="action(item.nm_barang,item.f,item.g)">\n                <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                </ion-col>\n            </ion-row>\n\n            <ion-row *ngFor="let item of data">\n                    <ion-col col-12 style="\n                    padding: 2px;\n                    border: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;"  *ngIf="item.no == \'no\'">\n                    <h6 class="kolom">Data Tidak ada</h6>\n                    </ion-col>\n            </ion-row>\n            \n        </ion-grid>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n        <ion-fab bottom *ngIf="c1namaSKPDOperator == undefined"  style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>                    \n                    <ion-col icon-start (click)="cariSkpd()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                FILTER SKPD\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap2\rekap2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Rekap2Page);
    return Rekap2Page;
}());

//# sourceMappingURL=rekap2.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap4_rekap4__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap3Page = /** @class */ (function () {
    function Rekap3Page(GlobalProvider, popoverCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.animateClass = { 'fade-in-right-item': true };
        this.f = navParams.get('f');
        this.g = navParams.get('g');
        this.skpd = navParams.get('skpd');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl' + SkpdOperator;
        if (SkpdOperatorr != 'kntlundefined') {
            var mystr = SkpdOperator;
            var myarr = mystr.split(".");
            this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
            this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + this.search)
                .map(function (result) { return result.json(); })
                .subscribe(function (nmSKPD) {
                _this.nmSKPD = nmSKPD.result;
                console.log(nmSKPD.result);
                _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
            }, function (err) {
                console.log(err);
            });
        }
    }
    Rekap3Page.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    Rekap3Page.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    Rekap3Page.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    Rekap3Page.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    Rekap3Page.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    Rekap3Page.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    Rekap3Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php?' + "&f=" + _this.f + "&g=" + _this.g)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                console.log('kontol' + _this.e1nama);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rekap3Page.prototype.action = function (nama, f, g, h) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rekap4_rekap4__["a" /* Rekap4Page */], {
                            f: f,
                            g: g,
                            h: h,
                            skpd: _this.skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: f,
                            g: g,
                            h: h,
                            skpd: _this.skpd,
                            nama: nama
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Rekap3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap3',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap3\rekap3.html"*/'<!--\n  Generated template for the Rekap2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar hideBackButton>\n\n                <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                \n                    <ion-title>Rekap</ion-title>\n               \n                <ion-buttons end>\n                        <a ion-button icon-only (click)="openPopover($event)">\n                        <ion-icon name="more"></ion-icon>\n                    </a>\n                </ion-buttons>\n          \n            </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n\n        <div *ngIf="c1nama != undefined">\n                <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                <b>\n                                <h2>\n                                    SKPD	\n                                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                    style="\n                                    color: #d49624;\n                                    text-align:  right;\n                                    float:  right;\n                                    ">\n                                </ion-icon>\n                                </h2>\n                                </b>\n                                </ion-label>\n                            </ion-item>\n                            <div *ngIf="isGroupShown1(i)"> \n                            \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        URUSAN\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ c1nama }}\n                                </h4>\n                        </ion-item>\n                \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            BIDANG\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ cnama }}\n                                    </h4>\n                            </ion-item>\n                \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SKPD\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ dnama }}\n                            </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ enama }}\n                                </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SUB UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ e1nama }}\n                                </h4>\n                        </ion-item>\n                                \n                                        \n                </div>\n            </div>\n        \n            <div *ngIf="c1nama == undefined">\n                    <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                    <b>\n                                    <h2>\n                                        SKPD	\n                                        <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                        style="\n                                        color: #d49624;\n                                        text-align:  right;\n                                        float:  right;\n                                        ">\n                                    </ion-icon>\n                                    </h2>\n                                    </b>\n                                    </ion-label>\n                                </ion-item>\n                                <div *ngIf="isGroupShown1(i)"> \n                                \n                                    <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            URUSAN\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ c1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                    \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                                BIDANG\n                                            </h3></b>\n                                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                                            {{ cnamaSKPDOperator }}\n                                        </h4>\n                                </ion-item>\n                    \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SKPD\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ dnamaSKPDOperator }}\n                                </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ enamaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            SUB UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ e1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                                    \n                                            \n                    </div>\n                </div>\n        \n        \n      <ion-grid>\n          <ion-row>\n              <ion-col col-1 style="\n              padding: 2px;\n              border-top: 1px solid #1f1f1f;\n              border-left: 1px solid #1f1f1f;\n              border-bottom: 1px solid #1f1f1f;\n              background: #7eddec;\n              text-align:  center;">\n                  <b><h6>No</h6></b>\n              </ion-col>\n  \n              <ion-col col-11 style="\n              padding: 2px;\n              border: 1px solid #1f1f1f;\n              background: #7eddec;">\n                  <b><h6>Nama Barang</h6></b>\n              </ion-col>\n  \n              <!-- <ion-col col-1 style="padding: 2px">\n                  <ion-buttons end>\n                      <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                      <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                      </button>\n                      \n                  </ion-buttons>\n              </ion-col> -->\n          </ion-row>\n  \n              <ion-row *ngFor="let item of data" [ngClass]="animateClass">\n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;">\n                      <h6 class="kolom"> {{ item.no }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-10 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  background: #f3fdff;">\n                      <h6 class="kolom">{{ item.nm_barang }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-right: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;" (click)="action(item.nm_barang,item.f,item.g,item.h)">\n                  <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                  </ion-col>\n              </ion-row>\n\n              <ion-row *ngFor="let item of data">\n                    <ion-col col-12 style="\n                    padding: 2px;\n                    border: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;"  *ngIf="item.no == \'no\'">\n                    <h6 class="kolom">Data Tidak ada</h6>\n                    </ion-col>\n            </ion-row>\n\n          </ion-grid>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n          <ion-fab bottom *ngIf="c1namaSKPDOperator == undefined"  style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>                    \n                    <ion-col icon-start (click)="cariSkpd()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                FILTER SKPD\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n          \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap3\rekap3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Rekap3Page);
    return Rekap3Page;
}());

//# sourceMappingURL=rekap3.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap5_rekap5__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap4Page = /** @class */ (function () {
    function Rekap4Page(GlobalProvider, popoverCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.animateClass = { 'fade-in-right-item': true };
        this.f = navParams.get('f');
        this.g = navParams.get('g');
        this.h = navParams.get('h');
        this.skpd = navParams.get('skpd');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl' + SkpdOperator;
        if (SkpdOperatorr != 'kntlundefined') {
            var mystr = SkpdOperator;
            var myarr = mystr.split(".");
            this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
            this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + this.search)
                .map(function (result) { return result.json(); })
                .subscribe(function (nmSKPD) {
                _this.nmSKPD = nmSKPD.result;
                console.log(nmSKPD.result);
                _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
            }, function (err) {
                console.log(err);
            });
        }
    }
    Rekap4Page.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    Rekap4Page.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    Rekap4Page.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    Rekap4Page.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    Rekap4Page.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    Rekap4Page.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    Rekap4Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php?' + "&f=" + _this.f + "&g=" + _this.g + "&h=" + _this.h)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rekap4Page.prototype.action = function (nama, f, g, h, i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rekap5_rekap5__["a" /* Rekap5Page */], {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            skpd: _this.skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            skpd: _this.skpd,
                            nama: nama
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Rekap4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap4',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap4\rekap4.html"*/'<!--\n  Generated template for the Rekap2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar hideBackButton>\n\n                <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                \n                    <ion-title>Rekap</ion-title>\n               \n                <ion-buttons end>\n                        <a ion-button icon-only (click)="openPopover($event)">\n                        <ion-icon name="more"></ion-icon>\n                    </a>\n                </ion-buttons>\n          \n            </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n        <div *ngIf="c1nama != undefined">\n                <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                <b>\n                                <h2>\n                                    SKPD	\n                                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                    style="\n                                    color: #d49624;\n                                    text-align:  right;\n                                    float:  right;\n                                    ">\n                                </ion-icon>\n                                </h2>\n                                </b>\n                                </ion-label>\n                            </ion-item>\n                            <div *ngIf="isGroupShown1(i)"> \n                            \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        URUSAN\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ c1nama }}\n                                </h4>\n                        </ion-item>\n                \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            BIDANG\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ cnama }}\n                                    </h4>\n                            </ion-item>\n                \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SKPD\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ dnama }}\n                            </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ enama }}\n                                </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SUB UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ e1nama }}\n                                </h4>\n                        </ion-item>\n                                \n                                        \n                </div>\n            </div>\n        \n            <div *ngIf="c1nama == undefined">\n                    <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                    <b>\n                                    <h2>\n                                        SKPD	\n                                        <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                        style="\n                                        color: #d49624;\n                                        text-align:  right;\n                                        float:  right;\n                                        ">\n                                    </ion-icon>\n                                    </h2>\n                                    </b>\n                                    </ion-label>\n                                </ion-item>\n                                <div *ngIf="isGroupShown1(i)"> \n                                \n                                    <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            URUSAN\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ c1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                    \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                                BIDANG\n                                            </h3></b>\n                                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                                            {{ cnamaSKPDOperator }}\n                                        </h4>\n                                </ion-item>\n                    \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SKPD\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ dnamaSKPDOperator }}\n                                </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ enamaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            SUB UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ e1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                                    \n                                            \n                    </div>\n                </div>\n      \n\n\n      <ion-grid>\n          <ion-row>\n              <ion-col col-1 style="\n              padding: 2px;\n              border-top: 1px solid #1f1f1f;\n              border-left: 1px solid #1f1f1f;\n              border-bottom: 1px solid #1f1f1f;\n              background: #7eddec;\n              text-align:  center;">\n                  <b><h6>No</h6></b>\n              </ion-col>\n  \n              <ion-col col-11 style="\n              padding: 2px;\n              border: 1px solid #1f1f1f;\n              background: #7eddec;">\n                  <b><h6>Nama Barang</h6></b>\n              </ion-col>\n  \n              <!-- <ion-col col-1 style="padding: 2px">\n                  <ion-buttons end>\n                      <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                      <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                      </button>\n                      \n                  </ion-buttons>\n              </ion-col> -->\n          </ion-row>\n  \n              <ion-row *ngFor="let item of data" [ngClass]="animateClass">\n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;">\n                      <h6 class="kolom"> {{ item.no }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-10 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  background: #f3fdff;">\n                      <h6 class="kolom">{{ item.nm_barang }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-right: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;" (click)="action(item.nm_barang,item.f,item.g,item.h,item.i)">\n                  <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                  </ion-col>\n              </ion-row>\n\n              <ion-row *ngFor="let item of data">\n                    <ion-col col-12 style="\n                    padding: 2px;\n                    border: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;"  *ngIf="item.no == \'no\'">\n                    <h6 class="kolom">Data Tidak ada</h6>\n                    </ion-col>\n                </ion-row>\n          </ion-grid>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n          <ion-fab bottom *ngIf="c1namaSKPDOperator == undefined" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>                    \n                    <ion-col icon-start (click)="cariSkpd()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                FILTER SKPD\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n          \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap4\rekap4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Rekap4Page);
    return Rekap4Page;
}());

//# sourceMappingURL=rekap4.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap6_rekap6__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap5Page = /** @class */ (function () {
    function Rekap5Page(GlobalProvider, popoverCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.animateClass = { 'fade-in-right-item': true };
        this.f = navParams.get('f');
        this.g = navParams.get('g');
        this.h = navParams.get('h');
        this.i = navParams.get('i');
        this.skpd = navParams.get('skpd');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl' + SkpdOperator;
        if (SkpdOperatorr != 'kntlundefined') {
            var mystr = SkpdOperator;
            var myarr = mystr.split(".");
            this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
            this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + this.search)
                .map(function (result) { return result.json(); })
                .subscribe(function (nmSKPD) {
                _this.nmSKPD = nmSKPD.result;
                console.log(nmSKPD.result);
                _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
            }, function (err) {
                console.log(err);
            });
        }
    }
    Rekap5Page.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    Rekap5Page.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    Rekap5Page.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    Rekap5Page.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    Rekap5Page.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    Rekap5Page.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    Rekap5Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var mystr = SkpdOperator;
        var myarr = mystr.split(".");
        this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
        this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + this.search)
            .map(function (result) { return result.json(); })
            .subscribe(function (nmSKPD) {
            _this.nmSKPD = nmSKPD.result;
            console.log(nmSKPD.result);
            _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
            _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
            _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
            _this.enamaSKPDOperator = nmSKPD.result[0].enama;
            _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
        }, function (err) {
            console.log(err);
        });
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php?' + "&f=" + _this.f + "&g=" + _this.g + "&h=" + _this.h + "&i=" + _this.i)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rekap5Page.prototype.action = function (nama, f, g, h, i, j) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rekap6_rekap6__["a" /* Rekap6Page */], {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            j: j,
                            skpd: _this.skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            j: j,
                            skpd: _this.skpd,
                            nama: nama
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Rekap5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap5',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap5\rekap5.html"*/'<!--\n  Generated template for the Rekap2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar hideBackButton>\n\n                <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                \n                    <ion-title>Rekap</ion-title>\n               \n                <ion-buttons end>\n                        <a ion-button icon-only (click)="openPopover($event)">\n                        <ion-icon name="more"></ion-icon>\n                    </a>\n                </ion-buttons>\n          \n            </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n        <div *ngIf="c1nama != undefined">\n                <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                <b>\n                                <h2>\n                                    SKPD	\n                                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                    style="\n                                    color: #d49624;\n                                    text-align:  right;\n                                    float:  right;\n                                    ">\n                                </ion-icon>\n                                </h2>\n                                </b>\n                                </ion-label>\n                            </ion-item>\n                            <div *ngIf="isGroupShown1(i)"> \n                            \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        URUSAN\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ c1nama }}\n                                </h4>\n                        </ion-item>\n                \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            BIDANG\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ cnama }}\n                                    </h4>\n                            </ion-item>\n                \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SKPD\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ dnama }}\n                            </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ enama }}\n                                </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SUB UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ e1nama }}\n                                </h4>\n                        </ion-item>\n                                \n                                        \n                </div>\n            </div>\n        \n            <div *ngIf="c1nama == undefined">\n                    <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                    <b>\n                                    <h2>\n                                        SKPD	\n                                        <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                        style="\n                                        color: #d49624;\n                                        text-align:  right;\n                                        float:  right;\n                                        ">\n                                    </ion-icon>\n                                    </h2>\n                                    </b>\n                                    </ion-label>\n                                </ion-item>\n                                <div *ngIf="isGroupShown1(i)"> \n                                \n                                    <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            URUSAN\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ c1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                    \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                                BIDANG\n                                            </h3></b>\n                                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                                            {{ cnamaSKPDOperator }}\n                                        </h4>\n                                </ion-item>\n                    \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SKPD\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ dnamaSKPDOperator }}\n                                </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ enamaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            SUB UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ e1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                                    \n                                            \n                    </div>\n                </div>\n      \n\n        \n      <ion-grid>\n          <ion-row>\n              <ion-col col-1 style="\n              padding: 2px;\n              border-top: 1px solid #1f1f1f;\n              border-left: 1px solid #1f1f1f;\n              border-bottom: 1px solid #1f1f1f;\n              background: #7eddec;\n              text-align:  center;">\n                  <b><h6>No</h6></b>\n              </ion-col>\n  \n              <ion-col col-11 style="\n              padding: 2px;\n              border: 1px solid #1f1f1f;\n              background: #7eddec;">\n                  <b><h6>Nama Barang</h6></b>\n              </ion-col>\n  \n              <!-- <ion-col col-1 style="padding: 2px">\n                  <ion-buttons end>\n                      <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                      <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                      </button>\n                      \n                  </ion-buttons>\n              </ion-col> -->\n          </ion-row>\n  \n              <ion-row *ngFor="let item of data"  [ngClass]="animateClass">\n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;">\n                      <h6 class="kolom"> {{ item.no }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-10 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  background: #f3fdff;">\n                      <h6 class="kolom">{{ item.nm_barang }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-right: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;" (click)="action(item.nm_barang,item.f,item.g,item.h,item.i,item.j)">\n                  <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                  </ion-col>\n              </ion-row>\n\n              <ion-row *ngFor="let item of data">\n                    <ion-col col-12 style="\n                    padding: 2px;\n                    border: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;"  *ngIf="item.no == \'no\'">\n                    <h6 class="kolom">Data Tidak ada</h6>\n                    </ion-col>\n                </ion-row>\n              \n          </ion-grid>\n          \n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n          <ion-fab bottom *ngIf="c1namaSKPDOperator == undefined" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>                    \n                    <ion-col icon-start (click)="cariSkpd()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                FILTER SKPD\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n          \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap5\rekap5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Rekap5Page);
    return Rekap5Page;
}());

//# sourceMappingURL=rekap5.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Rekap7Page } from '../rekap7/rekap7';






/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap6Page = /** @class */ (function () {
    function Rekap6Page(GlobalProvider, popoverCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.animateClass = { 'fade-in-right-item': true };
        this.f = navParams.get('f');
        this.g = navParams.get('g');
        this.h = navParams.get('h');
        this.i = navParams.get('i');
        this.j = navParams.get('j');
        this.skpd = navParams.get('skpd');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl' + SkpdOperator;
        if (SkpdOperatorr != 'kntlundefined') {
            var mystr = SkpdOperator;
            var myarr = mystr.split(".");
            this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
            this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + this.search)
                .map(function (result) { return result.json(); })
                .subscribe(function (nmSKPD) {
                _this.nmSKPD = nmSKPD.result;
                console.log(nmSKPD.result);
                _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
            }, function (err) {
                console.log(err);
            });
        }
    }
    Rekap6Page_1 = Rekap6Page;
    Rekap6Page.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    Rekap6Page.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    Rekap6Page.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    Rekap6Page.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    Rekap6Page.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    Rekap6Page.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    Rekap6Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php?' + "&f=" + _this.f + "&g=" + _this.g + "&h=" + _this.h + "&i=" + _this.i + "&j=" + _this.j)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    Rekap6Page.prototype.action = function (nama, f, g, h, i, j, j1) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(Rekap6Page_1, {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            j: j,
                            j1: j1,
                            skpd: _this.skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: f,
                            g: g,
                            h: h,
                            i: i,
                            j: j,
                            j1: j1,
                            skpd: _this.skpd,
                            nama: nama
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Rekap6Page = Rekap6Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap6',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap6\rekap6.html"*/'<!--\n  Generated template for the Rekap2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar hideBackButton>\n\n                <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                \n                    <ion-title>Rekap</ion-title>\n               \n                <ion-buttons end>\n                        <a ion-button icon-only (click)="openPopover($event)">\n                        <ion-icon name="more"></ion-icon>\n                    </a>\n                </ion-buttons>\n          \n            </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n        <div *ngIf="c1nama != undefined">\n                <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                <b>\n                                <h2>\n                                    SKPD	\n                                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                    style="\n                                    color: #d49624;\n                                    text-align:  right;\n                                    float:  right;\n                                    ">\n                                </ion-icon>\n                                </h2>\n                                </b>\n                                </ion-label>\n                            </ion-item>\n                            <div *ngIf="isGroupShown1(i)"> \n                            \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        URUSAN\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ c1nama }}\n                                </h4>\n                        </ion-item>\n                \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            BIDANG\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ cnama }}\n                                    </h4>\n                            </ion-item>\n                \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SKPD\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ dnama }}\n                            </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ enama }}\n                                </h4>\n                        </ion-item>\n        \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SUB UNIT\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ e1nama }}\n                                </h4>\n                        </ion-item>\n                                \n                                        \n                </div>\n            </div>\n        \n            <div *ngIf="c1nama == undefined">\n                    <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                                    <b>\n                                    <h2>\n                                        SKPD	\n                                        <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                        style="\n                                        color: #d49624;\n                                        text-align:  right;\n                                        float:  right;\n                                        ">\n                                    </ion-icon>\n                                    </h2>\n                                    </b>\n                                    </ion-label>\n                                </ion-item>\n                                <div *ngIf="isGroupShown1(i)"> \n                                \n                                    <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            URUSAN\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ c1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                    \n                                <ion-item text-wrap  style="background: #fbfbfb;">\n                                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                                BIDANG\n                                            </h3></b>\n                                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                                            {{ cnamaSKPDOperator }}\n                                        </h4>\n                                </ion-item>\n                    \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        SKPD\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ dnamaSKPDOperator }}\n                                </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ enamaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n            \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                            SUB UNIT\n                                        </h3></b>\n                                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                                        {{ e1namaSKPDOperator }}\n                                    </h4>\n                            </ion-item>\n                                    \n                                            \n                    </div>\n                </div>\n      \n\n        \n    <ion-grid>\n          <ion-row>\n              <ion-col col-1 style="\n              padding: 2px;\n              border-top: 1px solid #1f1f1f;\n              border-left: 1px solid #1f1f1f;\n              border-bottom: 1px solid #1f1f1f;\n              background: #7eddec;\n              text-align:  center;">\n                  <b><h6>No</h6></b>\n              </ion-col>\n  \n              <ion-col col-11 style="\n              padding: 2px;\n              border: 1px solid #1f1f1f;\n              background: #7eddec;">\n                  <b><h6>Nama Barang</h6></b>\n              </ion-col>\n  \n              <!-- <ion-col col-1 style="padding: 2px">\n                  <ion-buttons end>\n                      <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                      <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                      </button>\n                      \n                  </ion-buttons>\n              </ion-col> -->\n          </ion-row>\n  \n              <ion-row *ngFor="let item of data" [ngClass]="animateClass">\n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;">\n                      <h6 class="kolom"> {{ item.no }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-10 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-left: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  background: #f3fdff;">\n                      <h6 class="kolom">{{ item.nm_barang }}</h6>\n                  </ion-col>\n  \n                  <ion-col col-1 *ngIf="item.no != \'no\'" style="\n                  padding: 2px;\n                  border-top: 1px solid #1f1f1f;\n                  border-right: 1px solid #1f1f1f;\n                  border-bottom: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;" (click)="action(item.nm_barang,item.f,item.g,item.h,item.i,item.j,item.j1)">\n                  <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                  </ion-col>                  \n              </ion-row>\n              <ion-row *ngFor="let item of data">\n                  <ion-col col-12 style="\n                  padding: 2px;\n                  border: 1px solid #1f1f1f;\n                  text-align:  center;\n                  background: #f3fdff;"  *ngIf="item.no == \'no\'">\n                  <h6 class="kolom">Data Tidak ada</h6>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n\n            <ion-card>\n            </ion-card>\n            <ion-card>    \n            </ion-card>\n          <ion-fab bottom *ngIf="c1namaSKPDOperator == undefined" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>                    \n                    <ion-col icon-start (click)="cariSkpd()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                FILTER SKPD\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n          \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap6\rekap6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Rekap6Page);
    return Rekap6Page;
    var Rekap6Page_1;
}());

//# sourceMappingURL=rekap6.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(viewCtrl, appCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.pushPage = function () {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\menu\menu.html"*/'<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      <p>some menu content, could be list items</p>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/basiclayout/basiclayout.module": [
		322,
		17
	],
	"../pages/carddata/carddata.module": [
		323,
		16
	],
	"../pages/cardlayout/cardlayout.module": [
		324,
		15
	],
	"../pages/cari-skpd/cari-skpd.module": [
		325,
		14
	],
	"../pages/menu/menu.module": [
		326,
		13
	],
	"../pages/rekap-detail/rekap-detail.module": [
		327,
		12
	],
	"../pages/rekap/rekap.module": [
		328,
		5
	],
	"../pages/rekap2/rekap2.module": [
		329,
		11
	],
	"../pages/rekap3/rekap3.module": [
		330,
		10
	],
	"../pages/rekap4/rekap4.module": [
		331,
		9
	],
	"../pages/rekap5/rekap5.module": [
		332,
		8
	],
	"../pages/rekap6/rekap6.module": [
		333,
		7
	],
	"../pages/rekap7/rekap7.module": [
		334,
		6
	],
	"../pages/result-search/result-search.module": [
		335,
		4
	],
	"../pages/scanerlayout/scanerlayout.module": [
		336,
		3
	],
	"../pages/scanerqrlayout/scanerqrlayout.module": [
		337,
		2
	],
	"../pages/search/search.module": [
		338,
		1
	],
	"../pages/sensus/sensus.module": [
		339,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListlayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListlayoutPage = /** @class */ (function () {
    function ListlayoutPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.content = [];
        this.initializeItems();
    }
    ListlayoutPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    ListlayoutPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    ListlayoutPage.prototype.initializeItems = function () {
        var _this = this;
        this.http.get('http://123.231.253.228/atis/pages.php?Pg=api&tipe=2')
            .map(function (content) { return content.json(); })
            .subscribe(function (data) {
            _this.information = data.content;
            console.log(data.content);
        }, function (err) {
            console.log(err);
        });
    };
    ListlayoutPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    ListlayoutPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.information = this.information.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListlayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listlayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\listlayout\listlayout.html"*/'<ion-header >\n\n  <ion-navbar hideBackButton>\n      <ion-title>\n              List Item\n        </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="home()" style="color: white;">\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar placeholder="Filter Items" (ionInput)="getItems($event)"></ion-searchbar>\n\n\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left ios="ios-arrow-dropright" md="md-arrow-dropright" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left ios="ios-arrow-dropdown" md="md-arrow-dropdown" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n      </button>\n\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n\n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>\n          </ion-item>\n\n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n              <h2>{{ item.name }}</h2>\n              <p text-lowercase>{{ item.information }}</p>\n              <!-- Direct Add Button -->\n              <button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button>\n            </ion-item>\n          </ion-list>\n\n        </ion-list-header>\n      </ion-list>\n\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\listlayout\listlayout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ListlayoutPage);
    return ListlayoutPage;
}());

//# sourceMappingURL=listlayout.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortPage = /** @class */ (function () {
    function SortPage(GlobalProvider, platform, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.dataSelect = {};
        this.datas = {};
        this.dataSelect.kondisiBarang = '';
        this.dataSelect.thnPerolehan = '';
        this.dataSelect.luasTanah = '';
        this.dataSelect.harga = '';
        this.datas.kodeBarang = '';
        this.datas.namaBarang = '';
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    SortPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carddata_carddata__["a" /* CarddataPage */]);
    };
    SortPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/sorting.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (data) {
                    _this.data = data.result;
                    console.log(data.result);
                }, function (err) {
                    console.log(err);
                });
                loader.dismiss();
            });
        });
    };
    SortPage.prototype.kondisi = function (get, id) {
        this.dataGet = '&colums=' + get + '&aksi=' + id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carddata_carddata__["a" /* CarddataPage */], {
            sort: this.dataGet
        });
        console.log(get + ".kondisi");
    };
    SortPage.prototype.tertinggi = function (get) {
        this.dataGet = '&colums=' + get + '&aksi=DESC';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carddata_carddata__["a" /* CarddataPage */], {
            sort: this.dataGet
        });
        console.log(get + ".tertinggi");
    };
    SortPage.prototype.terendah = function (get) {
        this.dataGet = '&colums=' + get + '&aksi=ASC';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carddata_carddata__["a" /* CarddataPage */], {
            sort: this.dataGet
        });
        console.log(get + ".terendah");
    };
    SortPage.prototype.submit = function () {
        this.dataGet = '&orderKondisiBarang=' + this.dataSelect.kondisiBarang + '&orderThnPerolehan=' + this.dataSelect.thnPerolehan + '&orderLuasTanah=' + this.dataSelect.luasTanah + '&orderHarga=' + this.dataSelect.harga + '&orderKodeBarang=' + this.datas.kodeBarang + '&orderNamaBarang=' + this.datas.namaBarang;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carddata_carddata__["a" /* CarddataPage */], {
            sort: this.dataGet
        });
    };
    SortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sort',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\sort\sort.html"*/'<!--\n  Generated template for the SortPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title *ngFor="let itemNama of data;  let i=index" style="text-align: left;">\n              Sorting Data  {{ itemNama.namaPage }}\n        </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n        \n    <ion-list *ngFor="let dataTerbaru of data;  let i=index">\n        <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n            URUTKAN BERDASARKAN\n          </ion-list-header>\n\n\n        <ion-item style="padding:  0; ">\n                <ion-label floating>Kondisi Barang</ion-label>\n                <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" >\n                    <ion-option value="" selected="true"> </ion-option>\n                    <ion-option value="1">Baik</ion-option>\n                    <ion-option value="2">Kurang Baik</ion-option>\n                    <ion-option value="3">Rusak Berat</ion-option>\n                </ion-select>\n        </ion-item>\n\n\n        <ion-item style="padding:  0; ">\n                <ion-label floating>Tahun Perolehan</ion-label>\n                <ion-select [(ngModel)]="dataSelect.thnPerolehan" name="thnPerolehan" >\n                    <ion-option value="" selected="true"> </ion-option>\n                    <ion-option value="1">Terkini</ion-option>\n                    <ion-option value="2">Terlampau</ion-option>\n                </ion-select>\n        </ion-item>\n\n        <ion-item style="padding:  0; " *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_b\' || data[0].namaTable == \'view_kib_c\' || data[0].namaTable == \'view_kib_d\' || data[0].namaTable == \'view_kib_e\' || data[0].namaTable == \'view_kib_f\' || data[0].namaTable == \'view_kib_g\'">\n                <ion-label floating>Harga Perolehan</ion-label>\n                <ion-select [(ngModel)]="dataSelect.harga" name="harga" >\n                    <ion-option value="" selected="true"> </ion-option>\n                    <ion-option value="1">Tertinggi </ion-option>\n                    <ion-option value="2">Terendah </ion-option>\n                </ion-select>\n        </ion-item>\n\n\n        <ion-item style="padding:  0; " *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_c\'">\n                <ion-label floating>Luas Tanah</ion-label>\n                <ion-select [(ngModel)]="dataSelect.luasTanah" name="luasTanah" >\n                    <ion-option value="" selected="true"> </ion-option>\n                    <ion-option value="1">Terluas</ion-option>\n                    <ion-option value="2">Terkecil</ion-option>\n                </ion-select>\n        </ion-item>\n\n        <ion-item style="padding:  0; ">\n                <ion-label floating> Kode Barang : </ion-label>\n                <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n        </ion-item> \n\n\n        <ion-item style="padding:  0; ">\n                <ion-label floating> Nama Barang : </ion-label>\n                <ion-input type="text" name="namaBarang" [(ngModel)]="datas.namaBarang"></ion-input>\n        </ion-item> \n\n        <!-- <ion-item (click)="kondisi(\'kondisi\',\'1\')">        \n            Kondisi Barang Baik\n        </ion-item>\n   \n        <ion-item (click)="kondisi(\'kondisi\',\'2\')">        \n            Kondisi Barang Kurang Baik\n        </ion-item>\n        \n        <ion-item (click)="kondisi(\'kondisi\',\'3\')">        \n            Kondisi Barang Rusak Berat\n         </ion-item> -->\n \n        <!-- <ion-item (click)="tertinggi(\'thn_perolehan\')">        \n         Tahun Perolehan Terkini\n        </ion-item>\n\n        <ion-item (click)="terendah(\'thn_perolehan\')">        \n        Tahun Perolehan Terlampau\n        </ion-item> -->\n        \n\n\n      <!-- <ion-item (click)="tertinggi(\'harga\')" *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_b\' || data[0].namaTable == \'view_kib_c\' || data[0].namaTable == \'view_kib_d\' || data[0].namaTable == \'view_kib_e\' || data[0].namaTable == \'view_kib_f\' || data[0].namaTable == \'view_kib_g\'">\n      \n       Harga Tertinggi\n      </ion-item>\n\n      <ion-item (click)="terendah(\'harga\')" *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_b\' || data[0].namaTable == \'view_kib_c\' || data[0].namaTable == \'view_kib_d\' || data[0].namaTable == \'view_kib_e\' || data[0].namaTable == \'view_kib_f\' || data[0].namaTable == \'view_kib_g\'">\n        \n         Harga Terendah\n      </ion-item>\n\n      <ion-item (click)="tertinggi(\'luas\')" *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_c\'">\n        \n          Data Luas Terbesar\n        </ion-item>\n  \n      <ion-item (click)="terendah(\'luas\')" *ngIf="data[0].namaTable == \'view_kib_a\' || data[0].namaTable == \'view_kib_c\'">\n        \n          Data Luas Terkecil\n      </ion-item> -->\n\n\n\n        \n\n        \n    \n    \n      </ion-list>\n\n\n      <ion-fab bottom (click)="submit()" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>\n                    <ion-col style="padding:  3%;font-size: 13px;color: #fff;">\n                      URUTKAN\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\sort\sort.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CarddataPage } from '../carddata/carddata';




/**
 * Generated class for the KibAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibAPage = /** @class */ (function () {
    function KibAPage(GlobalProvider, storage, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.storage = storage;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibAPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibAPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibAPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibAPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibAPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibAPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibAPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.remove('backPage').then(function () {
        });
        this.storage.ready().then(function () {
            _this.storage.set('backPage', 'back1');
        });
        this.storage.get('backPage').then(function (val) {
            console.log(val);
        });
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBA/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibAPage.prototype.maps = function (idbi, table) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi,
            table: table
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibAPage.prototype, "nav", void 0);
    KibAPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-a',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-a\kib-a.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib A\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != \'\'" (click)="maps(dataId.idbi, \'view_kib_a\')" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n\n   <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n      <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n            <b>\n              <h2>\n              Kode Barang\n                <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                style="\n                color: #d49624;\n                text-align:  right;\n                float:  right;\n                margin-bottom: 0px;\n                margin-right: 0px;\n                margin-top: -3px;\n                ">\n              </ion-icon>\n              </h2>\n            </b>\n            </ion-label>\n          </ion-item>\n          <div *ngIf="isGroupShown(i)"> \n          <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                      Kode Barang\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.id_barang }}\n                  </h4>\n          </ion-item>\n\n              <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                      ID Barang\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.idbi }}\n                  </h4>\n              </ion-item>\n\n              <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                      ID Awal	\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.idawal }}\n                  </h4>\n              </ion-item>\n          </div>\n\n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.alamat">\n        <b><h2> Alamat </h2></b>\n        <h3>{{ item.alamat }}</h3>\n      </ion-item>\n  \n     <ion-item text-wrap *ngIf="item.rt || item.rw">\n        <b><h2> RT / RW </h2></b>\n        <h3>{{ item.rt }} / {{ item.rw }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap>\n          <b><h2> Kelurahan </h2></b>\n          <h3>{{ item.kelurahan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n          <b><h2> Kecamatan </h2></b>\n          <h3>{{ item.kecamatan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n            <b><h2> Kota / Kabupaten </h2></b>\n            <h3>{{ item.kota }}</h3>\n      </ion-item>\n\n     <ion-item text-wrap *ngIf="item.luas">\n      <b><h2>Luas</h2></b>\n      <h3>{{ item.luas }}</h3>\n    </ion-item>\n\n      <ion-item text-wrap *ngIf="item.harga">\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n      \n      <ion-item  text-wrap (click)="toggleGroup1(i)">\n        <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n              <b>\n                <h2>\n                    Status Tanah	\n                  <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                  style="\n                  color: #d49624;\n                  text-align:  right;\n                  float:  right;\n                  margin-bottom: 0px;\n                  margin-right: 0px;\n                  margin-top: -3px;\n                  ">\n                </ion-icon>\n                </h2>\n              </b>\n              </ion-label>\n            </ion-item>\n            <div *ngIf="isGroupShown1(i)"> \n            \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                    Status Hak\n                 </h3></b>\n                <h4 style="font-size: 12px;  margin-left: 6px;">\n                  {{ item.status_hak }}\n                </h4>\n        </ion-item>\n\n              <ion-item text-wrap  style="background: #fbfbfb;">\n                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                        Sertifikat\n                     </h3></b>\n                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                      {{ item.sertifikat_no }}\n                    </h4>\n            </ion-item>\n\n        <ion-item text-wrap  style="background: #fbfbfb;">\n            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n               Tanggal Sertifikat\n             </h3></b>\n            <h4 style="font-size: 12px;  margin-left: 6px;">\n              {{ item.sertifikat_tgl }}\n            </h4>\n    </ion-item>\n\n        \n          </div>\n\n\n    <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Cara Perolehan</h2></b>\n      <h3>{{ item.asal_usul }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Sumber Dana</h2></b>\n      <h3>{{ item.jns_hibah }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Status Barang</h2></b>\n      <h3>{{ item.status_barang }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap >\n      <b><h2>Kondisi</h2></b>\n      <h3>{{ item.kondisi }}</h3>\n    </ion-item>\n\n\n\n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-a\kib-a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibAPage);
    return KibAPage;
}());

//# sourceMappingURL=kib-a.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibBPage = /** @class */ (function () {
    function KibBPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibBPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibBPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibBPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibBPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibBPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibBPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibBPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBB/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibBPage.prototype.maps = function (idbi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibBPage.prototype, "nav", void 0);
    KibBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-b',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-b\kib-b.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib B\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != null" (click)="maps(dataId.idbi)" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n            <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                  <b>\n                    <h2>\n                    Kode Barang\n                      <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                      style="\n                      color: #d49624;\n                      text-align:  right;\n                      float:  right;\n                      margin-bottom: 0px;\n                      margin-right: 0px;\n                      margin-top: -3px;\n                      ">\n                    </ion-icon>\n                    </h2>\n                  </b>\n                  </ion-label>\n                </ion-item>\n                <div *ngIf="isGroupShown(i)"> \n                <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                            Kode Barang\n                         </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                          {{ item.id_barang }}\n                        </h4>\n                </ion-item>\n      \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                            ID Barang\n                         </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                          {{ item.idbi }}\n                        </h4>\n                    </ion-item>\n      \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                            ID Awal	\n                         </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                          {{ item.idawal }}\n                        </h4>\n                    </ion-item>\n                </div>\n\n                \n \n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n      <ion-item text-wrap>\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n          <b><h2>Bahan</h2></b>\n          <h3>{{ item.bahan }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n          <b><h2>Ukuran / CC</h2></b>\n          <h3>{{ item.ukuran }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n          <b><h2>Merk</h2></b>\n          <h3>{{ item.merk }}</h3>\n      </ion-item>\n\n      <ion-item  text-wrap (click)="toggleGroup1(i)">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                      Nomer	\n                    <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown1(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                         Pabrik\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.no_pabrik }}\n                      </h4>\n              </ion-item>\n\n              <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                      Rangka\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.no_rangka }}\n                  </h4>\n          </ion-item>\n\n          <ion-item text-wrap  style="background: #fbfbfb;">\n              <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                  Mesin\n               </h3></b>\n              <h4 style="font-size: 12px;  margin-left: 6px;">\n                {{ item.no_mesin }}\n              </h4>\n      </ion-item>\n\n      <ion-item text-wrap  style="background: #fbfbfb;">\n          <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n              Polisi\n           </h3></b>\n          <h4 style="font-size: 12px;  margin-left: 6px;">\n            {{ item.no_polisi }}\n          </h4>\n  </ion-item>\n\n  <ion-item text-wrap  style="background: #fbfbfb;">\n      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n          BPKB\n       </h3></b>\n      <h4 style="font-size: 12px;  margin-left: 6px;">\n        {{ item.no_bpkb }}\n      </h4>\n</ion-item>\n\n          \n            </div>\n\n    <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Cara Perolehan</h2></b>\n      <h3>{{ item.asal_usul }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Sumber Dana</h2></b>\n      <h3>{{ item.jns_hibah }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Status Barang</h2></b>\n      <h3>{{ item.status_barang }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap >\n      <b><h2>Kondisi</h2></b>\n      <h3>{{ item.kondisi }}</h3>\n    </ion-item>\n      \n        \n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-b\kib-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibBPage);
    return KibBPage;
}());

//# sourceMappingURL=kib-b.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibCPage = /** @class */ (function () {
    function KibCPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibCPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibCPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibCPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibCPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibCPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibCPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibCPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBC/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibCPage.prototype.maps = function (idbi, table) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi,
            table: table
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibCPage.prototype, "nav", void 0);
    KibCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-c',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-c\kib-c.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib E\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != \'\'" (click)="maps(dataId.idbi, \'view_kib_c\')" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                  Kode Barang\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Kode Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.id_barang }}\n                      </h4>\n              </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idbi }}\n                      </h4>\n                  </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Awal	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idawal }}\n                      </h4>\n                  </ion-item>\n              </div>\n\n\n              <ion-item  text-wrap (click)="toggleGroup1(i)">\n                <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                      <b>\n                        <h2>\n                             Konstruksi Bangunan	\n                          <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                          style="\n                          color: #d49624;\n                          text-align:  right;\n                          float:  right;\n                          margin-bottom: 0px;\n                          margin-right: 0px;\n                          margin-top: -3px;\n                          ">\n                        </ion-icon>\n                        </h2>\n                      </b>\n                      </ion-label>\n                    </ion-item>\n                    <div *ngIf="isGroupShown1(i)"> \n                    \n                      <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Bertingkat / Tidak\n                         </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                          {{ item.konstruksi_tingkat }}\n                        </h4>\n                      </ion-item>\n        \n                      <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                              Beton / Tidak\n                             </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                              {{ item.konstruksi_beton }}\n                            </h4>\n                      </ion-item>\n                      \n                  </div>\n        \n        \n              \n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.alamat">\n        <b><h2> Alamat </h2></b>\n        <h3>{{ item.alamat }}</h3>\n      </ion-item>\n  \n     <ion-item text-wrap *ngIf="item.rt || item.rw">\n        <b><h2> RT / RW </h2></b>\n        <h3>{{ item.rt }} / {{ item.rw }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap>\n          <b><h2> Kelurahan </h2></b>\n          <h3>{{ item.kelurahan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n          <b><h2> Kecamatan </h2></b>\n          <h3>{{ item.kecamatan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n            <b><h2> Kota / Kabupaten </h2></b>\n            <h3>{{ item.kota }}</h3>\n      </ion-item>\n\n\n      <ion-item text-wrap *ngIf="item.luas">\n          <b><h2>Luas</h2></b>\n          <h3>{{ item.luas }}</h3>\n      </ion-item>\n        \n      <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n      <ion-item text-wrap >\n        <b><h2>Cara Perolehan</h2></b>\n        <h3>{{ item.asal_usul }}</h3>\n      </ion-item>\n  \n      <ion-item text-wrap >\n        <b><h2>Sumber Dana</h2></b>\n        <h3>{{ item.jns_hibah }}</h3>\n      </ion-item>\n  \n      <ion-item text-wrap >\n        <b><h2>Status Barang</h2></b>\n        <h3>{{ item.status_barang }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap >\n        <b><h2>Kondisi</h2></b>\n        <h3>{{ item.kondisi }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap *ngIf="item.luas">\n        <b><h2>Luas Lantai</h2></b>\n        <h3>{{ item.luas_lantai }}</h3>\n    </ion-item>\n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-c\kib-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibCPage);
    return KibCPage;
}());

//# sourceMappingURL=kib-c.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibDPage = /** @class */ (function () {
    function KibDPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibDPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibDPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibDPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibDPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibDPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibDPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibDPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBD/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibDPage.prototype.maps = function (idbi, table) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi,
            table: table
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibDPage.prototype, "nav", void 0);
    KibDPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-d',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-d\kib-d.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib D\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != \'\'" (click)="maps(dataId.idbi, \'view_kib_d\')" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n\n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                  Kode Barang\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Kode Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.id_barang }}\n                      </h4>\n              </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idbi }}\n                      </h4>\n                  </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Awal	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idawal }}\n                      </h4>\n                  </ion-item>\n              </div>\n    \n\n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap *ngIf="item.alamat">\n        <b><h2> Alamat </h2></b>\n        <h3>{{ item.alamat }}</h3>\n      </ion-item>\n  \n     <ion-item text-wrap *ngIf="item.rt || item.rw">\n        <b><h2> RT / RW </h2></b>\n        <h3>{{ item.rt }} / {{ item.rw }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap>\n          <b><h2> Kelurahan </h2></b>\n          <h3>{{ item.kelurahan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n          <b><h2> Kecamatan </h2></b>\n          <h3>{{ item.kecamatan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n            <b><h2> Kota / Kabupaten </h2></b>\n            <h3>{{ item.kota }}</h3>\n      </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Panjang</h2></b>\n      <h3>{{ item.panjang }}</h3>\n  </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Lebar</h2></b>\n      <h3>{{ item.lebar }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.luas">\n      <b><h2>Luas</h2></b>\n      <h3>{{ item.luas }}</h3>\n    </ion-item>\n    \n      <ion-item text-wrap *ngIf="item.harga">\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n      \n      <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n      <ion-item text-wrap >\n        <b><h2>Cara Perolehan</h2></b>\n        <h3>{{ item.asal_usul }}</h3>\n      </ion-item>\n  \n      <ion-item text-wrap >\n        <b><h2>Sumber Dana</h2></b>\n        <h3>{{ item.jns_hibah }}</h3>\n      </ion-item>\n  \n      <ion-item text-wrap >\n        <b><h2>Status Barang</h2></b>\n        <h3>{{ item.status_barang }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap >\n        <b><h2>Kondisi</h2></b>\n        <h3>{{ item.kondisi }}</h3>\n      </ion-item>\n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-d\kib-d.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibDPage);
    return KibDPage;
}());

//# sourceMappingURL=kib-d.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibEPage = /** @class */ (function () {
    function KibEPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibEPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibEPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibEPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibEPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibEPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibEPage.prototype.toggleGroup2 = function (group) {
        if (this.isGroupShown2(group)) {
            this.shownGroup2 = group;
        }
        else {
            this.shownGroup2 = null;
        }
    };
    ;
    KibEPage.prototype.isGroupShown2 = function (group) {
        return this.shownGroup2 === null;
    };
    ;
    KibEPage.prototype.toggleGroup3 = function (group) {
        if (this.isGroupShown3(group)) {
            this.shownGroup3 = group;
        }
        else {
            this.shownGroup3 = null;
        }
    };
    ;
    KibEPage.prototype.isGroupShown3 = function (group) {
        return this.shownGroup3 === null;
    };
    ;
    KibEPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibEPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBE/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibEPage.prototype.maps = function (idbi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibEPage.prototype, "nav", void 0);
    KibEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-e',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-e\kib-e.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib E\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != null" (click)="maps(dataId.idbi)" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n\n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                  Kode Barang\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Kode Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.id_barang }}\n                      </h4>\n              </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idbi }}\n                      </h4>\n                  </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Awal	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idawal }}\n                      </h4>\n                  </ion-item>\n              </div>\n\n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n\n    <ion-item  text-wrap (click)="toggleGroup1(i)">\n      <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n            <b>\n              <h2>\n                Buku Perpustakaan	\n                <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                style="\n                color: #d49624;\n                text-align:  right;\n                float:  right;\n                margin-bottom: 0px;\n                margin-right: 0px;\n                margin-top: -3px;\n                ">\n              </ion-icon>\n              </h2>\n            </b>\n            </ion-label>\n          </ion-item>\n          <div *ngIf="isGroupShown1(i)"> \n          \n            <ion-item text-wrap  style="background: #fbfbfb;">\n              <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                Judul / Pencipta\n               </h3></b>\n              <h4 style="font-size: 12px;  margin-left: 6px;">\n                {{ item.buku_judul }} \n              </h4>\n            </ion-item>\n\n\n            <ion-item text-wrap  style="background: #fbfbfb;">\n              <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                Spesifikasi\n               </h3></b>\n              <h4 style="font-size: 12px;  margin-left: 6px;">\n                {{ item.buku_spesifikasi }}\n              </h4>\n            </ion-item>\n\n\n      \n        </div>\n\n\n\n        <ion-item  text-wrap (click)="toggleGroup2(i)">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                    Barang Bercorak Kesenian	\n                    <ion-icon color="success" item-right [name]="isGroupShown2(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown2(i)"> \n              \n                <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                    Asal Daerah	\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.seni_asal_daerah }}\n                  </h4>\n                </ion-item>\n    \n    \n                <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                    Pencipta\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.seni_pencipta }} \n                  </h4>\n                </ion-item>\n\n                <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                    Bahan\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.seni_bahan }}\n                  </h4>\n                </ion-item>\n    \n    \n          \n            </div>\n\n\n\n            <ion-item  text-wrap (click)="toggleGroup3(i)">\n              <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                    <b>\n                      <h2>\n                        Hewan Ternak		\n                        <ion-icon color="success" item-right [name]="isGroupShown3(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                        style="\n                        color: #d49624;\n                        text-align:  right;\n                        float:  right;\n                        margin-bottom: 0px;\n                        margin-right: 0px;\n                        margin-top: -3px;\n                        ">\n                      </ion-icon>\n                      </h2>\n                    </b>\n                    </ion-label>\n                  </ion-item>\n                  <div *ngIf="isGroupShown3(i)"> \n                  \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                        Jenis	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.hewan_jenis }}\n                      </h4>\n                    </ion-item>\n\n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                        Ukuran	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.hewan_ukuran }}\n                      </h4>\n                    </ion-item>\n              \n                </div>\n                \n      <ion-item text-wrap *ngIf="item.harga">\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Cara Perolehan</h2></b>\n      <h3>{{ item.asal_usul }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Sumber Dana</h2></b>\n      <h3>{{ item.jns_hibah }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Status Barang</h2></b>\n      <h3>{{ item.status_barang }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap >\n      <b><h2>Kondisi</h2></b>\n      <h3>{{ item.kondisi }}</h3>\n    </ion-item>\n      \n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-e\kib-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibEPage);
    return KibEPage;
}());

//# sourceMappingURL=kib-e.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibFPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibFPage = /** @class */ (function () {
    function KibFPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibFPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibFPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibFPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibFPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibFPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibFPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibFPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBF/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibFPage.prototype.maps = function (idbi, table) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi,
            table: table
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibFPage.prototype, "nav", void 0);
    KibFPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-f',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-f\kib-f.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib F\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != \'\'" (click)="maps(dataId.idbi, \'view_kib_f\')" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n\n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                  Kode Barang\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Kode Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.id_barang }}\n                      </h4>\n              </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idbi }}\n                      </h4>\n                  </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Awal	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idawal }}\n                      </h4>\n                  </ion-item>\n              </div>\n\n              \n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap *ngIf="item.alamat">\n        <b><h2> Alamat </h2></b>\n        <h3>{{ item.alamat }}</h3>\n      </ion-item>\n  \n     <ion-item text-wrap *ngIf="item.rt || item.rw">\n        <b><h2> RT / RW </h2></b>\n        <h3>{{ item.rt }} / {{ item.rw }}</h3>\n      </ion-item>\n  \n  \n      <ion-item text-wrap>\n          <b><h2> Kelurahan </h2></b>\n          <h3>{{ item.kelurahan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n          <b><h2> Kecamatan </h2></b>\n          <h3>{{ item.kecamatan }}</h3>\n       </ion-item>\n  \n      <ion-item text-wrap>\n            <b><h2> Kota / Kabupaten </h2></b>\n            <h3>{{ item.kota }}</h3>\n      </ion-item>\n\n    <ion-item  text-wrap (click)="toggleGroup1(i)">\n      <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n            <b>\n              <h2>\n                   Konstruksi Bangunan	\n                <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                style="\n                color: #d49624;\n                text-align:  right;\n                float:  right;\n                margin-bottom: 0px;\n                margin-right: 0px;\n                margin-top: -3px;\n                ">\n              </ion-icon>\n              </h2>\n            </b>\n            </ion-label>\n          </ion-item>\n          <div *ngIf="isGroupShown1(i)"> \n          \n            <ion-item text-wrap  style="background: #fbfbfb;">\n              <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                Bertingkat / Tidak\n               </h3></b>\n              <h4 style="font-size: 12px;  margin-left: 6px;">\n                {{ item.konstruksi_tingkat }}\n              </h4>\n            </ion-item>\n\n            <ion-item text-wrap  style="background: #fbfbfb;">\n                  <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                    Beton / Tidak\n                   </h3></b>\n                  <h4 style="font-size: 12px;  margin-left: 6px;">\n                    {{ item.konstruksi_beton }}\n                  </h4>\n            </ion-item>\n            \n        </div>\n\n        <ion-item text-wrap >\n          <b><h2>Bangunan(P,SP,D)</h2></b>\n          <h3>{{ item.bangunan }}</h3>\n      </ion-item>\n\n     <ion-item text-wrap *ngIf="item.luas">\n      <b><h2>Luas</h2></b>\n      <h3>{{ item.luas }}</h3>\n    </ion-item>\n\n      <ion-item text-wrap *ngIf="item.harga">\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n \n      <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Cara Perolehan</h2></b>\n      <h3>{{ item.asal_usul }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Sumber Dana</h2></b>\n      <h3>{{ item.jns_hibah }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Status Barang</h2></b>\n      <h3>{{ item.status_barang }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap >\n      <b><h2>Kondisi</h2></b>\n      <h3>{{ item.kondisi }}</h3>\n    </ion-item>\n      \n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-f\kib-f.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibFPage);
    return KibFPage;
}());

//# sourceMappingURL=kib-f.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KibGPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the KibBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KibGPage = /** @class */ (function () {
    function KibGPage(GlobalProvider, platform, loadingCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.plu = navParams.get('plu');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    KibGPage.prototype.myHandlerFunction = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
        // this.navCtrl.push(CarddataPage);
    };
    KibGPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = group;
        }
        else {
            this.shownGroup = null;
        }
    };
    ;
    KibGPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === null;
    };
    ;
    KibGPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    KibGPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    KibGPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    KibGPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/KIBG/data.php?id=' + _this.plu)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    KibGPage.prototype.maps = function (idbi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapslayout_mapslayout__["a" /* MapslayoutPage */], {
            idbi: idbi
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], KibGPage.prototype, "nav", void 0);
    KibGPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kib-g',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\kib-g\kib-g.html"*/'<!--\n  Generated template for the KibAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n        Detail Info Kib G\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-fab top right edge *ngFor="let dataId of data">\n    <button *ngIf="dataId.koordinat != null" (click)="maps(dataId.idbi)" ion-fab mini style="background: #ea4e4e;"> <ion-icon ios="ios-pin" md="md-pin"></ion-icon></button>\n  </ion-fab>\n\n  <ion-content class="card-content">\n\n    <ion-card  *ngFor="let item of data" >\n    \n    \n      <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n        <ion-card-title>\n          {{ item.nm_barang }}\n        </ion-card-title>\n    \n        <ion-item  text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                <b>\n                  <h2>\n                  Kode Barang\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                    style="\n                    color: #d49624;\n                    text-align:  right;\n                    float:  right;\n                    margin-bottom: 0px;\n                    margin-right: 0px;\n                    margin-top: -3px;\n                    ">\n                  </ion-icon>\n                  </h2>\n                </b>\n                </ion-label>\n              </ion-item>\n              <div *ngIf="isGroupShown(i)"> \n              <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          Kode Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.id_barang }}\n                      </h4>\n              </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Barang\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idbi }}\n                      </h4>\n                  </ion-item>\n    \n                  <ion-item text-wrap  style="background: #fbfbfb;">\n                      <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                          ID Awal	\n                       </h3></b>\n                      <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ item.idawal }}\n                      </h4>\n                  </ion-item>\n              </div>\n        \n        <ion-item text-wrap>\n            <b><h2> Urusan </h2></b>\n            <h3>{{ item.urusan }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> Bidang </h2></b>\n            <h3>{{ item.bidang }}</h3>\n        </ion-item>\n    \n        <ion-item text-wrap>\n            <b><h2> SKPD </h2></b>\n            <h3>{{ item.skpd }}</h3>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <b><h2> Unit </h2></b>\n          <h3>{{ item.unit }}</h3>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <b><h2> Sub Unit </h2></b>\n        <h3>{{ item.subUnit }}</h3>\n    </ion-item>\n\n\n\n\n      <ion-item text-wrap *ngIf="item.harga">\n          <b><h2>Harga</h2></b>\n          <h3>{{ item.harga }}</h3>\n      </ion-item>\n        \n\n      <ion-item text-wrap >\n        <b><h2>Tahun Perolehan</h2></b>\n        <h3>{{ item.thn_perolehan }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Cara Perolehan</h2></b>\n      <h3>{{ item.asal_usul }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Sumber Dana</h2></b>\n      <h3>{{ item.jns_hibah }}</h3>\n    </ion-item>\n\n    <ion-item text-wrap >\n      <b><h2>Status Barang</h2></b>\n      <h3>{{ item.status_barang }}</h3>\n    </ion-item>\n\n\n    <ion-item text-wrap >\n      <b><h2>Kondisi</h2></b>\n      <h3>{{ item.kondisi }}</h3>\n    </ion-item>\n\n    \n      </ion-card-content>\n    \n    \n    </ion-card>\n    \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\kib-g\kib-g.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], KibGPage);
    return KibGPage;
}());

//# sourceMappingURL=kib-g.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__scanerlayout_scanerlayout__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scanerqrlayout_scanerqrlayout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sensus_sensus__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rekap_rekap__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AllPage } from './../all/all';



















var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, GlobalProvider, statusBar, popoverCtrl, splashScreens, platform, loadingCtrl, storage, toastCtrl, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.splashScreens = splashScreens;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.counter = 0;
        this.dataCode = {};
        this.dataCode.response = '';
        this.animateClass = { 'zoom-in': true };
        this.http = http;
        this.urlService = this.GlobalProvider.url;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreens.hide();
            platform.registerBackButtonAction(function () {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this.exitToast();
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    // console.log("exitapp");
                    platform.exitApp();
                }
            }, 0);
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Started', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.navCtrl.push(HomePage_1);
            refresher.complete();
        }, 3000);
    };
    HomePage.prototype.Sensus = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_17__sensus_sensus__["a" /* SensusPage */]);
    };
    HomePage.prototype.Rekap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__rekap_rekap__["a" /* RekapPage */]);
    };
    HomePage.prototype.exitToast = function () {
        var toast = this.toastCtrl.create({
            message: "Tap untuk keluar",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    HomePage.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.myHandlerFunction = function () {
        this.platform.exitApp();
    };
    HomePage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 7000,
            dismissOnPageChange: true
        }).present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.bannerLoad();
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/menu/dataMenu.php')
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.bannerLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/banner/banner.php')
                .map(function (result) { return result.json(); })
                .subscribe(function (dataBanner) {
                _this.dataBanner = dataBanner.result;
                console.log(dataBanner.result);
            }, function (err) {
                console.log(err);
            });
            loader.dismiss();
        });
    };
    // loadUser(){
    //     this.presentLoading();
    //     this.http.get('http://123.231.253.228/atis/pages/api/api/menu/dataMenu.php')
    //     .map(result => result.json())
    //     .subscribe(data => {
    //       this.data = data.result;
    //       console.log(data.result);
    //
    //     },err => {
    //       console.log(err);
    //     }
    //   );
    // }
    //  page(id) {
    //     this.storage.ready().then(() => {
    //       this.storage.set('backPage', 'back2');
    //     });
    //     var link = this.GlobalProvider.url+'atis/pages/api/api/menu/pageMenu.php';
    //     this.dataCode.id = id;
    //     var myData = JSON.stringify({
    //       id: this.dataCode.id
    //     });
    //     this.http.post(link, myData)
    //     .subscribe(dataCode => {
    //        //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    //       var obj = JSON.parse(dataCode["_body"]);
    //       if(obj.id === "1"){
    //         this.navCtrl.push(AllPage);
    //         this.storage.ready().then(() => {
    //           this.storage.set('pageSession', obj.pageSession);
    //         });
    //         this.storage.get('pageSession').then((val) => {
    //           console.log('Kamu Memilih Page', val);
    //         });
    //       }else{
    //         this.presentToast("Page Tidak Ada!");
    //       }
    //     }, error => {
    //         console.log("Oooops!");
    //     });
    // }
    HomePage.prototype.page = function (kib) {
        var _this = this;
        if (kib === '95') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '95');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '87') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '87');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '88') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '88');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '89') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '89');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '90') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '90');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '91') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '91');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '92') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '92');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '93') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__scanerqrlayout_scanerqrlayout__["a" /* ScanerqrlayoutPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '93');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else if (kib === '94') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__scanerlayout_scanerlayout__["a" /* ScanerlayoutPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '94');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
        }
        else {
            this.presentToast("Page Tidak Ada!");
        }
    };
    HomePage.prototype.route = function (route) {
        if (route == "profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__contact_contact__["a" /* ContactPage */]);
        }
        else if (route == "about") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
        }
        else {
            this.navCtrl.push(HomePage_1);
        }
    };
    HomePage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.Logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT',
            message: 'Apa anda Yakin?',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        localStorage.setItem("username", "logout");
                        localStorage.removeItem("skpdSession");
                        _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_16__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\home\home.html"*/'<ion-header  class="navbar-content">\n  <ion-navbar hideBackButton>\n\n\n     <ion-title style=" color: #ffffff !important;" *ngFor="let itemSetting of data;  let i=index">\n      <div *ngIf="i <= 0">\n       <img src="assets/imgs/logos.png" style="width: 45%;"/>\n      </div>\n     </ion-title>\n\n     <!-- <ion-buttons end>\n       <button ion-button icon-only (click)="ionViewDidLoad()" style="color: white;">\n        <ion-icon ios="ios-more" md="md-more"></ion-icon>\n       </button>\n       \n     </ion-buttons> -->\n\n        <ion-buttons end>\n         <a ion-button icon-only (click)="openPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </a>\n        </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="home-content">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Tarik Kebawah Untuk Refresh."\n        refreshingSpinner="circles">\n      </ion-refresher-content>\n    </ion-refresher>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 style="padding: 0px">\n\n              <ion-slides [ngClass]="animateClass" *ngIf="dataBanner && dataBanner.length"  autoplay="5000" loop="true" pager>\n\n                  <ion-slide *ngFor="let itemBanner of dataBanner">\n                    <img src="{{ urlService }}atis/pages/api/api/images/Colored/{{ itemBanner.image }}">\n                  </ion-slide>\n                \n                \n                </ion-slides>\n           </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n{{result?.data[0].warna}}\n      <ion-col col-4 width-50 (click)="page(item.id)" *ngFor="let item of data" style="padding: 0px" class="menu class{{item.id}}" [ngClass]="animateClass">\n          <ion-card class="menu" style="background: white;">\n\n           <!-- <form>\n            <ion-item>\n              <ion-input type="text" value="{{ item.id_menu_1}}" name="m1" [(ngModel)]="data.m1"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_2}}" name="m2" [(ngModel)]="data.m2"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_3}}" name="m3" [(ngModel)]="data.m3"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_4}}" name="m4" [(ngModel)]="data.m4"></ion-input>\n              <ion-input type="text" value="{{ item.id_menu_5}}" name="m5" [(ngModel)]="data.m5"></ion-input>\n            </ion-item>\n           </form> -->\n\n                <img src="{{ urlService }}atis/pages/api/api/images/Colored/{{ item.icon }}" style="width: 100%;padding: 30%;margin-top: -18%;"/>\n            <ion-card-content style="height: 53px;min-height: 53px;">\n              <ion-card-title style="color: black; ">\n               {{ item.nama }}\n                </ion-card-title>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n\n      <ion-col col-4 width-50 class="menu" (click)="Sensus()" class="menu" style="padding: 0px" [ngClass]="animateClass">\n        <ion-card class="menu" style="background: white;">\n              <img src="assets/imgs/sensus.png" style="width: 100%;padding: 30%;margin-top: -18%;"/>\n          <ion-card-content style="height: 53px;min-height: 53px;">\n            <ion-card-title style="color: black; ">\n             Sensus\n              </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4 width-50 class="menu" (click)="Rekap()" style="padding: 0px" [ngClass]="animateClass">\n        <ion-card class="menu" style="background: white;">\n              <img src="assets/imgs/rekap.png" style="width: 100%;padding: 30%;margin-top: -18%;"/>\n          <ion-card-content style="height: 53px;min-height: 53px;">\n            <ion-card-title style="color: black; ">\n             Rekap\n              </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4 width-50 class="menu" (click)="Logout()" style="padding: 0px" [ngClass]="animateClass">\n      <ion-card class="menu" style="background: white;">\n            <img src="assets/imgs/signout.png" style="width: 100%;padding: 30%;margin-top: -18%;"/>\n        <ion-card-content style="height: 53px;min-height: 53px;">\n          <ion-card-title style="color: black; ">\n           Logout\n            </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n  </ion-col>\n\n    \n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- <ion-fab bottom style="width: 100%;bottom: 0;text-align:  center;background: #ffffff;margin-top: 14px;border-top: 1px solid #afafaf;">\n    <ion-row>\n            <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;">\n                <button  style="color: #1fafdc;" ion-button clear small color="danger" icon-start>\n                        <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                 Home\n                </button>\n              </ion-col>\n        \n            <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;" (click)="route(\'about\')">\n                <button style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n                  <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  About\n                </button>\n           </ion-col>\n\n           <ion-col col-4 (click)="route(\'profile\')" style="padding: 0px;">\n            <button style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n              <ion-icon ios="ios-person" md="md-person"></ion-icon>\n              Profile\n            </button>\n       </ion-col>\n\n    </ion-row>\n  </ion-fab> -->\n  \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rekap7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Rekap7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rekap7Page = /** @class */ (function () {
    function Rekap7Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Rekap7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Rekap7Page');
    };
    Rekap7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap7',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap7\rekap7.html"*/'<!--\n  Generated template for the Rekap7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rekap7</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap7\rekap7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], Rekap7Page);
    return Rekap7Page;
}());

//# sourceMappingURL=rekap7.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
var ResultSearchPage = /** @class */ (function () {
    function ResultSearchPage(camera, toastCtrl, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.products = [];
        this.productFound = false;
        this.dataCode = {};
        this.dataNama = {};
        this.http = http;
        this.dataCode.response = '';
    }
    ResultSearchPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    ResultSearchPage.prototype.ionViewDidLoad = function () {
        this.loadUser();
    };
    ResultSearchPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    ResultSearchPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    ResultSearchPage.prototype.takePhoto = function (id) {
        var _this = this;
        var options = {
            quality: 40,
            targetWidth: 600,
            targetHeight: 400,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.loadUser();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    ResultSearchPage.prototype.takePhotoGalery = function (id) {
        var _this = this;
        var options = {
            quality: 40,
            targetWidth: 600,
            targetHeight: 400,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = 'http://123.231.253.228/atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.loadUser();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    ResultSearchPage.prototype.loadUser = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                _this.http.get('http://123.231.253.228/atis/pages/api/api/cardData/cardData.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (data) {
                    _this.data = data.result;
                    console.log(data.result);
                }, function (err) {
                    console.log(err);
                });
                loader.dismiss();
            });
        });
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.presentLoading();
            _this.http.get('http://123.231.253.228/atis/pages/api/api/galery/galery2.php?id=' + val)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataGalery) {
                _this.dataGalery = dataGalery.result;
                console.log(dataGalery.result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ResultSearchPage.prototype.page = function (id) {
        var _this = this;
        var link = 'http://123.231.253.228/atis/pages/api/api/menu/pageMenu.php';
        this.dataCode.id = id;
        var myData = JSON.stringify({
            id: this.dataCode.id
        });
        this.http.post(link, myData)
            .subscribe(function (dataCode) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(dataCode["_body"]);
            if (obj.id === "1") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_all__["a" /* AllPage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('pageSession', obj.pageSession);
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                });
            }
            else {
                _this.presentToast("Page Tidak Ada!");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ResultSearchPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResultSearchPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    ResultSearchPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ResultSearchPage.prototype, "nav", void 0);
    ResultSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result-search',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\result-search\result-search.html"*/'<!--\n  Generated template for the CardlayoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar hideBackButton>\n        <ion-title *ngFor="let itemNama of data;  let i=index">\n          <div *ngIf="i < 1">\n              {{ itemNama.namaPage }}\n          </div>\n        </ion-title>\n  \n        <ion-buttons end>\n          <button ion-button icon-only (click)="search()" style="color: white;">\n              <ion-icon ios="ios-search" md="md-search"></ion-icon>\n          </button>\n          <button ion-button icon-only (click)="loadUser()" style="color: white;">\n             <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon>\n          </button>\n          <button ion-button icon-only (click)="home()" style="color: white;">\n            <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n  \n  </ion-header>\n  \n  \n  \n  <ion-content class="cards-bg">\n  \n  <ion-card  *ngFor="let item of data" >\n  \n  \n  \n    <ion-slides pager *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n      <div *ngFor="let itemGalery of dataGalery">\n          <ion-slide *ngIf="item.plu == itemGalery.id_menu">\n              <img  src="http://123.231.253.228/atis/pages/api/api/images/Colored/{{ itemGalery.gambar }}" />\n          </ion-slide>\n       \n      </div>\n      <div *ngIf="dataGalery">\n  \n        <img *ngIf="item.plu != dataGalery.id_menu" src="http://123.231.253.228/atis/pages/api/api/images/Colored/Default.png"/>\n    </div>\n      \n  \n    </ion-slides>\n  \n    <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n      <ion-card-title>\n        {{ item.nama }}\n      </ion-card-title>\n  \n      <ion-item *ngIf="item.nama1">\n        {{ item.nama1 }}\n        <ion-note item-end>\n          {{ item.field1 }}\n        </ion-note>\n      </ion-item>\n  \n      <ion-item *ngIf="item.nama2">\n        {{ item.nama2 }}\n        <ion-note item-end>\n          {{ item.field2 }}\n        </ion-note>\n      </ion-item>\n      \n      <ion-item *ngIf="item.nama3">\n        {{ item.nama3 }}\n        <ion-note item-end>\n          {{ item.field3 }}\n        </ion-note>\n      </ion-item>\n  \n      <ion-item *ngIf="item.nama4">\n        {{ item.nama4 }}\n        <ion-note item-end>\n          {{ item.field4 }}\n        </ion-note>\n      </ion-item>\n  \n      <ion-item *ngIf="item.nama5">\n        {{ item.nama5 }}\n        <ion-note item-end>\n          {{ item.field5 }}\n        </ion-note>\n      </ion-item>\n  \n    </ion-card-content>\n  \n    <ion-row no-padding *ngIf="item.namaPage != \'Data Page Tidak Ada!\'" \n    style="\n    text-align: center;\n    border-top: 1px solid #e8e3e3;\n    ">\n      <!-- <ion-col>\n        <button ion-button clear small color="danger" icon-start (click)="page(item.id)">\n          <ion-icon name=\'search\'></ion-icon>\n          View More\n        </button>\n      </ion-col> -->\n  \n      <ion-col \n      style="\n      border-right: 1px solid #e9e9e9;\n      ">\n          <button style="color: #00c2ff;" ion-button clear small color="danger" icon-start (click)="takePhotoGalery(item.plu)">\n              <ion-icon ios="ios-images" md="md-images"></ion-icon>\n            Upload\n          </button>\n        </ion-col>\n  \n      <ion-col>\n          <button style="color: #007aff;" ion-button clear small color="danger" icon-start (click)="takePhoto(item.plu)">\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n            Foto\n          </button>\n        </ion-col>\n  \n    </ion-row>\n  \n  \n  </ion-card>\n  \n  \n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\result-search\result-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], ResultSearchPage);
    return ResultSearchPage;
}());

//# sourceMappingURL=result-search.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_all_all__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listlayout_listlayout__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cardlayout_cardlayout__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_basiclayout_basiclayout__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_scanerlayout_scanerlayout__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_scanerqrlayout_scanerqrlayout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_result_search_result_search__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sort_sort__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sensus_sensus__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_kib_a_kib_a__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_kib_b_kib_b__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_kib_c_kib_c__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_kib_d_kib_d__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_kib_e_kib_e__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_kib_f_kib_f__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_kib_g_kib_g__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_popover_card_popover_card__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_rekap_rekap__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_rekap2_rekap2__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_rekap3_rekap3__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_rekap4_rekap4__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_rekap5_rekap5__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_rekap6_rekap6__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_rekap7_rekap7__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_menu_menu__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_barcode_scanner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_data_service_data_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_toast__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_social_sharing__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_photo_viewer__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listlayout_listlayout__["a" /* ListlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapslayout_mapslayout__["a" /* MapslayoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cardlayout_cardlayout__["a" /* CardlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_carddata_carddata__["a" /* CarddataPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_result_search_result_search__["a" /* ResultSearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_kib_a_kib_a__["a" /* KibAPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_kib_b_kib_b__["a" /* KibBPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_kib_c_kib_c__["a" /* KibCPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_kib_d_kib_d__["a" /* KibDPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_kib_e_kib_e__["a" /* KibEPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_kib_f_kib_f__["a" /* KibFPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_kib_g_kib_g__["a" /* KibGPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sensus_sensus__["a" /* SensusPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_popover_home_popover_home__["a" /* PopoverHomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_popover_card_popover_card__["a" /* PopoverCardPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rekap_rekap__["a" /* RekapPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_rekap2_rekap2__["a" /* Rekap2Page */],
                __WEBPACK_IMPORTED_MODULE_36__pages_rekap3_rekap3__["a" /* Rekap3Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rekap4_rekap4__["a" /* Rekap4Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rekap5_rekap5__["a" /* Rekap5Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_rekap6_rekap6__["a" /* Rekap6Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_rekap7_rekap7__["a" /* Rekap7Page */],
                __WEBPACK_IMPORTED_MODULE_41__pages_rekap_detail_rekap_detail__["a" /* RekapDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_cari_skpd_cari_skpd__["a" /* CariSkpdPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_basiclayout_basiclayout__["a" /* BasiclayoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_scanerlayout_scanerlayout__["a" /* ScanerlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_scanerqrlayout_scanerqrlayout__["a" /* ScanerqrlayoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/basiclayout/basiclayout.module#BasiclayoutPageModule', name: 'BasiclayoutPage', segment: 'basiclayout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carddata/carddata.module#CarddataPageModule', name: 'CarddataPage', segment: 'carddata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cardlayout/cardlayout.module#CardlayoutPageModule', name: 'CardlayoutPage', segment: 'cardlayout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cari-skpd/cari-skpd.module#CariSkpdPageModule', name: 'CariSkpdPage', segment: 'cari-skpd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap-detail/rekap-detail.module#RekapDetailPageModule', name: 'RekapDetailPage', segment: 'rekap-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap/rekap.module#RekapPageModule', name: 'RekapPage', segment: 'rekap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap2/rekap2.module#Rekap2PageModule', name: 'Rekap2Page', segment: 'rekap2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap3/rekap3.module#Rekap3PageModule', name: 'Rekap3Page', segment: 'rekap3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap4/rekap4.module#Rekap4PageModule', name: 'Rekap4Page', segment: 'rekap4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap5/rekap5.module#Rekap5PageModule', name: 'Rekap5Page', segment: 'rekap5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap6/rekap6.module#Rekap6PageModule', name: 'Rekap6Page', segment: 'rekap6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rekap7/rekap7.module#Rekap7PageModule', name: 'Rekap7Page', segment: 'rekap7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result-search/result-search.module#ResultSearchPageModule', name: 'ResultSearchPage', segment: 'result-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanerlayout/scanerlayout.module#ScanerlayoutPageModule', name: 'ScanerlayoutPage', segment: 'scanerlayout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanerqrlayout/scanerqrlayout.module#ScanerqrlayoutPageModule', name: 'ScanerqrlayoutPage', segment: 'scanerqrlayout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensus/sensus.module#SensusPageModule', name: 'SensusPage', segment: 'sensus', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listlayout_listlayout__["a" /* ListlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapslayout_mapslayout__["a" /* MapslayoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cardlayout_cardlayout__["a" /* CardlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_carddata_carddata__["a" /* CarddataPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_kib_a_kib_a__["a" /* KibAPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_kib_b_kib_b__["a" /* KibBPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_kib_c_kib_c__["a" /* KibCPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_kib_d_kib_d__["a" /* KibDPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_kib_e_kib_e__["a" /* KibEPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_kib_f_kib_f__["a" /* KibFPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_kib_g_kib_g__["a" /* KibGPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sensus_sensus__["a" /* SensusPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_popover_home_popover_home__["a" /* PopoverHomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_popover_card_popover_card__["a" /* PopoverCardPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rekap_rekap__["a" /* RekapPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_rekap2_rekap2__["a" /* Rekap2Page */],
                __WEBPACK_IMPORTED_MODULE_36__pages_rekap3_rekap3__["a" /* Rekap3Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rekap4_rekap4__["a" /* Rekap4Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rekap5_rekap5__["a" /* Rekap5Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_rekap6_rekap6__["a" /* Rekap6Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_rekap7_rekap7__["a" /* Rekap7Page */],
                __WEBPACK_IMPORTED_MODULE_41__pages_rekap_detail_rekap_detail__["a" /* RekapDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_cari_skpd_cari_skpd__["a" /* CariSkpdPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_result_search_result_search__["a" /* ResultSearchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_basiclayout_basiclayout__["a" /* BasiclayoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_scanerlayout_scanerlayout__["a" /* ScanerlayoutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_scanerqrlayout_scanerqrlayout__["a" /* ScanerqrlayoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_46__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_51__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapslayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MapslayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapslayoutPage = /** @class */ (function () {
    function MapslayoutPage(socialSharing, navCtrl, navParams, geolocation, loadingCtrl, http) {
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.ionViewDidLoad();
        this.idbi = navParams.get('idbi');
        this.table = navParams.get('table');
    }
    MapslayoutPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapslayoutPage.prototype.loadMap = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get('http://123.231.253.228/atis/pages/api/api/KIBA/detail/data.php?id=' + _this.idbi + '&table=' + _this.table)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                _this.geolocation.getCurrentPosition().then(function (position) {
                    //  position.coords.latitude
                    //  position.coords.longitude
                    //  let lat = position.coords.latitude;
                    //  let lang = position.coords.longitude
                    var latLng = new google.maps.LatLng(data.result[0].lat, data.result[0].lang);
                    var mapOptions = {
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                    // var icons = {
                    //   tanah: {
                    //     icon: '../assets/imgs/pin_tanah.png'
                    //   }
                    // };
                    var contentString = '<style>td, th{padding: 5px;}</style>' +
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h6 id="firstHeading" class="firstHeading">' + data.result[0].nm_barang + '</h6>' +
                        '<div id="bodyContent">' +
                        '<table>' +
                        '<tr>' +
                        '<td>Urusan </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].urusan + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Bidang </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].bidang + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>SKPD </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].skpd + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Unit </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].unit + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Sub Unit </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].subUnit + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Alamat </td>' +
                        '<td> : </td>' +
                        '<td> ' + data.result[0].alamat + '</td>' +
                        '</tr>' +
                        '</table>';
                    '</div>' +
                        '</div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 300
                    });
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: _this.map,
                        title: 'Uluru (Ayers Rock)'
                    });
                    marker.addListener('click', function () {
                        infowindow.open(this.map, marker);
                    });
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
            loader.dismiss();
        });
    };
    MapslayoutPage.prototype.function = function (success) {
        console.log(success);
    };
    // shareWA(lat,lang){
    //   var url = 'www.fb.com';
    //   var gambar = 'https://cdn0.iconfinder.com/data/icons/flat-online-2/64/gps_pin_location_map_mapquest_google_maps-512.png';
    //   this.socialSharing.shareViaWhatsApp('message', gambar, url).then(() => {
    //     console.log('success' + lat +" , "+ lang);
    //   }).catch(() => {
    //     console.log('Error' + lat +" , "+ lang);
    //   });
    // }
    MapslayoutPage.prototype.shareWA = function (lat, lang, nama) {
        var url = 'https://www.google.com/maps?q=' + lat + ',' + lang + '&z=17';
        // var gambar = 'assets/imgs/lokasi.png';
        var judul = 'Alamat Lokasi ' + nama + '.';
        this.socialSharing.shareViaWhatsApp(judul, null, url).then(function () {
            console.log('success' + lat + " , " + lang);
        }).catch(function () {
            console.log('Error' + lat + " , " + lang);
        });
    };
    MapslayoutPage.prototype.shareFB = function (lat, lang, nama) {
        var url = 'https://www.google.com/maps?q=' + lat + ',' + lang + '&z=17';
        // var gambar = 'assets/imgs/lokasi.png';
        var judul = 'Alamat Lokasi ' + nama + '.';
        this.socialSharing.shareViaFacebook(judul, null, url).then(function () {
            console.log('success' + lat + " , " + lang);
        }).catch(function () {
            console.log('Error' + lat + " , " + lang);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapslayoutPage.prototype, "mapElement", void 0);
    MapslayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapslayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\mapslayout\mapslayout.html"*/'<!--\n  Generated template for the MapslayoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Tempat / Lokasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-fab top right edge>\n        <button ion-fab mini><ion-icon name="share-alt"></ion-icon></button>\n        <ion-fab-list *ngFor="let item of data">\n          <button ion-fab (click)="shareWA(item.lat , item.lang , item.nm_barang)" style="color: #27982b;"><ion-icon ios="logo-whatsapp" md="logo-whatsapp"></ion-icon></button>\n          <!-- <button ion-fab (click)="shareFB(item.lat , item.lang , item.nm_barang)" style="color: #277898;"><ion-icon name="logo-facebook"></ion-icon></button> -->\n        </ion-fab-list>\n      </ion-fab>\n\n  <div style="width:100%; height:100%" #map="" id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\mapslayout\mapslayout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MapslayoutPage);
    return MapslayoutPage;
}());

//# sourceMappingURL=mapslayout.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PopoverHomePage = /** @class */ (function () {
    function PopoverHomePage(viewCtrl, loadingCtrl, alertCtrl, navCtrl, navParams, appCtrl) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
    }
    PopoverHomePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverHomePage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    PopoverHomePage.prototype.Profile = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    PopoverHomePage.prototype.About = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    PopoverHomePage.prototype.Menu = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    PopoverHomePage.prototype.Logout = function () {
        var _this = this;
        this.close();
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT',
            message: 'Apa anda Yakin?',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        localStorage.setItem("username", "logout");
                        localStorage.removeItem("skpdSession");
                        _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    PopoverHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\popover-home\popover-home.html"*/'<ion-list >\n  <button class="popover-item" ion-item (click)="Menu()">Menu Utama</button>\n  <button class="popover-item" ion-item (click)="Profile()">Profile</button>\n  <button class="popover-item" ion-item (click)="About()">About</button>\n  <button class="popover-item" ion-item (click)="Logout()">Logout</button>\n</ion-list>'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\popover-home\popover-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PopoverHomePage);
    return PopoverHomePage;
}());

//# sourceMappingURL=popover-home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_scanerlayout_scanerlayout__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_scanerqrlayout_scanerqrlayout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sensus_sensus__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rekap_rekap__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var page;
var username = localStorage.getItem("username");
if (username === "logout" || username === undefined || username === null) {
    page = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
}
else {
    page = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
}
var MyApp = /** @class */ (function () {
    function MyApp(appCtrl, toastCtrl, storage, menuCtrl, platform, statusBar, splashScreen) {
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = page;
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.Sensus = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_sensus_sensus__["a" /* SensusPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.Rekap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_rekap_rekap__["a" /* RekapPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MyApp.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyApp.prototype.page = function (kib) {
        var _this = this;
        if (kib === 'kiba') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '95');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibb') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '87');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibc') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '88');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibd') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '89');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibe') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '90');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibf') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '91');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'kibg') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_carddata_carddata__["a" /* CarddataPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '92');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'qrcode') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_scanerqrlayout_scanerqrlayout__["a" /* ScanerqrlayoutPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '93');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else if (kib === 'barcode') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_scanerlayout_scanerlayout__["a" /* ScanerlayoutPage */]);
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '94');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.menuCtrl.close();
        }
        else {
            this.presentToast("Page Tidak Ada!");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\app\app.html"*/'<ion-menu [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>MENU</ion-title>\n\n      <ion-buttons end>\n            <button ion-button icon-only (click)="closeMenu()">\n                    <ion-icon name="arrow-round-back"></ion-icon>\n            </button>\n          </ion-buttons>\n    </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-content>\n    <ion-list style="margin: -1px 0 -2px !important;" >\n          <img src="assets/imgs/kiba.png" (click)="page(\'kiba\')" />\n    </ion-list>\n    <ion-list style="margin: -1px 0 -2px !important;" >\n        <img src="assets/imgs/kibb.png" (click)="page(\'kibb\')"/>\n    </ion-list>\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'kibc\')">\n        <img src="assets/imgs/kibc.png"/>\n    </ion-list>\n    \n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'kibd\')">\n        <img src="assets/imgs/kibd.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'kibe\')">\n        <img src="assets/imgs/kibe.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'kibf\')">\n        <img src="assets/imgs/kibf.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'kibg\')">\n        <img src="assets/imgs/kibg.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'barcode\')">\n        <img src="assets/imgs/barcode.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="page(\'qrcode\')">\n        <img src="assets/imgs/qrcode.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="Sensus()">\n        <img src="assets/imgs/sensusT.png"/>\n    </ion-list>\n\n    <ion-list style="margin: -1px 0 -2px !important;" (click)="Rekap()">\n        <img src="assets/imgs/rekapT.png"/>\n    </ion-list>\n    \n</ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PopoverCardPage = /** @class */ (function () {
    function PopoverCardPage(viewCtrl, loadingCtrl, alertCtrl, navCtrl, navParams, appCtrl) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
    }
    PopoverCardPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverCardPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    PopoverCardPage.prototype.Profile = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    PopoverCardPage.prototype.About = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    PopoverCardPage.prototype.Menu = function () {
        this.close();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    PopoverCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-card',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\popover-card\popover-card.html"*/'<ion-list >\n    <button class="popover-item" ion-item (click)="About()">About</button>\n    <button class="popover-item" ion-item (click)="Profile()">Profile</button>\n    <button class="popover-item" ion-item (click)="Menu()">Menu</button>\n  </ion-list>'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\popover-card\popover-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PopoverCardPage);
    return PopoverCardPage;
}());

//# sourceMappingURL=popover-card.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarddataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sort_sort__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kib_a_kib_a__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kib_b_kib_b__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kib_c_kib_c__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kib_d_kib_d__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__kib_e_kib_e__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__kib_f_kib_f__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__kib_g_kib_g__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popover_home_popover_home__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
var CarddataPage = /** @class */ (function () {
    function CarddataPage(GlobalProvider, popoverCtrl, menuCtrl, actionSheetCtrl, photoViewer, platform, camera, toastCtrl, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.users = [];
        this.pages = 0;
        this.maximumPages = 0;
        this.products = [];
        this.productFound = false;
        this.dataCode = {};
        this.dataNama = {};
        this.http = http;
        this.animateClass = { 'zoom-in': true };
        this.dataCode.response = '';
        this.searchS = navParams.get('search');
        this.sortS = navParams.get('sort');
        this.skpd = navParams.get('skpd');
        this.kodeBarangRekap = navParams.get('kodeBarangRekap');
        this.urlService = this.GlobalProvider.url;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    CarddataPage_1 = CarddataPage;
    CarddataPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        // this.navCtrl.push(HomePage);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_20__home_home__["a" /* HomePage */]);
        this.menuCtrl.close();
    };
    CarddataPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Started', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.navCtrl.push(CarddataPage_1);
            refresher.complete();
        }, 3000);
    };
    CarddataPage.prototype.openSideMenu = function () {
        this.menuCtrl.enable(true);
        this.menuCtrl.toggle();
    };
    CarddataPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    CarddataPage.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_21__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    CarddataPage.prototype.loadImageGallery = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/galery/galery2.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataGalery) {
                    _this.dataGalery = dataGalery.result;
                    console.log(dataGalery.result);
                    loader.dismiss();
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    CarddataPage.prototype.ionViewDidLoad = function () {
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
    };
    CarddataPage.prototype.hapusImage = function (url, id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var link = this.GlobalProvider.url + 'atis/pages/api/api/hapusGambar/hapusGambar.php';
        var myData = JSON.stringify({ gambar: url, id: id });
        // this.loadImageGallery();
        loader.present().then(function () {
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Hapus Gambar!");
                    // this.loadImageGallery();
                    _this.loadImageGallery();
                }
                else {
                    _this.presentToast("Gagal Hapus Gambar");
                }
                loader.dismiss();
            }, function (error) {
                console.log("Oooops!");
            });
        });
    };
    CarddataPage.prototype.viewImage = function (url) {
        this.photoViewer.show(this.GlobalProvider.url + 'atis/pages/api/api/images/Colored/' + url);
        console.log(this.GlobalProvider.url + 'atis/pages/api/api/images/Colored/' + url);
    };
    CarddataPage.prototype.action = function (url, id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ',
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Image',
                    role: 'destructive',
                    handler: function () {
                        _this.viewImage(url);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Hapus Image',
                    handler: function () {
                        _this.hapusImage(url, id);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CarddataPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    CarddataPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    CarddataPage.prototype.takePhoto = function (id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var options = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.base64Image;
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            // this.loadUser('hilih');
            // this.loadImageGallery();
            loader.present().then(function () {
                _this.http.post(link, myData)
                    .subscribe(function (data) {
                    var obj = JSON.parse(data["_body"]);
                    if (obj.id === "1") {
                        _this.presentToast("Berhasil Upload!");
                        // this.loadUser('hilih');
                        _this.loadImageGallery();
                        _this.loadImageGallery();
                        console.log("hime hime" + obj.hasil);
                    }
                    else {
                        _this.presentToast("Gagal Upload");
                    }
                    loader.dismiss();
                }, function (error) {
                    console.log("Oooops!");
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    CarddataPage.prototype.takePhotoGalery = function (id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var options = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        // this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.base64Image;
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            // this.loadUser('hilih');
            // this.loadImageGallery();
            loader.present().then(function () {
                _this.http.post(link, myData)
                    .subscribe(function (data) {
                    var obj = JSON.parse(data["_body"]);
                    if (obj.id === "1") {
                        _this.presentToast("Berhasil Upload!");
                        // this.loadUser('hilih');
                        _this.loadImageGallery();
                        _this.loadImageGallery();
                        console.log("hime hime" + obj.hasil);
                    }
                    else {
                        _this.presentToast("Gagal Upload");
                    }
                    loader.dismiss();
                }, function (error) {
                    console.log("Oooops!");
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    CarddataPage.prototype.loadUser = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === 'hilih') {
            console.log('Kontoru deska');
            var loader_1 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            loader_1.present().then(function () {
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    var pages = 0;
                    var dataSearch = _this.searchS;
                    if (dataSearch === undefined) {
                        dataSearch = "";
                    }
                    else {
                        dataSearch = _this.searchS;
                    }
                    var dataSort = _this.sortS;
                    if (dataSort === undefined) {
                        dataSort = "";
                    }
                    else {
                        dataSort = _this.sortS;
                    }
                    _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/cardData/cardData.php?id=' + val + '&skpdSession' + localStorage.getItem("skpdSession") + '&skpd=' + localStorage.getItem("skpdOperator") + '&skpdRekap=' + _this.skpd + '&kodeBarangRekap=' + _this.kodeBarangRekap + '&page=' + pages + dataSort + dataSearch)
                        .map(function (result) { return result.json(); })
                        .subscribe(function (data) {
                        _this.data = data.result;
                        _this.users = data.result;
                        loader_1.dismiss();
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                var pages = 0;
                var dataSearch = _this.searchS;
                if (dataSearch === undefined) {
                    dataSearch = "";
                }
                else {
                    dataSearch = _this.searchS;
                }
                var dataSort = _this.sortS;
                if (dataSort === undefined) {
                    dataSort = "";
                }
                else {
                    dataSort = _this.sortS;
                }
                _this.presentLoading();
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/galery/galery2.php?id=' + val + '&skpdSession' + localStorage.getItem("skpdSession") + '&skpd=' + localStorage.getItem("skpdOperator") + '&skpdRekap=' + _this.skpd + '&kodeBarangRekap=' + _this.kodeBarangRekap + '&page=' + pages + dataSort + dataSearch)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataGalery) {
                    _this.dataGalery = dataGalery.result;
                    console.log(dataGalery.result);
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            var loader_2 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            loader_2.present().then(function () {
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    // var pages = this.pages;
                    var dataSearch = _this.searchS;
                    if (dataSearch === undefined) {
                        dataSearch = "";
                    }
                    else {
                        dataSearch = _this.searchS;
                    }
                    var dataSort = _this.sortS;
                    if (dataSort === undefined) {
                        dataSort = "";
                    }
                    else {
                        dataSort = _this.sortS;
                    }
                    _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/cardData/cardData.php?id=' + val + '&skpdSession' + localStorage.getItem("skpdSession") + '&skpd=' + localStorage.getItem("skpdOperator") + '&skpdRekap=' + _this.skpd + '&kodeBarangRekap=' + _this.kodeBarangRekap + '&page=' + _this.pages + dataSort + dataSearch)
                        .map(function (result) { return result.json(); })
                        .subscribe(function (data) {
                        _this.data = data.result;
                        _this.users = _this.users.concat(data['result']);
                        if (infiniteScroll) {
                            infiniteScroll.complete();
                            console.log(data.result);
                        }
                        loader_2.dismiss();
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                // var pages = this.pages;
                var dataSearch = _this.searchS;
                if (dataSearch === undefined) {
                    dataSearch = "";
                }
                else {
                    dataSearch = _this.searchS;
                }
                var dataSort = _this.sortS;
                if (dataSort === undefined) {
                    dataSort = "";
                }
                else {
                    dataSort = _this.sortS;
                }
                // this.http.get(this.GlobalProvider.url+'atis/pages/api/api/galery/galery2.php?id='+val+'&page='+pages+dataSort+dataSearch)
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/galery/galery2.php?id=' + val + dataSort + dataSearch)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataGalery) {
                    _this.dataGalery = dataGalery.result;
                    console.log(dataGalery.result);
                }, function (err) {
                    console.log(err);
                });
            });
        }
    };
    CarddataPage.prototype.UploadImage = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Upload Foto',
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'camera' : null,
                    text: 'Ambil Foto Sekarang',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                        _this.takePhoto(id);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'images' : null,
                    text: 'Ambil Foto di Gallery',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.takePhotoGalery(id);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CarddataPage.prototype.page = function (id) {
        var _this = this;
        var link = this.GlobalProvider.url + 'atis/pages/api/api/menu/pageMenu.php';
        this.dataCode.id = id;
        var myData = JSON.stringify({
            id: this.dataCode.id
        });
        this.http.post(link, myData)
            .subscribe(function (dataCode) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(dataCode["_body"]);
            if (obj.id === "1") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_all__["a" /* AllPage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('pageSession', obj.pageSession);
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                });
            }
            else {
                _this.presentToast("Page Tidak Ada!");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    CarddataPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // home(){
    //   this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
    // }
    CarddataPage.prototype.home = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_20__home_home__["a" /* HomePage */]);
    };
    CarddataPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    CarddataPage.prototype.sort = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__sort_sort__["a" /* SortPage */]);
    };
    CarddataPage.prototype.view = function (table, id) {
        if (table == 'view_kib_a') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__kib_a_kib_a__["a" /* KibAPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_b') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__kib_b_kib_b__["a" /* KibBPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_c') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__kib_c_kib_c__["a" /* KibCPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_d') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__kib_d_kib_d__["a" /* KibDPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_e') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__kib_e_kib_e__["a" /* KibEPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_f') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__kib_f_kib_f__["a" /* KibFPage */], {
                plu: id
            });
        }
        else if (table == 'view_kib_g') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__kib_g_kib_g__["a" /* KibGPage */], {
                plu: id
            });
        }
        else {
            console.log("None");
        }
    };
    // loadUsers(infiniteScroll?) {
    //   this.http.get('https://randomuser.me/api/?results=20&page='+this.pages)
    //   .subscribe(res => {
    //     this.users = this.users.concat(res['results']);
    //     if (infiniteScroll) {
    //       infiniteScroll.complete();
    //     }
    //   })
    // }
    CarddataPage.prototype.loadMore = function (jumlah, infiniteScroll) {
        this.pages++;
        var max = jumlah + 1;
        console.log(this.pages + "===" + max);
        if (this.pages === max) {
            infiniteScroll.enable(false);
        }
        else {
            this.loadUser(infiniteScroll);
        }
    };
    CarddataPage.prototype.refresh = function () {
        this.ionViewDidLoad();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], CarddataPage.prototype, "nav", void 0);
    CarddataPage = CarddataPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carddata',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\carddata\carddata.html"*/'<!--\n  Generated template for the CardlayoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n\n        <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n          \n    \n      <ion-title *ngFor="let itemNama of data;  let i=index" style="text-align: center">\n        <div *ngIf="i < 1">\n            {{ itemNama.namaPage }}\n        </div>\n      </ion-title>\n\n   \n\n\n    \n      <!-- <ion-buttons end>\n\n        <button ion-button icon-only (click)="search()" style="color: white;">\n            <ion-icon ios="ios-search" md="md-search"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="refresh()" style="color: white;">\n           <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="home()" style="color: white;">\n          <ion-icon name="md-arrow-round-back"></ion-icon>\n        </button>\n      </ion-buttons> -->\n\n      <ion-buttons end>\n            <a ion-button icon-only (click)="openPopover($event)">\n             <ion-icon name="more"></ion-icon>\n           </a>\n      </ion-buttons>\n \n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Tarik Kebawah Untuk Refresh."\n          refreshingSpinner="circles">\n        </ion-refresher-content>\n      </ion-refresher>\n \n      \n<ion-card  *ngFor="let item of users" [ngClass]="animateClass">\n\n\n\n  <ion-slides pager *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n    <div *ngFor="let itemGalery of dataGalery">\n        <ion-slide *ngIf="item.plu == itemGalery.id_menu" class="crop">\n            <img (click)="action(itemGalery.gambar,itemGalery.id_menu)" src="{{ urlService }}atis/pages/api/api/images/Colored/{{ itemGalery.gambar }}" />\n        </ion-slide>\n    </div>\n    <div>\n      <img  src="assets/imgs/Default.png"/>\n  </div>\n    \n\n  </ion-slides>\n\n  <ion-card-content *ngIf="item.namaPage != \'Data Page Tidak Ada!\'">\n    <ion-card-title>\n      {{ item.field1 }}\n    </ion-card-title>\n\n    <ion-item text-wrap *ngIf="item.luas">\n        <b><h2>Luas</h2></b>\n        <h3>\n            {{ item.luas }}\n        </h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.harga">\n        <b><h2>Harga</h2></b>\n        <!-- <h3>{{ item.harga }}</h3> -->\n        <h3>\n            {{ item.harga }}\n        </h3>\n    </ion-item>\n\n   <ion-item text-wrap *ngIf="item.field2 && item.nama2 !=\'Luas\' && item.nama2 !=\'Harga\'">\n        <b><h2>{{ item.nama2 }}</h2></b>\n        <h3>\n            {{ item.field2 }}\n        </h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.field3 && item.nama3 !=\'Luas\' && item.nama3 !=\'Harga\'">\n        <b><h2>{{ item.nama3 }}</h2></b>\n        <h3>\n            {{ item.field3 }}\n        </h3>\n    </ion-item>\n\n    <!-- <ion-item text-wrap *ngIf="item.field4 && item.nama4 !=\'Luas\' && item.nama4 !=\'Harga\'">\n        <b><h2>{{ item.nama4 }}</h2></b>\n        <h3>\n            {{ item.field4 }}\n        </h3>\n    </ion-item>\n    <ion-item text-wrap *ngIf="item.field5 && item.nama5 !=\'Luas\' && item.nama5 !=\'Harga\'">\n        <b><h2>{{ item.nama5 }}</h2></b>\n        <h3>\n            {{ item.field5 }}\n        </h3>\n    </ion-item>\n     \n    <ion-item text-wrap *ngIf="item.field6 && item.nama6 !=\'Luas\' && item.nama6 !=\'Harga\'">\n        <b><h2>{{ item.nama6 }}</h2></b>\n        <h3>\n            {{ item.field6 }}\n        </h3>\n    </ion-item>\n    \n    <ion-item text-wrap *ngIf="item.field7 && item.nama7 !=\'Luas\' && item.nama7 !=\'Harga\'">\n        <b><h2>{{ item.nama7 }}</h2></b>\n                <h3>\n            {{ item.field7 }}\n                </h3>\n    </ion-item>\n    \n    <ion-item  text-wrap *ngIf="item.field8 && item.nama8 !=\'Luas\' && item.nama8 !=\'Harga\'">\n        <b><h2>{{ item.nama8 }}</h2></b>\n                <h3>\n            {{ item.field8 }}\n                </h3>\n    </ion-item>\n    \n    <ion-item text-wrap *ngIf="item.field9 && item.nama9 !=\'Luas\' && item.nama9 !=\'Harga\'">\n        <b><h2>{{ item.nama9 }}</h2></b>\n                <h3>\n            {{ item.field9 }}\n                </h3>\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="item.field10 && item.nama10 !=\'Luas\' && item.nama10 !=\'Harga\'">\n        <b><h2>{{ item.nama10 }}</h2></b>\n                <h3>\n            {{ item.field10 }}\n                </h3>\n    </ion-item>  -->\n\n\n  </ion-card-content>\n\n  <ion-row no-padding *ngIf="item.namaPage != \'Data Page Tidak Ada!\'" \n  style="\n  text-align: center;\n  border-top: 1px solid #e8e3e3;\n  ">\n    <!-- <ion-col>\n      <button ion-button clear small color="danger" icon-start (click)="page(item.id)">\n        <ion-icon name=\'search\'></ion-icon>\n        View More\n      </button>\n    </ion-col> -->\n\n    <ion-col  style="border-right: 1px solid #e9e9e9;">\n        <button style="color: #fd7694;" ion-button clear small color="danger" icon-start (click)="view(data[0].namaTable,item.plu)">\n            <ion-icon ios="ios-eye" md="md-eye"></ion-icon>\n          View\n        </button>\n      </ion-col>\n\n    <ion-col style="border-right: 1px solid #e9e9e9;">\n        <button style="color: #00c2ff;" ion-button clear small color="danger" icon-start (click)="UploadImage(item.plu)">\n            <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n          Upload\n        </button>\n      </ion-col>\n\n    <!-- <ion-col>\n        <button style="color: #007aff;" ion-button clear small color="danger" icon-start (click)="takePhoto(item.plu)">\n            <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n          Foto\n        </button>\n      </ion-col> -->\n\n  </ion-row>\n\n\n</ion-card>\n\n<ion-card *ngFor="let itemNama of data;  let i=index">\n    <div *ngIf="i < 1">\n      <ion-infinite-scroll *ngIf=\'itemNama.jumlah != 0\' (ionInfinite)="loadMore(itemNama.jumlah, $event)" loadingSpinner="bubbles" loadingText="Loading...">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</div>\n</ion-card>\n<ion-card>\n</ion-card>\n<ion-card>    \n</ion-card>\n\n        <ion-fab bottom style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n            <ion-row>\n                    <ion-col style="border-right: 1px solid #c5bcbc;"  (click)="sort()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" icon-start>\n                           <span style="color: #fff; font-size: 13px !important;">\n                            <ion-icon ios="ios-options" md="md-options"></ion-icon>\n                               URUTKAN\n                           </span>\n                        </button>\n                      </ion-col>\n                \n                    <ion-col (click)="search()">\n                        <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" icon-start>\n                            <span style="color: #fff; font-size: 13px !important;">\n                                <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                CARI\n                            </span>  \n                        </button>\n                   </ion-col>\n            </ion-row>\n          </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\carddata\carddata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], CarddataPage);
    return CarddataPage;
    var CarddataPage_1;
}());

//# sourceMappingURL=carddata.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RekapDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RekapDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RekapDetailPage = /** @class */ (function () {
    function RekapDetailPage(GlobalProvider, appCtrl, storage, loadingCtrl, http, viewCtrl, navCtrl, navParams) {
        this.GlobalProvider = GlobalProvider;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.f = navParams.get('f');
        this.g = navParams.get('g');
        this.h = navParams.get('h');
        this.i = navParams.get('i');
        this.j = navParams.get('j');
        this.nama = navParams.get('nama');
        this.skpd = navParams.get('skpd');
        console.log(this.nama + 'kntlls');
        var SkpdOperator = localStorage.getItem("skpdOperator");
        var SkpdOperatorr = 'kntl' + SkpdOperator;
        if (SkpdOperatorr != 'kntlundefined') {
            var mystr = SkpdOperator;
            var myarr = mystr.split(".");
            if (myarr[0] === undefined) {
                myarr[0] = '';
            }
            if (myarr[1] === undefined) {
                myarr[1] = '';
            }
            if (myarr[2] === undefined) {
                myarr[2] = '';
            }
            if (myarr[3] === undefined) {
                myarr[3] = '';
            }
            if (myarr[4] === undefined) {
                myarr[4] = '';
            }
            this.skpd = "";
            this.skpdOperator = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
        }
        if (localStorage.getItem("skpdSession") != undefined) {
            var mystrs = localStorage.getItem("skpdSession");
            var myarrs = mystrs.split(".");
            this.skpdOperator = '&c1=' + myarrs[0] + '&c=' + myarrs[1] + '&d=' + myarrs[2] + '&e=' + myarrs[3] + '&e1=' + myarrs[4];
        }
    }
    RekapDetailPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 8000,
            dismissOnPageChange: true
        }).present();
    };
    RekapDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/detail.php?' + "&f=" + _this.f + "&g=" + _this.g + "&h=" + _this.h + "&i=" + _this.i + "&j=" + _this.j + "&nm_barang=" + _this.nama + _this.skpd + _this.skpdOperator)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    RekapDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RekapDetailPage.prototype.barang = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        if (this.g == undefined && this.h == undefined && this.i == undefined && this.j == undefined) {
            this.skpdRekap = this.f;
        }
        else if (this.g != undefined && this.h == undefined && this.i == undefined && this.j == undefined) {
            this.skpdRekap = this.f + '.' + this.g;
        }
        else if (this.g != undefined && this.h != undefined && this.i == undefined && this.j == undefined) {
            this.skpdRekap = this.f + '.' + this.g + '.' + this.h;
        }
        else if (this.g != undefined && this.h != undefined && this.i != undefined && this.j == undefined) {
            this.skpdRekap = this.f + '.' + this.g + '.' + this.h + '.' + this.i;
        }
        else if (this.g != undefined && this.h != undefined && this.i != undefined && this.j != undefined) {
            this.skpdRekap = this.f + '.' + this.g + '.' + this.h + '.' + this.i + '.' + this.j;
        }
        else if (this.g != undefined && this.h != undefined && this.i != undefined && this.j != undefined) {
            this.skpdRekap = '';
        }
        if (this.f === '01') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '95');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '02') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '87');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '03') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '88');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '04') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '89');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '05') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '90');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '06') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '91');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else if (this.f === '07') {
            this.storage.ready().then(function () {
                _this.storage.set('pageSession', '92');
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
            });
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__carddata_carddata__["a" /* CarddataPage */], {
                kodeBarangRekap: this.skpdRekap,
                skpd: this.skpd,
            });
        }
        else {
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], RekapDetailPage.prototype, "nav", void 0);
    RekapDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap-detail',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap-detail\rekap-detail.html"*/'<!--\n  Generated template for the RekapDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Detail\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n    <ion-content class="card-content">\n\n        <ion-card  *ngFor="let item of data" >\n        \n        \n          <ion-card-content *ngIf="item.status != \'tidakada\'">\n            <ion-card-title>\n              {{ nama }}\n            </ion-card-title>\n\n            <ion-item text-wrap >\n              <b><h2> Jumlah Barang </h2></b>\n              <h3>{{ item.jumlahtot }}</h3>\n            </ion-item>\n\n            <ion-item text-wrap>\n                <b><h2> Total Harga </h2></b>\n                <h3>{{ item.hargatot }}</h3>\n            </ion-item>\n            <button  (click)="barang()" style="color: white;font-size: 14px;background: #04c2e4;text-align: right;height:  26px;width: 100%;padding: 6%;" ion-button clear small color="danger" icon-start>\n                <span style="color: white;font-size: 13px !important;">\n                    <ion-icon ios="ios-eye" md="md-eye"></ion-icon>\n                    Lihat Data\n                </span>\n             </button>\n\n          </ion-card-content>\n\n          <ion-card-content *ngIf="item.status == \'tidakada\'">\n            <ion-card-title>\n              Data Tidak Ada\n            </ion-card-title>\n\n\n          </ion-card-content>\n\n          </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap-detail\rekap-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], RekapDetailPage);
    return RekapDetailPage;
}());

//# sourceMappingURL=rekap-detail.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CariSkpdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_rekap__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CariSkpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CariSkpdPage = /** @class */ (function () {
    function CariSkpdPage(GlobalProvider, appCtrl, storage, loadingCtrl, http, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataSelect = {};
        this.skpdOperator = '';
        this.dataSelect.urusan = '';
        this.dataSelect.bidang = '';
        this.dataSelect.SKPD = '';
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        console.log("skpdSession" + localStorage.getItem("skpdSession"));
        if (localStorage.getItem("skpdSession") != undefined) {
            var loader_1 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            var mystr = localStorage.getItem("skpdSession");
            var myarr = mystr.split(".");
            var linkSkpd = "";
            var skpdOperator = localStorage.getItem("skpdOperator");
            if (skpdOperator == undefined) {
                linkSkpd = "";
                console.log('no' + linkSkpd);
            }
            else {
                linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
                console.log(linkSkpd);
            }
            this.dataSelect.urusan = myarr[0];
            this.dataSelect.bidang = myarr[1];
            this.dataSelect.SKPD = myarr[2];
            this.dataSelect.unit = myarr[3];
            this.dataSelect.subunit = myarr[4];
            loader_1.present().then(function () {
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/bidang.php?c1=' + _this.dataSelect.urusan + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataBidang) {
                    _this.dataBidang = dataBidang.result;
                    console.log(dataBidang.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/SKPD.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataSKPD) {
                    _this.dataSKPD = dataSKPD.result;
                    console.log(dataSKPD.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/unit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataUnit) {
                    _this.dataUnit = dataUnit.result;
                    console.log(dataUnit.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/subunit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataSubUnit) {
                    _this.dataSubUnit = dataSubUnit.result;
                    console.log(dataSubUnit.result);
                    loader_1.dismiss();
                }, function (err) {
                    console.log(err);
                });
            });
        }
    }
    CariSkpdPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CariSkpdPage');
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.skpdOperator = localStorage.getItem("skpdOperator");
            var linkSkpd = "";
            if (_this.skpdOperator == undefined) {
                linkSkpd = "";
                console.log('no' + linkSkpd);
            }
            else {
                linkSkpd = "?skpd=" + localStorage.getItem("skpdOperator");
                console.log(linkSkpd);
            }
            loader.present().then(function () {
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/urusan.php' + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataUrusan) {
                    _this.dataUrusan = dataUrusan.result;
                    console.log(dataUrusan.result);
                    loader.dismiss();
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    CariSkpdPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CariSkpdPage.prototype.changeBidang = function () {
        var _this = this;
        this.dataSelect.bidang = '';
        this.dataSelect.SKPD = '';
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/bidang.php?c1=' + _this.dataSelect.urusan + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataBidang) {
                _this.dataBidang = dataBidang.result;
                console.log(dataBidang.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    CariSkpdPage.prototype.changeSKPD = function () {
        var _this = this;
        this.dataSelect.SKPD = '';
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var skpdOperator = localStorage.getItem("skpdOperator");
        var linkSkpd = "";
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/SKPD.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataSKPD) {
                _this.dataSKPD = dataSKPD.result;
                console.log(dataSKPD.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    CariSkpdPage.prototype.changeUnit = function () {
        var _this = this;
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/unit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataUnit) {
                _this.dataUnit = dataUnit.result;
                console.log(dataUnit.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    CariSkpdPage.prototype.SubUnit = function () {
        var _this = this;
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        console.log('sub unit');
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/subunit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataSubUnit) {
                _this.dataSubUnit = dataSubUnit.result;
                console.log(dataSubUnit.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    CariSkpdPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        this.search = '&c1=' + this.dataSelect.urusan + '&c=' + this.dataSelect.bidang + '&d=' + this.dataSelect.SKPD + '&e=' + this.dataSelect.unit + '&e1=' + this.dataSelect.subunit;
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + _this.search)
                .map(function (result) { return result.json(); })
                .subscribe(function (nmSKPD) {
                _this.nmSKPD = nmSKPD.result;
                // this.navCtrl.push(RekapPage, {
                //   search: this.search,
                //   c1nama :nmSKPD.result[0].c1nama,
                //   cnama :nmSKPD.result[0].cnama,
                //   dnama :nmSKPD.result[0].dnama,
                //   enama :nmSKPD.result[0].enama,
                //   e1nama :nmSKPD.result[0].e1nama,
                //   status :nmSKPD.result[0].status,
                // });
                if (_this.dataSelect.urusan != '') {
                    if (_this.dataSelect.bidang === '') {
                        _this.dataSelect.bidang = "00";
                    }
                    if (_this.dataSelect.SKPD === '') {
                        _this.dataSelect.SKPD = "00";
                    }
                    if (_this.dataSelect.unit === '') {
                        _this.dataSelect.unit = "00";
                    }
                    if (_this.dataSelect.subunit === '') {
                        _this.dataSelect.subunit = "000";
                    }
                    localStorage.setItem("skpdSession", _this.dataSelect.urusan + '.' + _this.dataSelect.bidang + '.' + _this.dataSelect.SKPD + '.' + _this.dataSelect.unit + '.' + _this.dataSelect.subunit);
                    console.log("SKPDnya " + localStorage.getItem("skpdSession"));
                }
                _this.viewCtrl.dismiss();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__rekap_rekap__["a" /* RekapPage */], {
                    search: _this.search,
                    c1nama: nmSKPD.result[0].c1nama,
                    cnama: nmSKPD.result[0].cnama,
                    dnama: nmSKPD.result[0].dnama,
                    enama: nmSKPD.result[0].enama,
                    e1nama: nmSKPD.result[0].e1nama,
                    status: nmSKPD.result[0].status,
                });
                loader.dismiss();
                console.log(nmSKPD.result);
            }, function (err) {
                console.log(err);
            });
            // this.ionViewDidLoad(link);
        });
    };
    CariSkpdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cari-skpd',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\cari-skpd\cari-skpd.html"*/'<!--\n  Generated template for the CariSkpdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>\n        FILTER SKPD\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-list-header *ngIf="urusanSession != \'undefined\'" style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n    SKPD\n  </ion-list-header>\n  <ion-item *ngIf="urusanSession != \'undefined\'" style="padding:  0; ">\n    <ion-label stacked>Urusan : </ion-label>\n    <ion-select class="ion-select1" (ionChange)="changeBidang()"  [(ngModel)]="dataSelect.urusan" name="urusan" placeholder="{{dataUrusanSession}}">\n   \n      <ion-option *ngFor="let urusan of dataUrusan"  value="{{ urusan.c1 }}">{{ urusan.nama }}</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-list-header *ngIf="skpdOperator == \'undefined\'" style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n    SKPD\n  </ion-list-header>\n  <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n    <ion-label  floating>Urusan : </ion-label>\n    <ion-select class="ion-select1" (ionChange)="changeBidang()"  [(ngModel)]="dataSelect.urusan" name="urusan">\n        <!-- [(ngModel)]="dataUrusan" -->\n          <ion-option value=""></ion-option>\n          <ion-option *ngFor="let urusan of dataUrusan" value="{{ urusan.c1 }}">{{ urusan.nama }}</ion-option>\n\n\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n      <ion-label  floating>Bidang : </ion-label>\n      <ion-select class="ion-select1" (ionChange)="changeSKPD()"  [(ngModel)]="dataSelect.bidang" name="bidang">\n          <!-- [(ngModel)]="dataUrusan" -->\n          <ion-option value=""></ion-option>\n        <ion-option *ngFor="let bidang of dataBidang"  value="{{ bidang.c }}">{{ bidang.nama }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n        <ion-label floating>SKPD : </ion-label>\n        <ion-select class="ion-select1" (ionChange)="changeUnit()"  [(ngModel)]="dataSelect.SKPD" name="SKPD">\n            <!-- [(ngModel)]="dataUrusan" -->\n            <ion-option value=""></ion-option>\n          <ion-option *ngFor="let SKPD of dataSKPD"  value="{{ SKPD.d }}">{{ SKPD.nama }}</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n      <ion-label floating>UNIT : </ion-label>\n      <ion-select class="ion-select1" (ionChange)="SubUnit()"  [(ngModel)]="dataSelect.unit" name="unit">\n          <!-- [(ngModel)]="dataUrusan" -->\n          <ion-option value=""></ion-option>\n        <ion-option *ngFor="let unit of dataUnit"  value="{{ unit.e }}">{{ unit.nama }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n      <ion-label floating>SUB UNIT : </ion-label>\n      <ion-select class="ion-select1" [(ngModel)]="dataSelect.subunit" name="subunit">\n          <!-- [(ngModel)]="dataUrusan" -->\n          <ion-option value=""> </ion-option>\n        <ion-option *ngFor="let subunit of dataSubUnit"  value="{{ subunit.e1 }}">{{ subunit.nama }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-fab bottom (click)="submit()" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n      <ion-row>\n              <ion-col style="padding:  3%;font-size: 13px;color: #fff;">\n                OKE\n             </ion-col>\n      </ion-row>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\cari-skpd\cari-skpd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CariSkpdPage);
    return CariSkpdPage;
}());

//# sourceMappingURL=cari-skpd.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the CardlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// private toastCtrl: ToastController,
var ContactPage = /** @class */ (function () {
    function ContactPage(GlobalProvider, actionSheetCtrl, photoViewer, platform, camera, toastCtrl, loadingCtrl, storage, navCtrl, navParams, appCtrl, http) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.users = [];
        this.pages = 0;
        this.maximumPages = 0;
        this.products = [];
        this.productFound = false;
        this.dataCode = {};
        this.dataNama = {};
        this.http = http;
        this.dataCode.response = '';
        this.searchS = navParams.get('search');
        this.sortS = navParams.get('sort');
        this.urlService = this.GlobalProvider.url;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    ContactPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    ContactPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log("hime hime " + this.searchS);
        this.loadUser();
    };
    ContactPage.prototype.viewImage = function (url) {
        this.photoViewer.show(this.GlobalProvider.url + 'atis/view_img.php?photoprofil=1&fname=' + url);
        console.log(this.GlobalProvider.url + 'atis/view_img.php?photoprofil=1&fname=' + url);
    };
    ContactPage.prototype.home = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    ContactPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    ContactPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    ContactPage.prototype.takePhoto = function (id) {
        var _this = this;
        var options = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.base64Image;
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/profile/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.loadUser();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.loadUser();
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    ContactPage.prototype.takePhotoGalery = function (id) {
        var _this = this;
        var options = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.base64Image;
            var link = _this.GlobalProvider.url + 'atis/atis/pages/api/api/profile/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.loadUser();
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.loadUser();
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    ContactPage.prototype.loadUser = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                var username = localStorage.getItem("username");
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/profile/profile.php?id=' + username)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (data) {
                    _this.data = data.result;
                    console.log(data.result);
                }, function (err) {
                    console.log(err);
                });
            });
            loader.dismiss();
        });
    };
    ContactPage.prototype.UploadImage = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ubah Foto Profile',
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'camera' : null,
                    text: 'Ambil Foto Sekarang',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                        _this.takePhoto(id);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'images' : null,
                    text: 'Ambil Foto di Gallery',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.takePhotoGalery(id);
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ContactPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ContactPage.prototype, "nav", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="home()" style="color: white;">\n            <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button>\n      </ion-buttons>\n\n    <ion-title>\n      My Profile\n    </ion-title>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contact-content" >\n  <ion-card *ngFor="let item of data" >\n\n    <ion-item>\n      <ion-item class="item-profile">\n        <div class="item-avatar">\n            <button (click)="UploadImage(item.id)" style="border-radius: 10%;height: 28px;background: white;width:  36px;z-index: 12;border: 1px solid #525252;position:  absolute;">\n                <ion-icon style="color: #3764ab;" ios="ios-camera" md="md-camera"></ion-icon>\n              </button>\n          <img (click)="viewImage(item.image)" class="thumbnail" src="{{ urlService }}atis/view_img.php?photoprofil=1&fname={{ item.image }}">\n        </div>\n      </ion-item>\n    </ion-item>\n\n    <ion-card-content style="TEXT-ALIGN: center;">\n      <h1>{{ item.nama }}</h1>\n      <h2>{{ item.nama_instansi }}</h2>\n    </ion-card-content>\n   \n  \n  </ion-card>\n\n  <ion-list *ngFor="let ListItem of data">\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>Akses</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.level }}</span> \n    </ion-item>\n\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>Urusan</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.urusan }}</span> \n    </ion-item>\n\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>Bidang</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.bidang }}</span> \n    </ion-item>\n\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>SKPD</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.skpd }}</span> \n    </ion-item>\n\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>Unit</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.unit }}</span> \n    </ion-item>\n\n    <ion-item style="color: black;padding-left:  0px;margin-left: 8px; border-bottom: 1px solid #c7e2e6;">\n        <b>Sub Unit</b> \n      <span style="text-align:  right;float:  right;">{{ ListItem.subUnit }}</span> \n    </ion-item>\n\n  </ion-list>\n\n\n  <!-- <ion-fab bottom style="width: 100%;bottom: 0;text-align:  center;background: #ffffff;margin-top: 14px;border-top: 1px solid #afafaf;">\n      <ion-row>\n              <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;" (click)="route(\'home\')">\n                  <button  style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n                          <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                   Home\n                  </button>\n                </ion-col>\n          \n              <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;" (click)="route(\'about\')">\n                  <button style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                    About\n                  </button>\n             </ion-col>\n  \n             <ion-col col-4  style="padding: 0px;">\n              <button style="color: #1fafdc;" ion-button clear small color="danger" icon-start>\n                <ion-icon ios="ios-person" md="md-person"></ion-icon>\n                Profile\n              </button>\n         </ion-col>\n  \n      </ion-row>\n    </ion-fab> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listlayout_listlayout__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapslayout_mapslayout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cardlayout_cardlayout__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basiclayout_basiclayout__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scanerlayout_scanerlayout__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scanerqrlayout_scanerqrlayout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ToastController } from 'ionic-angular';






// import { HomePage } from '../home/home';







// import { TabsPage } from '../tabs/tabs';

// import { Storage } from '@ionic/storage';
/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllPage = /** @class */ (function () {
    function AllPage(loadingCtrl, toastCtrl, storage, navCtrl, navParams, appCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.data = {};
        this.dataCode = {};
        this.dataCode.response = '';
        this.http = http;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    AllPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('backPage').then(function (val) {
            _this.loadingCtrl.create({
                content: val,
            });
            if (val === "back2") {
                console.log(val + 'a');
                _this.loadUser();
            }
            else {
                console.log('asas');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__home_home__["a" /* HomePage */]);
            }
        });
    };
    AllPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    AllPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    AllPage.prototype.loadUser = function () {
        var _this = this;
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.http.get('http://123.231.253.228/atis/pages/api/api/menu/allPageMenu.php?id=' + val)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.layout === "basic_menu") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__basiclayout_basiclayout__["a" /* BasiclayoutPage */]);
                    _this.http.get('http://123.231.253.228/atis/pages/api/api/basicPage/basicPage.php?id=' + val);
                }
                else if (obj.layout === "card_menu") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cardlayout_cardlayout__["a" /* CardlayoutPage */]);
                    _this.http.get('http://123.231.253.228/atis/pages/api/api/cardPage/cardPage.php?id=' + val);
                }
                else if (obj.layout === "maps") {
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__mapslayout_mapslayout__["a" /* MapslayoutPage */]);
                }
                else if (obj.layout === "list_item") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__listlayout_listlayout__["a" /* ListlayoutPage */]);
                }
                else if (obj.layout === "scaner_qr") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__scanerqrlayout_scanerqrlayout__["a" /* ScanerqrlayoutPage */]);
                }
                else if (obj.layout === "scaner_barkode") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__scanerlayout_scanerlayout__["a" /* ScanerlayoutPage */]);
                }
                else if (obj.layout === "data_card") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__carddata_carddata__["a" /* CarddataPage */]);
                }
                else {
                    _this.presentToast("Page Tidak Dikenali!");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__home_home__["a" /* HomePage */]);
                }
                console.log(obj.layout);
                console.log(obj.nama);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AllPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], AllPage.prototype, "nav", void 0);
    AllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\all\all.html"*/'<ion-header >\n  <ion-navbar hideBackButton>\n     <ion-title style=" color: #ffffff !important;"><img src="assets/imgs/loading.gif" style="width: 9%;"/>Prosess</ion-title>\n    \n     <ion-buttons end>\n      <button ion-button icon-only (click)="home()" style="color: white;">\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="home-content" padding style=\'background-color: #c1fffb;\'>\n  <div style="text-align: center;margin-top: 50%;"><img src="assets/imgs/loading.gif" style="width: 20%;"/></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\all\all.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AllPage);
    return AllPage;
}());

//# sourceMappingURL=all.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(platform, navCtrl, navParams, appCtrl) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AboutPage.prototype.home = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AboutPage.prototype.route = function (route) {
        if (route == "profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
        }
        else if (route == "about") {
            this.navCtrl.push(AboutPage_1);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="home()" style="color: white;">\n            <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button>\n      </ion-buttons>\n\n    <ion-title>\n      About\n    </ion-title>\n      \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <!-- <ion-fab bottom style="width: 100%;bottom: 0;text-align:  center;background: #ffffff;margin-top: 14px;border-top: 1px solid #afafaf;">\n        <ion-row>\n                <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;" (click)="route(\'home\')">\n                    <button  style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n                            <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                     Home\n                    </button>\n                  </ion-col>\n            \n                <ion-col col-4 style="padding: 0px; border-right: 1px solid #c5bcbc;">\n                    <button style="color: #1fafdc;" ion-button clear small color="danger" icon-start>\n                      <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                      About\n                    </button>\n               </ion-col>\n    \n               <ion-col col-4 (click)="route(\'profile\')" style="padding: 0px;">\n                <button style="color: #7b8184;" ion-button clear small color="danger" icon-start>\n                  <ion-icon ios="ios-person" md="md-person"></ion-icon>\n                  Profile\n                </button>\n           </ion-col>\n    \n        </ion-row>\n      </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanerlayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ScanerlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanerlayoutPage = /** @class */ (function () {
    function ScanerlayoutPage(GlobalProvider, navCtrl, barcodeScanner, toast, storage, http, dataService) {
        this.GlobalProvider = GlobalProvider;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.storage = storage;
        this.http = http;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
    }
    ScanerlayoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ScanerlayoutPage');
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/barcode/datascanner.php?id=' + val)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
            }, function (err) {
                console.log(err);
            });
        });
        this.scan();
    };
    ScanerlayoutPage.prototype.scan = function () {
        var _this = this;
        var options = {
            prompt: " "
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            _this.storage.get('pageSession').then(function (val) {
                return _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/barcode/dataqr.php?id=' + val + '&search=' + barcodeData.text)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (response) {
                    _this.products = response;
                    _this.selectedProduct = _this.products.find(function (product) { return product.plu === barcodeData.text; });
                    if (_this.selectedProduct !== undefined) {
                        _this.productFound = true;
                        console.log(_this.selectedProduct);
                    }
                    else {
                        _this.selectedProduct = {};
                        _this.productFound = false;
                        _this.toast.show('Data ' + barcodeData.text + ' Tidak Ada / Tidak Diketahui', '8000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                    console.log(_this.products);
                });
            });
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    ScanerlayoutPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    ScanerlayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanerlayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\scanerlayout\scanerlayout.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton>\n        <ion-buttons left>\n            <button ion-button icon-only  (click)="home()">\n               <ion-icon name="md-arrow-round-back"></ion-icon>\n            </button> \n          </ion-buttons>\n\n      <ion-title *ngFor="let itemNama of data;  let i=index">\n        <div *ngIf="i < 1">\n            {{ itemNama.namaPage }}\n        </div>\n      </ion-title>\n  </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="home-content" padding style=\'background-color: #c1fffb;\'>\n  \n    <h1>\n      <button ion-button color="dark" full (click)="scan()">Start Scan</button>\n    </h1>\n  \n  \n    <ion-card *ngIf="productFound">\n      <ion-card-content>\n          <ion-card-title>\n              Kode : {{ selectedProduct.plu }}\n            </ion-card-title>\n        \n            <ion-item *ngIf="selectedProduct.field1">\n                <b><h2>{{ selectedProduct.nama1 }}</h2></b>\n                <h3>{{ selectedProduct.field1 }}</h3>\n            </ion-item>\n        \n            <ion-item *ngIf="selectedProduct.field2">\n                <b><h2>{{ selectedProduct.nama2 }}</h2></b>\n                <h3>{{ selectedProduct.field2 }}</h3>\n            </ion-item>\n        \n            <ion-item *ngIf="selectedProduct.field3">\n                <b><h2>{{ selectedProduct.nama3 }}</h2></b>\n                <h3>{{ selectedProduct.field3 }}</h3>\n            </ion-item>\n        \n            <ion-item *ngIf="selectedProduct.field4">\n                <b><h2>{{ selectedProduct.nama4 }}</h2></b>\n                <h3>{{ selectedProduct.field4 }}</h3>\n            </ion-item>\n            <ion-item *ngIf="selectedProduct.field5">\n                <b><h2>{{ selectedProduct.nama5 }}</h2></b>\n                <h3>{{ selectedProduct.field5 }}</h3>\n            </ion-item>\n             \n            <ion-item *ngIf="selectedProduct.field6">\n                <b><h2>{{ selectedProduct.nama6 }}</h2></b>\n                <h3>{{ selectedProduct.field6 }}</h3>\n            </ion-item>\n            \n            <ion-item *ngIf="selectedProduct.field7">\n                <b><h2>{{ selectedProduct.nama7 }}</h2></b>\n                <h3>{{ selectedProduct.field7 }}</h3>\n            </ion-item>\n            \n            <ion-item *ngIf="selectedProduct.field8">\n                <b><h2>{{ selectedProduct.nama8 }}</h2></b>\n                <h3>{{ selectedProduct.field8 }}</h3>\n            </ion-item>\n            \n            <ion-item *ngIf="selectedProduct.field9">\n                <b><h2>{{ selectedProduct.nama9 }}</h2></b>\n                <h3>{{ selectedProduct.field9 }}</h3>\n            </ion-item>\n        \n            <ion-item *ngIf="selectedProduct.field10">\n                <b><h2>{{ selectedProduct.nama10 }}</h2></b>\n                <h3>{{ selectedProduct.field10 }}</h3>\n            </ion-item>\n        \n            <ion-item *ngIf="selectedProduct.field11">\n                <b><h2>{{ selectedProduct.nama11 }}</h2></b>\n                <h3>{{ selectedProduct.field11 }}</h3>\n            </ion-item>\n            \n            <ion-item *ngIf="selectedProduct.field12">\n                <b><h2>{{ selectedProduct.nama12 }}</h2></b>\n                <h3>{{ selectedProduct.field12 }}</h3>\n            </ion-item>\n            <ion-item *ngIf="selectedProduct.field13">\n                <b><h2>{{ selectedProduct.nama13 }}</h2></b>\n                <h3>{{ selectedProduct.field13 }}</h3>\n            </ion-item>\n\n            \n        <!-- <ul>\n          <li *ngIf="selectedProduct.nama1">\n            {{ selectedProduct.nama1 }} : {{ selectedProduct.field1 }}\n          </li>\n          <li *ngIf="selectedProduct.nama2">\n            {{ selectedProduct.nama2 }} : {{ selectedProduct.field2 }}\n          </li>\n          \n          <li *ngIf="selectedProduct.nama3">\n            {{ selectedProduct.nama3 }} : {{ selectedProduct.field3 }}\n          </li>\n          \n          <li *ngIf="selectedProduct.nama4">\n            {{ selectedProduct.nama4 }} : {{ selectedProduct.field4 }}\n          </li>\n          \n          <li *ngIf="selectedProduct.nama5">\n            {{ selectedProduct.nama5 }} : {{ selectedProduct.field5 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama6">\n            {{ selectedProduct.nama6 }} : {{ selectedProduct.field6 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama7">\n            {{ selectedProduct.nama7 }} : {{ selectedProduct.field7 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama8">\n            {{ selectedProduct.nama8 }} : {{ selectedProduct.field8 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama9">\n            {{ selectedProduct.nama9 }} : {{ selectedProduct.field9 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama10">\n            {{ selectedProduct.nama10 }} : {{ selectedProduct.field10 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama11">\n            {{ selectedProduct.nama11 }} : {{ selectedProduct.field11 }}\n          </li>\n          \n          <li *ngIf="selectedProduct.nama12">\n            {{ selectedProduct.nama12 }} : {{ selectedProduct.field12 }}\n          </li>\n\n          <li *ngIf="selectedProduct.nama13">\n            {{ selectedProduct.nama13 }} : {{ selectedProduct.field13 }}\n          </li>\n  \n        </ul> -->\n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\scanerlayout\scanerlayout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], ScanerlayoutPage);
    return ScanerlayoutPage;
}());

//# sourceMappingURL=scanerlayout.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanerqrlayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ScanerlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanerqrlayoutPage = /** @class */ (function () {
    function ScanerqrlayoutPage(GlobalProvider, navCtrl, barcodeScanner, toast, storage, http, dataService) {
        this.GlobalProvider = GlobalProvider;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.storage = storage;
        this.http = http;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
    }
    ScanerqrlayoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ScanerlayoutPage');
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/barcode/datascanner.php?id=' + val)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
            }, function (err) {
                console.log(err);
            });
        });
        this.scan();
    };
    ScanerqrlayoutPage.prototype.scan = function () {
        var _this = this;
        var options = {
            prompt: " "
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            _this.storage.get('pageSession').then(function (val) {
                return _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/barcode/dataqr.php?id=' + val + '&search=' + barcodeData.text)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (response) {
                    _this.products = response;
                    _this.selectedProduct = _this.products.find(function (product) { return product.plu === barcodeData.text; });
                    if (_this.selectedProduct !== undefined) {
                        _this.productFound = true;
                        console.log(_this.selectedProduct);
                    }
                    else {
                        _this.selectedProduct = {};
                        _this.productFound = false;
                        _this.toast.show('Data ' + barcodeData.text + ' Tidak Ada / Tidak Diketahui', '8000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                    console.log(_this.products);
                });
            });
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    ScanerqrlayoutPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    ScanerqrlayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanerqrlayout',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\scanerqrlayout\scanerqrlayout.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-buttons left>\n      <button ion-button icon-only  (click)="home()">\n         <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button> \n    </ion-buttons>\n\n    <ion-title *ngFor="let itemNama of data;  let i=index">\n      <div *ngIf="i < 1">\n          {{ itemNama.namaPage }}\n      </div>\n    </ion-title>\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home-content" padding style=\'background-color: #c1fffb;\'>\n\n  <h1>\n    <button ion-button color="dark" full (click)="scan()">Start Scan</button>\n  </h1>\n\n\n  <ion-card *ngIf="productFound">\n    <ion-card-content>\n        <ion-card-title>\n            Kode : {{ selectedProduct.plu }}\n          </ion-card-title>\n      \n          <ion-item *ngIf="selectedProduct.field1">\n              <b><h2>{{ selectedProduct.nama1 }}</h2></b>\n              <h3>{{ selectedProduct.field1 }}</h3>\n          </ion-item>\n      \n          <ion-item *ngIf="selectedProduct.field2">\n              <b><h2>{{ selectedProduct.nama2 }}</h2></b>\n              <h3>{{ selectedProduct.field2 }}</h3>\n          </ion-item>\n      \n          <ion-item *ngIf="selectedProduct.field3">\n              <b><h2>{{ selectedProduct.nama3 }}</h2></b>\n              <h3>{{ selectedProduct.field3 }}</h3>\n          </ion-item>\n      \n          <ion-item *ngIf="selectedProduct.field4">\n              <b><h2>{{ selectedProduct.nama4 }}</h2></b>\n              <h3>{{ selectedProduct.field4 }}</h3>\n          </ion-item>\n          <ion-item *ngIf="selectedProduct.field5">\n              <b><h2>{{ selectedProduct.nama5 }}</h2></b>\n              <h3>{{ selectedProduct.field5 }}</h3>\n          </ion-item>\n           \n          <ion-item *ngIf="selectedProduct.field6">\n              <b><h2>{{ selectedProduct.nama6 }}</h2></b>\n              <h3>{{ selectedProduct.field6 }}</h3>\n          </ion-item>\n          \n          <ion-item *ngIf="selectedProduct.field7">\n              <b><h2>{{ selectedProduct.nama7 }}</h2></b>\n              <h3>{{ selectedProduct.field7 }}</h3>\n          </ion-item>\n          \n          <ion-item *ngIf="selectedProduct.field8">\n              <b><h2>{{ selectedProduct.nama8 }}</h2></b>\n              <h3>{{ selectedProduct.field8 }}</h3>\n          </ion-item>\n          \n          <ion-item *ngIf="selectedProduct.field9">\n              <b><h2>{{ selectedProduct.nama9 }}</h2></b>\n              <h3>{{ selectedProduct.field9 }}</h3>\n          </ion-item>\n      \n          <ion-item *ngIf="selectedProduct.field10">\n              <b><h2>{{ selectedProduct.nama10 }}</h2></b>\n              <h3>{{ selectedProduct.field10 }}</h3>\n          </ion-item>\n      \n          <ion-item *ngIf="selectedProduct.field11">\n              <b><h2>{{ selectedProduct.nama11 }}</h2></b>\n              <h3>{{ selectedProduct.field11 }}</h3>\n          </ion-item>\n          \n          <ion-item *ngIf="selectedProduct.field12">\n              <b><h2>{{ selectedProduct.nama12 }}</h2></b>\n              <h3>{{ selectedProduct.field12 }}</h3>\n          </ion-item>\n          <ion-item *ngIf="selectedProduct.field13">\n              <b><h2>{{ selectedProduct.nama13 }}</h2></b>\n              <h3>{{ selectedProduct.field13 }}</h3>\n          </ion-item>\n\n      <!-- <ul>\n        <li *ngIf="selectedProduct.nama1">\n          {{ selectedProduct.nama1 }} : {{ selectedProduct.field1 }}\n        </li>\n        <li *ngIf="selectedProduct.nama2">\n          {{ selectedProduct.nama2 }} : {{ selectedProduct.field2 }}\n        </li>\n        \n        <li *ngIf="selectedProduct.nama3">\n          {{ selectedProduct.nama3 }} : {{ selectedProduct.field3 }}\n        </li>\n        \n        <li *ngIf="selectedProduct.nama4">\n          {{ selectedProduct.nama4 }} : {{ selectedProduct.field4 }}\n        </li>\n        \n        <li *ngIf="selectedProduct.nama5">\n          {{ selectedProduct.nama5 }} : {{ selectedProduct.field5 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama6">\n          {{ selectedProduct.nama6 }} : {{ selectedProduct.field6 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama7">\n          {{ selectedProduct.nama7 }} : {{ selectedProduct.field7 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama8">\n          {{ selectedProduct.nama8 }} : {{ selectedProduct.field8 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama9">\n          {{ selectedProduct.nama9 }} : {{ selectedProduct.field9 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama10">\n          {{ selectedProduct.nama10 }} : {{ selectedProduct.field10 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama11">\n          {{ selectedProduct.nama11 }} : {{ selectedProduct.field11 }}\n        </li>\n        \n        <li *ngIf="selectedProduct.nama12">\n          {{ selectedProduct.nama12 }} : {{ selectedProduct.field12 }}\n        </li>\n\n        <li *ngIf="selectedProduct.nama13">\n          {{ selectedProduct.nama13 }} : {{ selectedProduct.field13 }}\n        </li>\n\n      </ul> -->\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\scanerqrlayout\scanerqrlayout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], ScanerqrlayoutPage);
    return ScanerqrlayoutPage;
}());

//# sourceMappingURL=scanerqrlayout.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RekapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rekap2_rekap2__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the RekapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RekapPage = /** @class */ (function () {
    function RekapPage(GlobalProvider, popoverCtrl, appCtrl, modalCtrl, loadingCtrl, http, actionSheetCtrl, navCtrl, navParams, platform) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.popoverCtrl = popoverCtrl;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.animateClass = { 'fade-in-right-item': true };
        this.search = navParams.get('search');
        this.c1nama = navParams.get('c1nama');
        this.cnama = navParams.get('cnama');
        this.dnama = navParams.get('dnama');
        this.enama = navParams.get('enama');
        this.e1nama = navParams.get('e1nama');
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
            var SkpdOperator = localStorage.getItem("skpdOperator");
            var SkpdOperatorr = 'kntl' + SkpdOperator;
            if (SkpdOperatorr != 'kntlundefined') {
                var mystr = SkpdOperator;
                var myarr = mystr.split(".");
                _this.search = '&c1=' + myarr[0] + '&c=' + myarr[1] + '&d=' + myarr[2] + '&e=' + myarr[3] + '&e1=' + myarr[4];
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + _this.search)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (nmSKPD) {
                    _this.nmSKPD = nmSKPD.result;
                    console.log(nmSKPD.result);
                    _this.c1namaSKPDOperator = nmSKPD.result[0].c1nama;
                    _this.cnamaSKPDOperator = nmSKPD.result[0].cnama;
                    _this.dnamaSKPDOperator = nmSKPD.result[0].dnama;
                    _this.enamaSKPDOperator = nmSKPD.result[0].enama;
                    _this.e1namaSKPDOperator = nmSKPD.result[0].e1nama;
                }, function (err) {
                    console.log(err);
                });
            }
            if (localStorage.getItem("skpdSession") != undefined) {
                var mystrs = localStorage.getItem("skpdSession");
                var myarrs = mystrs.split(".");
                _this.search = '&c1=' + myarrs[0] + '&c=' + myarrs[1] + '&d=' + myarrs[2] + '&e=' + myarrs[3] + '&e1=' + myarrs[4];
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/nmSKPD.php?' + _this.search)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (nmSKPD) {
                    _this.nmSKPD = nmSKPD.result;
                    console.log(nmSKPD.result);
                    _this.c1nama = nmSKPD.result[0].c1nama;
                    _this.cnama = nmSKPD.result[0].cnama;
                    _this.dnama = nmSKPD.result[0].dnama;
                    _this.enama = nmSKPD.result[0].enama;
                    _this.e1nama = nmSKPD.result[0].e1nama;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    }
    RekapPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading....',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    RekapPage.prototype.home = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 2));
    };
    RekapPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    RekapPage.prototype.openPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_home_popover_home__["a" /* PopoverHomePage */]);
        popover.present({
            ev: myEvent
        });
    };
    RekapPage.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = group;
        }
        else {
            this.shownGroup1 = null;
        }
    };
    ;
    RekapPage.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === null;
    };
    ;
    RekapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/rekap/rekap.php')
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
                console.log('kontoru' + _this.c1nama);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    RekapPage.prototype.cariSkpd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cari_skpd_cari_skpd__["a" /* CariSkpdPage */]);
        modal.present();
    };
    RekapPage.prototype.action = function (nama, id) {
        var _this = this;
        var skpd;
        if (this.search != undefined) {
            skpd = this.search;
        }
        else {
            skpd = '';
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opsi ' + nama,
            buttons: [
                {
                    icon: !this.platform.is('md') ? 'eye' : null,
                    text: 'Lihat Selanjutnya',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rekap2_rekap2__["a" /* Rekap2Page */], {
                            f: id,
                            skpd: skpd,
                            c1nama: _this.c1nama,
                            cnama: _this.cnama,
                            dnama: _this.dnama,
                            enama: _this.enama,
                            e1nama: _this.e1nama,
                        });
                        console.log('Destructive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'clipboard' : null,
                    text: 'Total Harga & Jumlah Barang',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__rekap_detail_rekap_detail__["a" /* RekapDetailPage */], {
                            f: id,
                            skpd: skpd,
                            nama: nama
                        });
                        modal.present();
                        console.log('Archive clicked');
                    }
                }, {
                    icon: !this.platform.is('md') ? 'close' : null,
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RekapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rekap',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\rekap\rekap.html"*/'<!--\n  Generated template for the RekapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar hideBackButton>\n\n        <ion-buttons left>\n          <button ion-button icon-only  (click)="home()">\n             <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button> \n        </ion-buttons> -->\n\n        <ion-navbar hideBackButton>\n\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        \n            <ion-title>Rekap</ion-title>\n       \n        <ion-buttons end>\n                <a ion-button icon-only (click)="openPopover($event)">\n                <ion-icon name="more"></ion-icon>\n            </a>\n        </ion-buttons>\n  \n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div *ngIf="c1nama != undefined">\n        <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                        <b>\n                        <h2>\n                            SKPD	\n                            <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                            style="\n                            color: #d49624;\n                            text-align:  right;\n                            float:  right;\n                            ">\n                        </ion-icon>\n                        </h2>\n                        </b>\n                        </ion-label>\n                    </ion-item>\n                    <div *ngIf="isGroupShown1(i)"> \n                    \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                URUSAN\n                            </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                            {{ c1nama }}\n                        </h4>\n                </ion-item>\n        \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    BIDANG\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ cnama }}\n                            </h4>\n                    </ion-item>\n        \n                <ion-item text-wrap  style="background: #fbfbfb;">\n                    <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                            SKPD\n                        </h3></b>\n                    <h4 style="font-size: 12px;  margin-left: 6px;">\n                        {{ dnama }}\n                    </h4>\n                </ion-item>\n\n                <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                UNIT\n                            </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                            {{ enama }}\n                        </h4>\n                </ion-item>\n\n                <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                SUB UNIT\n                            </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                            {{ e1nama }}\n                        </h4>\n                </ion-item>\n                        \n                                \n        </div>\n    </div>\n\n    <div *ngIf="c1nama == undefined">\n            <ion-item  text-wrap (click)="toggleGroup1(i)" style=" background: #fff8f8; ">\n                    <ion-label class="label label-md" style="min-height: 29px; padding-bottom: 0%; padding-top: 1%;">\n                            <b>\n                            <h2>\n                                SKPD	\n                                <ion-icon color="success" item-right [name]="isGroupShown1(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" \n                                style="\n                                color: #d49624;\n                                text-align:  right;\n                                float:  right;\n                                ">\n                            </ion-icon>\n                            </h2>\n                            </b>\n                            </ion-label>\n                        </ion-item>\n                        <div *ngIf="isGroupShown1(i)"> \n                        \n                            <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    URUSAN\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ c1namaSKPDOperator }}\n                            </h4>\n                    </ion-item>\n            \n                        <ion-item text-wrap  style="background: #fbfbfb;">\n                                <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                        BIDANG\n                                    </h3></b>\n                                <h4 style="font-size: 12px;  margin-left: 6px;">\n                                    {{ cnamaSKPDOperator }}\n                                </h4>\n                        </ion-item>\n            \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                        <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                SKPD\n                            </h3></b>\n                        <h4 style="font-size: 12px;  margin-left: 6px;">\n                            {{ dnamaSKPDOperator }}\n                        </h4>\n                    </ion-item>\n    \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    UNIT\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ enamaSKPDOperator }}\n                            </h4>\n                    </ion-item>\n    \n                    <ion-item text-wrap  style="background: #fbfbfb;">\n                            <b><h3 style="font-weight:bold;color: #d49624;font-weight:bold;  margin-left: 6px;">\n                                    SUB UNIT\n                                </h3></b>\n                            <h4 style="font-size: 12px;  margin-left: 6px;">\n                                {{ e1namaSKPDOperator }}\n                            </h4>\n                    </ion-item>\n                            \n                                    \n            </div>\n        </div>\n\n\n        <ion-grid>\n            <ion-row>\n                <ion-col col-1 style="\n                padding: 2px;\n                border-top: 1px solid #1f1f1f;\n                border-left: 1px solid #1f1f1f;\n                border-bottom: 1px solid #1f1f1f;\n                background: #7eddec;\n                text-align:  center;">\n                    <b><h6>No</h6></b>\n                </ion-col>\n\n                <ion-col col-11 style="\n                padding: 2px;\n                border: 1px solid #1f1f1f;\n                background: #7eddec;">\n                    <b><h6>Nama Barang</h6></b>\n                </ion-col>\n\n                <!-- <ion-col col-1 style="padding: 2px">\n                    <ion-buttons end>\n                        <button ion-button icon-only (click)="action()" style="color: black;background-color: #ff000000;box-shadow: none;">\n                        <ion-icon ios="ios-more" md="md-more"></ion-icon>\n                        </button>\n                        \n                    </ion-buttons>\n                </ion-col> -->\n            </ion-row>\n\n                <ion-row *ngFor="let item of data" [ngClass]="animateClass">\n                    <ion-col col-1 style="\n                    padding: 2px;\n                    border-top: 1px solid #1f1f1f;\n                    border-left: 1px solid #1f1f1f;\n                    border-bottom: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;">\n                        <h6 class="kolom"> {{ item.no }}</h6>\n                    </ion-col>\n    \n                    <ion-col col-10 style="\n                    padding: 2px;\n                    border-top: 1px solid #1f1f1f;\n                    border-left: 1px solid #1f1f1f;\n                    border-bottom: 1px solid #1f1f1f;\n                    background: #f3fdff;">\n                        <h6 class="kolom">{{ item.nm_barang }}</h6>\n                    </ion-col>\n    \n                    <ion-col col-1 style="\n                    padding: 2px;\n                    border-top: 1px solid #1f1f1f;\n                    border-right: 1px solid #1f1f1f;\n                    border-bottom: 1px solid #1f1f1f;\n                    text-align:  center;\n                    background: #f3fdff;" (click)="action(item.nm_barang,item.f)">\n                    <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row [ngClass]="animateClass">\n                        <ion-col col-1 style="\n                        padding: 2px;\n                        border-top: 1px solid #1f1f1f;\n                        border-left: 1px solid #1f1f1f;\n                        border-bottom: 1px solid #1f1f1f;\n                        text-align:  center;\n                        background: #f3fdff;">\n                            <h6 class="kolom">7</h6>\n                        </ion-col>\n        \n                        <ion-col col-10 style="\n                        padding: 2px;\n                        border-top: 1px solid #1f1f1f;\n                        border-left: 1px solid #1f1f1f;\n                        border-bottom: 1px solid #1f1f1f;\n                        background: #f3fdff;">\n                            <h6 class="kolom"> Aset Tak Berwujud</h6>\n                        </ion-col>\n        \n                        <ion-col col-1 style="\n                        padding: 2px;\n                        text-align:  center;\n                        border-top: 1px solid #1f1f1f;\n                        border-right: 1px solid #1f1f1f;\n                        border-bottom: 1px solid #1f1f1f;\n                        background: #f3fdff;" (click)="action(\'Aset Tak Berwujud\',\'07\')">\n                        <h6 class="kolom"><ion-icon name="arrow-round-forward" style="color: #f19d36;"></ion-icon></h6>\n                        </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <ion-card>\n                \n                </ion-card>\n                <ion-card>    \n                </ion-card>\n    \n                <ion-card>\n                </ion-card>\n                <ion-card>    \n                </ion-card>\n                \n            <ion-fab *ngIf="c1namaSKPDOperator == undefined" bottom style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;" >\n                <ion-row>                    \n                        <ion-col icon-start (click)="cariSkpd()">\n                            <button style="color: #fff; font-size: 13px;" ion-button clear small color="danger" >\n                                <span style="color: #fff; font-size: 13px !important;">\n                                    <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                                    FILTER SKPD\n                                </span>  \n                            </button>\n                       </ion-col>\n                </ion-row>\n              </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\rekap\rekap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], RekapPage);
    return RekapPage;
}());

//# sourceMappingURL=rekap.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider(http) {
        this.http = http;
    }
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import  'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(platform, GlobalProvider, splashScreens, storage, toastCtrl, navCtrl, navParams, appCtrl, http) {
        this.platform = platform;
        this.GlobalProvider = GlobalProvider;
        this.splashScreens = splashScreens;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.http = http;
        this.type = 'password';
        this.showPass = false;
        // dataInstansi : string;
        // // url :string;
        this.data = {};
        this.gender = "f";
        this.data.username = '';
        this.data.password = '';
        this.data.response = '';
        this.http = http;
        platform.ready().then(function () {
            splashScreens.hide();
        });
    }
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.login = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // ionViewDidLoad(){
    //   this.loadUser();
    // }
    // loadUser(){
    //     this.http.get('http://taufantritama.com/instansi/dataInstansi.php')
    //     .map(res => res.json())
    //     .subscribe(dataInstansi => {
    //       this.dataInstansi = dataInstansi.result;
    //       console.log(dataInstansi.result);
    //     });
    // }
    LoginPage.prototype.submit = function () {
        var _this = this;
        var link = this.GlobalProvider.url + 'atis/pages/api/api/login/login.php';
        var myData = JSON.stringify({ username: this.data.username, password: this.data.password });
        this.http.post(link, myData)
            .subscribe(function (data) {
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            var obj = JSON.parse(data["_body"]);
            if (obj.id === "1") {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                _this.storage.ready().then(function () {
                    _this.storage.set('username', obj.userSession);
                });
                localStorage.setItem("skpdOperator", obj.group);
                console.log("SKPDnya " + localStorage.getItem("skpdOperator"));
                localStorage.setItem("username", _this.data.username);
                console.log("session!" + localStorage.getItem("username"));
            }
            else {
                _this.presentToast("Gagal Login");
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LoginPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\login\login.html"*/'\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/imgs/log.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form >\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n        <ion-label style="color: white;">Mobile Version 1.1.1</ion-label>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="data.username"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input  type="{{type}}" placeholder="Password" name="password" [(ngModel)]="data.password" pattern=".{4,10}"></ion-input>\n                <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">   <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon></button>\n                <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">  <ion-icon ios="ios-eye" md="md-eye"></ion-icon>\n                </button>\n                \n            </ion-item>\n\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" (click)="submit()">Login</button>\n        </ion-col>\n      </ion-row>\n      \n\n\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carddata_carddata__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(GlobalProvider, appCtrl, platform, camera, toastCtrl, http, navCtrl, navParams, storage, loadingCtrl) {
        var _this = this;
        this.GlobalProvider = GlobalProvider;
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.products = [];
        this.productFound = false;
        this.dataCode = {};
        this.dataNama = {};
        this.datas = {};
        this.dataSelect = {};
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
        this.dataSelect.perolehanUpdate = '';
        this.dataSelect.staset = '';
        this.dataSelect.sumberDana = '';
        this.dataSelect.kondisiBarang = '';
        this.dataSelect.bertingkat = '';
        this.dataSelect.beton = '';
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
        });
        if (localStorage.getItem("skpdSession") != undefined) {
            var loader_1 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            var mystr = localStorage.getItem("skpdSession");
            var myarr = mystr.split(".");
            var linkSkpd = "";
            var skpdOperator = localStorage.getItem("skpdOperator");
            if (skpdOperator == undefined) {
                linkSkpd = "";
                console.log('no' + linkSkpd);
            }
            else {
                linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
                console.log(linkSkpd);
            }
            this.dataSelect.urusan = myarr[0];
            this.dataSelect.bidang = myarr[1];
            this.dataSelect.SKPD = myarr[2];
            this.dataSelect.unit = myarr[3];
            this.dataSelect.subunit = myarr[4];
            loader_1.present().then(function () {
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/bidang.php?c1=' + _this.dataSelect.urusan + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataBidang) {
                    _this.dataBidang = dataBidang.result;
                    console.log(dataBidang.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/SKPD.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataSKPD) {
                    _this.dataSKPD = dataSKPD.result;
                    console.log(dataSKPD.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/unit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataUnit) {
                    _this.dataUnit = dataUnit.result;
                    console.log(dataUnit.result);
                }, function (err) {
                    console.log(err);
                });
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/subunit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + linkSkpd)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataSubUnit) {
                    _this.dataSubUnit = dataSubUnit.result;
                    console.log(dataSubUnit.result);
                    loader_1.dismiss();
                }, function (err) {
                    console.log(err);
                });
            });
        }
    }
    SearchPage.prototype.myHandlerFunction = function () {
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__carddata_carddata__["a" /* CarddataPage */]);
    };
    SearchPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    SearchPage.prototype.presentToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SearchPage.prototype.ionViewDidLoad = function (link) {
        var _this = this;
        if (link === undefined) {
            var loader_2 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            console.log(link);
            loader_2.present().then(function () {
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/search2.php?id=' + val)
                        .map(function (result) { return result.json(); })
                        .subscribe(function (data) {
                        _this.data = data.result;
                        console.log(data.result);
                    }, function (err) {
                        console.log(err);
                    });
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    _this.skpdOperator = localStorage.getItem("skpdOperator");
                    var linkSkpd = "";
                    if (_this.skpdOperator == undefined) {
                        linkSkpd = "";
                        console.log('no' + linkSkpd);
                    }
                    else {
                        linkSkpd = "?skpd=" + localStorage.getItem("skpdOperator");
                        console.log(linkSkpd);
                    }
                    _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/urusan.php' + linkSkpd)
                        .map(function (result) { return result.json(); })
                        .subscribe(function (dataUrusan) {
                        _this.dataUrusan = dataUrusan.result;
                        console.log(dataUrusan.result);
                    }, function (err) {
                        console.log(err);
                    });
                });
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/kabupatenKota.php')
                        .map(function (result) { return result.json(); })
                        .subscribe(function (dataKota) {
                        _this.dataKota = dataKota.result;
                        console.log(dataKota.result);
                        loader_2.dismiss();
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
        }
        else {
            var loader_3 = this.loadingCtrl.create({
                content: 'Load Data...',
            });
            console.log(link);
            loader_3.present().then(function () {
                _this.storage.get('pageSession').then(function (val) {
                    console.log('Kamu Memilih Page', val);
                    _this.http.get(link)
                        .map(function (result) { return result.json(); })
                        .subscribe(function (data) {
                        _this.data = data.result;
                        console.log(data.result);
                        loader_3.dismiss();
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
            this.storage.get('pageSession').then(function (val) {
                console.log('Kamu Memilih Page', val);
                _this.presentLoading();
                _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/galery/galery2.php?id=' + val)
                    .map(function (result) { return result.json(); })
                    .subscribe(function (dataGalery) {
                    _this.dataGalery = dataGalery.result;
                    console.log(dataGalery.result);
                }, function (err) {
                    console.log(err);
                });
            });
        }
    };
    SearchPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    SearchPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    SearchPage.prototype.takePhoto = function (id, table) {
        var _this = this;
        var options = {
            quality: 40,
            targetWidth: 600,
            targetHeight: 400,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.submit(table);
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.submit(table);
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    SearchPage.prototype.takePhotoGalery = function (id, table) {
        var _this = this;
        var options = {
            quality: 40,
            targetWidth: 600,
            targetHeight: 400,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.presentLoading();
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            var hasil = _this.photos.reverse();
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/upload/upload.php';
            var myData = JSON.stringify({ gambar: hasil, id: id });
            _this.submit(table);
            _this.http.post(link, myData)
                .subscribe(function (data) {
                var obj = JSON.parse(data["_body"]);
                if (obj.id === "1") {
                    _this.presentToast("Berhasil Upload!");
                    _this.submit(table);
                    console.log("hime hime" + obj.hasil);
                }
                else {
                    _this.presentToast("Gagal Upload");
                }
            }, function (error) {
                console.log("Oooops!");
            });
        }, function (err) {
            console.log(err);
        });
    };
    SearchPage.prototype.changeBidang = function () {
        var _this = this;
        this.dataSelect.bidang = '';
        this.dataSelect.SKPD = '';
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/bidang.php?c1=' + _this.dataSelect.urusan + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataBidang) {
                _this.dataBidang = dataBidang.result;
                console.log(dataBidang.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    SearchPage.prototype.changeKec = function (id_kota) {
        var _this = this;
        this.http.get(this.GlobalProvider.url + 'atis/pages/api/api/search/kecamatan.php?kd_kota=' + this.dataSelect.kota)
            .map(function (result) { return result.json(); })
            .subscribe(function (dataKec) {
            _this.dataKec = dataKec.result;
            console.log(dataKec.result);
        }, function (err) {
            console.log(err);
        });
    };
    SearchPage.prototype.changeSKPD = function (c1, c) {
        var _this = this;
        this.dataSelect.SKPD = '';
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var skpdOperator = localStorage.getItem("skpdOperator");
        var linkSkpd = "";
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/SKPD.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataSKPD) {
                _this.dataSKPD = dataSKPD.result;
                console.log(dataSKPD.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    SearchPage.prototype.changeUnit = function () {
        var _this = this;
        this.dataSelect.unit = '';
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/unit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataUnit) {
                _this.dataUnit = dataUnit.result;
                console.log(dataUnit.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    SearchPage.prototype.SubUnit = function () {
        var _this = this;
        this.dataSelect.subunit = '';
        var loader = this.loadingCtrl.create({
            content: 'Load Data...',
        });
        var linkSkpd = "";
        var skpdOperator = localStorage.getItem("skpdOperator");
        if (skpdOperator == undefined) {
            linkSkpd = "";
            console.log('no' + linkSkpd);
        }
        else {
            linkSkpd = "&skpd=" + localStorage.getItem("skpdOperator");
            console.log(linkSkpd);
        }
        console.log('sub unit');
        loader.present().then(function () {
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/search/subunit.php?c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + linkSkpd)
                .map(function (result) { return result.json(); })
                .subscribe(function (dataSubUnit) {
                _this.dataSubUnit = dataSubUnit.result;
                console.log(dataSubUnit.result);
                loader.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    SearchPage.prototype.submit = function (table) {
        var _this = this;
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            var link = _this.GlobalProvider.url + 'atis/pages/api/api/search/dataSearch.php?id=' + val + '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&field11=' + _this.datas.field11 + '&field12=' + _this.datas.field12 + '&field13=' + _this.datas.field13 + '';
            console.log(link);
            _this.hargaMulai = _this.datas.hargaDari;
            _this.hargaEnd = _this.datas.hargaSampai;
            if (table == 'view_kib_a') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&id_kota=' + _this.dataSelect.kota + '&id_kec=' + _this.dataSelect.kecamatan + '&luasDari=' + _this.datas.luasDari + '&luasSampai=' + _this.datas.luasSampai + '&hargaDari=' + _this.datas.hargaDari + '&hargaSampai=' + _this.datas.hargaSampai + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_b') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_c') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&id_kota=' + _this.dataSelect.kota + '&id_kec=' + _this.dataSelect.kecamatan + _this.dataSelect.subunit + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&luasDari=' + _this.datas.luasDari + '&luasSampai=' + _this.datas.luasSampai + '&luasLantaiDari=' + _this.datas.luasLantaiDari + '&luasLantaiSampai=' + _this.datas.luasLantaiSampai + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&bertingkat=' + _this.dataSelect.bertingkat + '&beton=' + _this.dataSelect.beton + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_d') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&id_kota=' + _this.dataSelect.kota + '&id_kec=' + _this.dataSelect.kecamatan + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_e') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_f') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&id_kota=' + _this.dataSelect.kota + '&id_kec=' + _this.dataSelect.kecamatan + '&tipeBangunan=' + _this.dataSelect.tipeBangunan + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&bertingkat=' + _this.dataSelect.bertingkat + '&beton=' + _this.dataSelect.beton + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else if (table == 'view_kib_g') {
                _this.search = '&field1=' + _this.datas.field1 + '&field2=' + _this.datas.field2 + '&field3=' + _this.datas.field3 + '&field4=' + _this.datas.field4 + '&field5=' + _this.datas.field5 + '&field6=' + _this.datas.field6 + '&field7=' + _this.datas.field7 + '&field8=' + _this.datas.field8 + '&field9=' + _this.datas.field9 + '&field10=' + _this.datas.field10 + '&c1=' + _this.dataSelect.urusan + '&c=' + _this.dataSelect.bidang + '&d=' + _this.dataSelect.SKPD + '&e=' + _this.dataSelect.unit + '&e1=' + _this.dataSelect.subunit + '&hargaDari=' + _this.hargaMulai + '&hargaSampai=' + _this.hargaEnd + '&perolehan=' + _this.dataSelect.perolehan + '&staset=' + _this.dataSelect.staset + '&sumberDana=' + _this.dataSelect.sumberDana + '&kondisiBarang=' + _this.dataSelect.kondisiBarang + '&kodeBarang=' + _this.datas.kodeBarang;
            }
            else {
                _this.search = 'none';
            }
            if (_this.dataSelect.urusan != '') {
                if (_this.dataSelect.bidang === '') {
                    _this.dataSelect.bidang = "00";
                }
                if (_this.dataSelect.SKPD === '') {
                    _this.dataSelect.SKPD = "00";
                }
                if (_this.dataSelect.unit === '') {
                    _this.dataSelect.unit = "00";
                }
                if (_this.dataSelect.subunit === '') {
                    _this.dataSelect.subunit = "000";
                }
                localStorage.setItem("skpdSession", _this.dataSelect.urusan + '.' + _this.dataSelect.bidang + '.' + _this.dataSelect.SKPD + '.' + _this.dataSelect.unit + '.' + _this.dataSelect.subunit);
                console.log("SKPDnya " + localStorage.getItem("skpdSession"));
            }
            // this.ionViewDidLoad(link);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__carddata_carddata__["a" /* CarddataPage */], {
                search: _this.search
            });
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header-content">\n\n  <ion-navbar>\n      <ion-title *ngFor="let itemNama of data;  let i=index" style="text-align: left;">\n          <div *ngIf="i < 1">\n              {{ itemNama.namaPage }}\n          </div>\n        </ion-title>\n\n        <!-- <ion-buttons end>\n          <button ion-button icon-only (click)="ionViewDidLoad()" style="color: white;">\n             <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon>\n          </button>\n        </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div  *ngFor="let item of data;  let i=index">\n<div *ngIf="i < 1" style="text-align:right;">\n <div *ngIf="item.cuih == \'hiloh\'">\n    <ion-list inset>\n      <div  *ngFor="let itemInput of data;  let i=index">\n          <div *ngIf="i < 1">\n            <ion-list-header *ngIf="skpdOperator == \'undefined\'" style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n              SKPD\n            </ion-list-header>\n            <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n              <ion-label  floating>Urusan : </ion-label>\n              <ion-select class="ion-select1" (ionChange)="changeBidang()"  [(ngModel)]="dataSelect.urusan" name="urusan">\n                  <!-- [(ngModel)]="dataUrusan" -->\n                  <ion-option value=""></ion-option>\n                <ion-option *ngFor="let urusan of dataUrusan"  value="{{ urusan.c1 }}">{{ urusan.nama }}</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n                <ion-label  floating>Bidang : </ion-label>\n                <ion-select class="ion-select1" (ionChange)="changeSKPD()"  [(ngModel)]="dataSelect.bidang" name="bidang">\n                    <!-- [(ngModel)]="dataUrusan" -->\n                    <ion-option value=""></ion-option>\n                  <ion-option *ngFor="let bidang of dataBidang"  value="{{ bidang.c }}">{{ bidang.nama }}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n                  <ion-label floating>SKPD : </ion-label>\n                  <ion-select class="ion-select1" (ionChange)="changeUnit()"  [(ngModel)]="dataSelect.SKPD" name="SKPD">\n                      <!-- [(ngModel)]="dataUrusan" -->\n                      <ion-option value=""></ion-option>\n                    <ion-option *ngFor="let SKPD of dataSKPD"  value="{{ SKPD.d }}">{{ SKPD.nama }}</ion-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n                <ion-label floating>UNIT : </ion-label>\n                <ion-select class="ion-select1" (ionChange)="SubUnit()"  [(ngModel)]="dataSelect.unit" name="unit">\n                    <!-- [(ngModel)]="dataUrusan" -->\n                    <ion-option value=""></ion-option>\n                  <ion-option *ngFor="let unit of dataUnit"  value="{{ unit.e }}">{{ unit.nama }}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item *ngIf="skpdOperator == \'undefined\'" style="padding:  0; ">\n                <ion-label floating>SUB UNIT : </ion-label>\n                <ion-select class="ion-select1" [(ngModel)]="dataSelect.subunit" name="subunit">\n                    <!-- [(ngModel)]="dataUrusan" -->\n                    <ion-option value=""></ion-option>\n                  <ion-option *ngFor="let subunit of dataSubUnit"  value="{{ subunit.e1 }}">{{ subunit.nama }}</ion-option>\n                </ion-select>\n              </ion-item>\n        \n          <!-- KIB A -->\n        \n        <div *ngIf="data[0].namaTable == \'view_kib_a\'">\n          <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n            LOKASI\n          </ion-list-header>\n        \n          <ion-item *ngIf="itemInput.nama3">\n              <ion-label floating> {{ itemInput.nama3 }} : </ion-label>\n              <ion-input type="text" name="field3" [(ngModel)]="datas.field3"></ion-input>\n        </ion-item> \n\n        <ion-item  style="padding:  0;">\n            <ion-label floating>Kabupaten / Kota : </ion-label>\n            <ion-select class="ion-select2" (ionChange)="changeKec()"  [(ngModel)]="dataSelect.kota" name="kota">\n                <!-- [(ngModel)]="dataUrusan" -->\n              <ion-option *ngFor="let kota of dataKota"  value="{{ kota.kd_kota }}">{{ kota.nama }}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item style="padding:  0;">\n          <ion-label  >Kecamatan : </ion-label>\n          <ion-select class="ion-select1"  [(ngModel)]="dataSelect.kecamatan" name="kecamatan">\n              <!-- [(ngModel)]="dataUrusan" -->\n              <ion-option *ngFor="let kecamatan of dataKec"  value="{{ kecamatan.kd_kec }}">{{ kecamatan.nama }}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf="itemInput.nama5">\n            <ion-label floating> {{ itemInput.nama5 }} : </ion-label>\n            <ion-input type="text" name="field5" [(ngModel)]="datas.field5"></ion-input>\n        </ion-item> \n\n        <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n            KODE & NAMA BARANG\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label floating> Kode Barang : </ion-label>\n            <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n        </ion-item> \n        \n        <ion-item *ngIf="itemInput.nama1">\n            <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n            <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n        </ion-item>\n        \n        <ion-item *ngIf="itemInput.nama4">\n            <ion-label floating> {{ itemInput.nama4 }} : </ion-label>\n            <ion-input type="text" name="field4" [(ngModel)]="datas.field4"></ion-input>\n       </ion-item> \n\n       <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n          Harga Perolehan:\n        </ion-label>\n\n       <ion-grid>\n          <ion-row>\n           <ion-col ion-item col-4 class="input-wrappers">\n                  <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n              </ion-input></ion-col>\n              <ion-col  col-4 class="input-wrappers">\n                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n              </ion-col>\n              <ion-col ion-item col-4 class="input-wrappers">\n                <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n\n      <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n         Luas Tanah:\n     </ion-label>\n\n      <ion-grid>\n          <ion-row>\n            <ion-col ion-item col-4 class="input-wrappers">\n                  <ion-input type="text" name="luasDari" [(ngModel)]="datas.luasDari">                        \n              </ion-input></ion-col>\n              <ion-col  col-4 class="input-wrappers">\n                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n              </ion-col>\n              <ion-col ion-item col-4 class="input-wrappers">\n                <ion-input type="text" name="luasSampai" [(ngModel)]="datas.luasSampai"></ion-input>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n              <ion-item style="padding:  0; ">\n                <ion-label floating>Cara Perolehan</ion-label>\n                <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                  <ion-option value="" selected="true"></ion-option>\n                  <ion-option value="1">Pembelian</ion-option>\n                  <ion-option value="2">Hadiah / Hibah</ion-option>\n                  <ion-option value="3">Lainya</ion-option>\n                  <ion-option value="4">Mutasi</ion-option>\n                  <ion-option value="5">Reklas</ion-option>\n                  <ion-option value="6">Kapitalisasi</ion-option>\n                </ion-select>\n              </ion-item>\n\n                <ion-item style="padding:  0; ">\n                  <ion-label floating>Status Aset</ion-label>\n                  <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                    <ion-option value="" selected="true"></ion-option>\n                    <ion-option value="1">Intrakomptabel</ion-option>\n                    <ion-option value="2">Aset Lancar</ion-option>\n                    <ion-option value="3">Aset Tetap</ion-option>\n                    <ion-option value="4">Aset Lainnya</ion-option>\n                    <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                    <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                    <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                    <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                    <ion-option value="9">Aset Lain-lain</ion-option>\n                    <ion-option value="10">Ekstrakomptabel</ion-option>\n                    <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                    <ion-option value="12">Pemindahtangan hibah</ion-option>\n                    <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                    <ion-option value="14">Pemusnahan</ion-option>\n                  </ion-select>\n                </ion-item>\n\n\n                <ion-item style="padding:  0; ">\n                    <ion-label floating>Sumber Dana</ion-label>\n                    <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                        <ion-option value="" selected="true"> </ion-option>\n                        <ion-option value="APBD">APBD</ion-option>\n                        <ion-option value="BANPROV">BANPROV</ion-option>\n                        <ion-option value="Block Grand">Block Grand</ion-option>\n                        <ion-option value="BOS APBD">BOS APBD</ion-option>\n                        <ion-option value="BOS APBN">BOS APBN</ion-option>\n                        <ion-option value="DAK">DAK</ion-option>\n                        <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                        <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                        <ion-option value="JKN">JKN</ion-option>\n                        <ion-option value="Komite">Komite</ion-option>\n                        <ion-option value="Wakaf">Wakaf</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item style="padding:  0; ">\n                      <ion-label floating>Kondisi Barang</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                          <ion-option value="" selected="true"> </ion-option>\n                          <ion-option value="1">Baik</ion-option>\n                          <ion-option value="2">Kurang Baik</ion-option>\n                          <ion-option value="3">Rusak Berat</ion-option>\n                      </ion-select>\n                    </ion-item>\n\n                \n             \n\n\n              <!-- <ion-item *ngIf="itemInput.nama2">\n                  <ion-grid>\n                      <ion-row>\n                        <ion-col col-4>\n                          <ion-label floating> Luas Tanah (m2) : </ion-label>\n                          <ion-input type="text" name="field2" [(ngModel)]="datas.field2"></ion-input>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col col-4>s/d</ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col col-4>\n                            <ion-input type="text" name="field10" [(ngModel)]="datas.field10"></ion-input>\n                        </ion-col>\n                      </ion-row>\n                 </ion-grid>\n                  \n              </ion-item>  -->\n\n\n\n                \n\n\n\n\n\n\n              <ion-item *ngIf="itemInput.nama6">\n                  <ion-label floating> {{ itemInput.nama6 }} : </ion-label>\n                  <ion-input type="text" name="field6" [(ngModel)]="datas.field6"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama7">\n                  <ion-label floating> {{ itemInput.nama7 }} : </ion-label>\n                  <ion-input type="text" name="field7" [(ngModel)]="datas.field7"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama8">\n                  <ion-label floating> {{ itemInput.nama8 }} : </ion-label>\n                  <ion-input type="text" name="field8" [(ngModel)]="datas.field8"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama9">\n                  <ion-label floating> {{ itemInput.nama9 }} : </ion-label>\n                  <ion-input type="text" name="field9" [(ngModel)]="datas.field9"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama10">\n                  <ion-label floating> {{ itemInput.nama10 }} : </ion-label>\n                  <ion-input type="text" name="field10" [(ngModel)]="datas.field10"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama11">\n                  <ion-label floating> {{ itemInput.nama11 }} : </ion-label>\n                  <ion-input type="text" name="field11" [(ngModel)]="datas.field11"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama12">\n                  <ion-label floating> {{ itemInput.nama12 }} : </ion-label>\n                  <ion-input type="text" name="field12" [(ngModel)]="datas.field12"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama13">\n                  <ion-label floating> {{ itemInput.nama13 }} : </ion-label>\n                  <ion-input type="text" name="field13" [(ngModel)]="datas.field13"></ion-input>\n              </ion-item> \n          </div>\n\n          <!-- END KIB A-->\n\n          <!-- KIB B -->\n\n          \n          <div *ngIf="data[0].namaTable == \'view_kib_b\'">\n\n              <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                  KODE & NAMA BARANG\n              </ion-list-header>\n      \n              <ion-item>\n                  <ion-label floating> Kode Barang : </ion-label>\n                  <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n              </ion-item> \n    \n              <ion-item *ngIf="itemInput.nama1">\n                  <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                  <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                </ion-item> \n    \n                <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                    Harga Perolehan:\n                  </ion-label>\n          \n                 <ion-grid>\n                    <ion-row>\n                     <ion-col ion-item col-4 class="input-wrappers">\n                            <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                        </ion-input></ion-col>\n                        <ion-col  col-4 class="input-wrappers">\n                          <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                        </ion-col>\n                        <ion-col ion-item col-4 class="input-wrappers">\n                          <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                  \n                <ion-item *ngIf="itemInput.nama3">\n                      <ion-label floating> {{ itemInput.nama3 }} : </ion-label>\n                      <ion-input type="text" name="field3" [(ngModel)]="datas.field3"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nama4">\n                      <ion-label floating> {{ itemInput.nama4 }} : </ion-label>\n                      <ion-input type="text" name="field4" [(ngModel)]="datas.field4"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nam5">\n                    <ion-label floating> {{ itemInput.nama5 }} : </ion-label>\n                    <ion-input type="text" name="field5" [(ngModel)]="datas.field5"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nama6">\n                    <ion-label floating> {{ itemInput.nama6 }} : </ion-label>\n                    <ion-input type="text" name="field6" [(ngModel)]="datas.field6"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nama7">\n                    <ion-label floating> {{ itemInput.nama7 }} : </ion-label>\n                    <ion-input type="text" name="field7" [(ngModel)]="datas.field7"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nama8">\n                    <ion-label floating> {{ itemInput.nama8 }} : </ion-label>\n                    <ion-input type="text" name="field8" [(ngModel)]="datas.field8"></ion-input>\n                </ion-item> \n    \n                <ion-item *ngIf="itemInput.nama9">\n                    <ion-label floating> {{ itemInput.nama9 }} : </ion-label>\n                    <ion-input type="text" name="field9" [(ngModel)]="datas.field9"></ion-input>\n                </ion-item> \n\n              <ion-item style="padding:  0; ">\n                <ion-label floating>Cara Perolehan</ion-label>\n                <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                  <ion-option value="" selected="true"></ion-option>\n                  <ion-option value="1">Pembelian</ion-option>\n                  <ion-option value="2">Hadiah / Hibah</ion-option>\n                  <ion-option value="3">Lainya</ion-option>\n                  <ion-option value="4">Mutasi</ion-option>\n                  <ion-option value="5">Reklas</ion-option>\n                  <ion-option value="6">Kapitalisasi</ion-option>\n                </ion-select>\n              </ion-item>\n\n                <ion-item style="padding:  0; ">\n                  <ion-label floating>Status Aset</ion-label>\n                  <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                    <ion-option value="" selected="true"></ion-option>\n                    <ion-option value="1">Intrakomptabel</ion-option>\n                    <ion-option value="2">Aset Lancar</ion-option>\n                    <ion-option value="3">Aset Tetap</ion-option>\n                    <ion-option value="4">Aset Lainnya</ion-option>\n                    <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                    <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                    <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                    <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                    <ion-option value="9">Aset Lain-lain</ion-option>\n                    <ion-option value="10">Ekstrakomptabel</ion-option>\n                    <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                    <ion-option value="12">Pemindahtangan hibah</ion-option>\n                    <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                    <ion-option value="14">Pemusnahan</ion-option>\n                  </ion-select>\n                </ion-item>\n\n\n                <ion-item style="padding:  0; ">\n                    <ion-label floating>Sumber Dana</ion-label>\n                    <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                        <ion-option value="" selected="true"> </ion-option>\n                        <ion-option value="APBD">APBD</ion-option>\n                        <ion-option value="BANPROV">BANPROV</ion-option>\n                        <ion-option value="Block Grand">Block Grand</ion-option>\n                        <ion-option value="BOS APBD">BOS APBD</ion-option>\n                        <ion-option value="BOS APBN">BOS APBN</ion-option>\n                        <ion-option value="DAK">DAK</ion-option>\n                        <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                        <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                        <ion-option value="JKN">JKN</ion-option>\n                        <ion-option value="Komite">Komite</ion-option>\n                        <ion-option value="Wakaf">Wakaf</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item style="padding:  0; ">\n                      <ion-label floating>Kondisi Barang</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                          <ion-option value="" selected="true"> </ion-option>\n                          <ion-option value="1">Baik</ion-option>\n                          <ion-option value="2">Kurang Baik</ion-option>\n                          <ion-option value="3">Rusak Berat</ion-option>\n                      </ion-select>\n                    </ion-item>\n\n                \n             \n\n\n\n\n              <ion-item *ngIf="itemInput.nama10">\n                  <ion-label floating> {{ itemInput.nama10 }} : </ion-label>\n                  <ion-input type="text" name="field10" [(ngModel)]="datas.field10"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama11">\n                  <ion-label floating> {{ itemInput.nama11 }} : </ion-label>\n                  <ion-input type="text" name="field11" [(ngModel)]="datas.field11"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama12">\n                  <ion-label floating> {{ itemInput.nama12 }} : </ion-label>\n                  <ion-input type="text" name="field12" [(ngModel)]="datas.field12"></ion-input>\n              </ion-item> \n\n              <ion-item *ngIf="itemInput.nama13">\n                  <ion-label floating> {{ itemInput.nama13 }} : </ion-label>\n                  <ion-input type="text" name="field13" [(ngModel)]="datas.field13"></ion-input>\n              </ion-item> \n          </div>\n      \n          <!--END KIB B-->\n\n\n\n\n          <!-- KIB C -->\n            <div *ngIf="data[0].namaTable == \'view_kib_c\'">\n\n                      <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                        LOKASI\n                      </ion-list-header>\n\n \n                        <ion-item *ngIf="itemInput.nama2">\n                            <ion-label floating> {{ itemInput.nama2 }} : </ion-label>\n                            <ion-input type="text" name="field2" [(ngModel)]="datas.field2"></ion-input>\n                        </ion-item> \n\n                      <ion-item  style="padding:  0;">\n                        <ion-label floating>Kabupaten / Kota : </ion-label>\n                        <ion-select class="ion-select2" (ionChange)="changeKec()"  [(ngModel)]="dataSelect.kota" name="kota">\n                            <!-- [(ngModel)]="dataUrusan" -->\n                          <ion-option *ngFor="let kota of dataKota"  value="{{ kota.kd_kota }}">{{ kota.nama }}</ion-option>\n                        </ion-select>\n                    </ion-item>\n            \n                    <ion-item style="padding:  0;">\n                      <ion-label  >Kecamatan : </ion-label>\n                      <ion-select class="ion-select1"  [(ngModel)]="dataSelect.kecamatan" name="kecamatan">\n                          <!-- [(ngModel)]="dataUrusan" -->\n                          <ion-option *ngFor="let kecamatan of dataKec"  value="{{ kecamatan.kd_kec }}">{{ kecamatan.nama }}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item *ngIf="itemInput.nama5">\n                        <ion-label floating> {{ itemInput.nama5 }} : </ion-label>\n                        <ion-input type="text" name="field5" [(ngModel)]="datas.field5"></ion-input>\n                      </ion-item> \n                      \n                    <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                        Nama & Kode Barang\n                    </ion-list-header>\n                    \n                    <ion-item>\n                        <ion-label floating> Kode Barang : </ion-label>\n                        <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n                    </ion-item> \n          \n                    <ion-item *ngIf="itemInput.nama1">\n                        <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                        <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                      </ion-item> \n          \n                      <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                          Harga Perolehan :\n                        </ion-label>\n                \n                       <ion-grid>\n                          <ion-row>\n                           <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                              </ion-input></ion-col>\n                              <ion-col  col-4 class="input-wrappers">\n                                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                              </ion-col>\n                              <ion-col ion-item col-4 class="input-wrappers">\n                                <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                              </ion-col>\n                          </ion-row>\n                      </ion-grid>\n\n                      <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                          Luas Tanah :\n                      </ion-label>\n\n                      <ion-grid>\n                          <ion-row>\n                            <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="luasDari" [(ngModel)]="datas.luasDari">                        \n                              </ion-input></ion-col>\n                              <ion-col  col-4 class="input-wrappers">\n                                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                              </ion-col>\n                              <ion-col ion-item col-4 class="input-wrappers">\n                                <ion-input type="text" name="luasSampai" [(ngModel)]="datas.luasSampai"></ion-input>\n                              </ion-col>\n                          </ion-row>\n                        </ion-grid>\n\n                        <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                            Luas Lantai :\n                        </ion-label>\n\n                        <ion-grid>\n                          <ion-row>\n                            <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="luaLantaiDari" [(ngModel)]="datas.luasLantaiDari">                        \n                              </ion-input></ion-col>\n                              <ion-col  col-4 class="input-wrappers">\n                                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                              </ion-col>\n                              <ion-col ion-item col-4 class="input-wrappers">\n                                <ion-input type="text" name="luasLantaiSampai" [(ngModel)]="datas.luasLantaiSampai"></ion-input>\n                              </ion-col>\n                          </ion-row>\n                        </ion-grid>\n\n                      <ion-item style="padding:  0; ">\n                        <ion-label floating>Cara Perolehan</ion-label>\n                        <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                          <ion-option value="" selected="true"></ion-option>\n                          <ion-option value="1">Pembelian</ion-option>\n                          <ion-option value="2">Hadiah / Hibah</ion-option>\n                          <ion-option value="3">Lainya</ion-option>\n                          <ion-option value="4">Mutasi</ion-option>\n                          <ion-option value="5">Reklas</ion-option>\n                          <ion-option value="6">Kapitalisasi</ion-option>\n                        </ion-select>\n                      </ion-item>\n        \n                        <ion-item style="padding:  0; ">\n                          <ion-label floating>Status Aset</ion-label>\n                          <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                            <ion-option value="" selected="true"></ion-option>\n                            <ion-option value="1">Intrakomptabel</ion-option>\n                            <ion-option value="2">Aset Lancar</ion-option>\n                            <ion-option value="3">Aset Tetap</ion-option>\n                            <ion-option value="4">Aset Lainnya</ion-option>\n                            <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                            <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                            <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                            <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                            <ion-option value="9">Aset Lain-lain</ion-option>\n                            <ion-option value="10">Ekstrakomptabel</ion-option>\n                            <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                            <ion-option value="12">Pemindahtangan hibah</ion-option>\n                            <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                            <ion-option value="14">Pemusnahan</ion-option>\n                          </ion-select>\n                        </ion-item>\n        \n        \n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Sumber Dana</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="APBD">APBD</ion-option>\n                                <ion-option value="BANPROV">BANPROV</ion-option>\n                                <ion-option value="Block Grand">Block Grand</ion-option>\n                                <ion-option value="BOS APBD">BOS APBD</ion-option>\n                                <ion-option value="BOS APBN">BOS APBN</ion-option>\n                                <ion-option value="DAK">DAK</ion-option>\n                                <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                                <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                                <ion-option value="JKN">JKN</ion-option>\n                                <ion-option value="Komite">Komite</ion-option>\n                                <ion-option value="Wakaf">Wakaf</ion-option>\n                            </ion-select>\n                          </ion-item>\n        \n                          <ion-item style="padding:  0; ">\n                              <ion-label floating>Kondisi Barang</ion-label>\n                              <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                                  <ion-option value="" selected="true"> </ion-option>\n                                  <ion-option value="1">Baik</ion-option>\n                                  <ion-option value="2">Kurang Baik</ion-option>\n                                  <ion-option value="3">Rusak Berat</ion-option>\n                              </ion-select>\n                          </ion-item>\n\n                          <ion-item style="padding:  0; ">\n                            <ion-label floating>Bertingkat / Tidak</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.bertingkat" name="bertingkat" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Bertingkat</ion-option>\n                                <ion-option value="2">Tidak</ion-option>\n                            </ion-select>\n                          </ion-item>\n\n                          <ion-item style="padding:  0; ">\n                            <ion-label floating>Beton / Tidak</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.beton" name="beton" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Beton</ion-option>\n                                <ion-option value="2">Tidak</ion-option>\n                            </ion-select>\n                          </ion-item>\n\n                  </div>\n              \n                  <!--END KIB C-->\n\n\n                  <!-- KIB D -->\n            <div *ngIf="data[0].namaTable == \'view_kib_d\'">\n\n                  <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                      LOKASI\n                    </ion-list-header>\n\n                    <ion-item *ngIf="itemInput.nama2">\n                        <ion-label floating> {{ itemInput.nama2 }} : </ion-label>\n                        <ion-input type="text" name="field2" [(ngModel)]="datas.field2"></ion-input>\n                      </ion-item> \n\n                    <ion-item  style="padding:  0;">\n                      <ion-label floating>Kabupaten / Kota : </ion-label>\n                      <ion-select class="ion-select2" (ionChange)="changeKec()"  [(ngModel)]="dataSelect.kota" name="kota">\n                          <!-- [(ngModel)]="dataUrusan" -->\n                        <ion-option *ngFor="let kota of dataKota"  value="{{ kota.kd_kota }}">{{ kota.nama }}</ion-option>\n                      </ion-select>\n                  </ion-item>\n          \n                  <ion-item style="padding:  0;">\n                    <ion-label  >Kecamatan : </ion-label>\n                    <ion-select class="ion-select1"  [(ngModel)]="dataSelect.kecamatan" name="kecamatan">\n                        <!-- [(ngModel)]="dataUrusan" -->\n                        <ion-option *ngFor="let kecamatan of dataKec"  value="{{ kecamatan.kd_kec }}">{{ kecamatan.nama }}</ion-option>\n                      </ion-select>\n                  </ion-item>\n                    \n                  <ion-item *ngIf="itemInput.nama5">\n                        <ion-label floating> {{ itemInput.nama5 }} : </ion-label>\n                        <ion-input type="text" name="field5" [(ngModel)]="datas.field5"></ion-input>\n                  </ion-item> \n\n                  <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                    Nama & Kode Barang\n                  </ion-list-header>\n\n                  <ion-item>\n                      <ion-label floating> Kode Barang : </ion-label>\n                      <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n                  </ion-item> \n        \n                  <ion-item *ngIf="itemInput.nama1">\n                      <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                      <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                    </ion-item> \n        \n                    <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                        Harga Perolehan :\n                      </ion-label>\n              \n                     <ion-grid>\n                        <ion-row>\n                         <ion-col ion-item col-4 class="input-wrappers">\n                                <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                            </ion-input></ion-col>\n                            <ion-col  col-4 class="input-wrappers">\n                              <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                            </ion-col>\n                            <ion-col ion-item col-4 class="input-wrappers">\n                              <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                    <ion-item *ngIf="itemInput.nama4">\n                        <ion-label floating> {{ itemInput.nama4 }} : </ion-label>\n                        <ion-input type="text" name="field4" [(ngModel)]="datas.field4"></ion-input>\n                      </ion-item> \n\n                    <ion-item style="padding:  0; ">\n                      <ion-label floating>Cara Perolehan</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                        <ion-option value="" selected="true"></ion-option>\n                        <ion-option value="1">Pembelian</ion-option>\n                        <ion-option value="2">Hadiah / Hibah</ion-option>\n                        <ion-option value="3">Lainya</ion-option>\n                        <ion-option value="4">Mutasi</ion-option>\n                        <ion-option value="5">Reklas</ion-option>\n                        <ion-option value="6">Kapitalisasi</ion-option>\n                      </ion-select>\n                    </ion-item>\n      \n                      <ion-item style="padding:  0; ">\n                        <ion-label floating>Status Aset</ion-label>\n                        <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                          <ion-option value="" selected="true"></ion-option>\n                          <ion-option value="1">Intrakomptabel</ion-option>\n                          <ion-option value="2">Aset Lancar</ion-option>\n                          <ion-option value="3">Aset Tetap</ion-option>\n                          <ion-option value="4">Aset Lainnya</ion-option>\n                          <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                          <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                          <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                          <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                          <ion-option value="9">Aset Lain-lain</ion-option>\n                          <ion-option value="10">Ekstrakomptabel</ion-option>\n                          <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                          <ion-option value="12">Pemindahtangan hibah</ion-option>\n                          <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                          <ion-option value="14">Pemusnahan</ion-option>\n                        </ion-select>\n                      </ion-item>\n      \n      \n                      <ion-item style="padding:  0; ">\n                          <ion-label floating>Sumber Dana</ion-label>\n                          <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                              <ion-option value="" selected="true"> </ion-option>\n                              <ion-option value="APBD">APBD</ion-option>\n                              <ion-option value="BANPROV">BANPROV</ion-option>\n                              <ion-option value="Block Grand">Block Grand</ion-option>\n                              <ion-option value="BOS APBD">BOS APBD</ion-option>\n                              <ion-option value="BOS APBN">BOS APBN</ion-option>\n                              <ion-option value="DAK">DAK</ion-option>\n                              <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                              <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                              <ion-option value="JKN">JKN</ion-option>\n                              <ion-option value="Komite">Komite</ion-option>\n                              <ion-option value="Wakaf">Wakaf</ion-option>\n                          </ion-select>\n                        </ion-item>\n      \n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Kondisi Barang</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Baik</ion-option>\n                                <ion-option value="2">Kurang Baik</ion-option>\n                                <ion-option value="3">Rusak Berat</ion-option>\n                            </ion-select>\n                        </ion-item>\n      \n                    \n                    \n\n\n\n\n                </div>\n            \n                <!--END KIB D-->\n\n\n\n                <!-- KIB E -->\n                <div *ngIf="data[0].namaTable == \'view_kib_e\'">\n\n                    <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                        Nama & Kode Barang\n                      </ion-list-header>\n    \n                      <ion-item>\n                          <ion-label floating> Kode Barang : </ion-label>\n                          <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n                      </ion-item> \n            \n                      <ion-item *ngIf="itemInput.nama1">\n                          <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                          <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                        </ion-item> \n            \n                        <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                            Harga Perolehan :\n                          </ion-label>\n                  \n                         <ion-grid>\n                            <ion-row>\n                             <ion-col ion-item col-4 class="input-wrappers">\n                                    <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                                </ion-input></ion-col>\n                                <ion-col  col-4 class="input-wrappers">\n                                  <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                                </ion-col>\n                                <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                        <ion-item *ngIf="itemInput.nama2">\n                            <ion-label floating> {{ itemInput.nama2 }} : </ion-label>\n                            <ion-input type="text" name="field2" [(ngModel)]="datas.field2"></ion-input>\n                      </ion-item> \n                        \n                        <ion-item *ngIf="itemInput.nama3">\n                            <ion-label floating> {{ itemInput.nama3 }} : </ion-label>\n                            <ion-input type="text" name="field3" [(ngModel)]="datas.field3"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama4">\n                            <ion-label floating> {{ itemInput.nama4 }} : </ion-label>\n                            <ion-input type="text" name="field4" [(ngModel)]="datas.field4"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nam5">\n                          <ion-label floating> {{ itemInput.nama5 }} : </ion-label>\n                          <ion-input type="text" name="field5" [(ngModel)]="datas.field5"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama6">\n                          <ion-label floating> {{ itemInput.nama6 }} : </ion-label>\n                          <ion-input type="text" name="field6" [(ngModel)]="datas.field6"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama7">\n                          <ion-label floating> {{ itemInput.nama7 }} : </ion-label>\n                          <ion-input type="text" name="field7" [(ngModel)]="datas.field7"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama8">\n                          <ion-label floating> {{ itemInput.nama8 }} : </ion-label>\n                          <ion-input type="text" name="field8" [(ngModel)]="datas.field8"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama9">\n                          <ion-label floating> {{ itemInput.nama9 }} : </ion-label>\n                          <ion-input type="text" name="field9" [(ngModel)]="datas.field9"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama10">\n                          <ion-label floating> {{ itemInput.nama10 }} : </ion-label>\n                          <ion-input type="text" name="field10" [(ngModel)]="datas.field10"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama11">\n                          <ion-label floating> {{ itemInput.nama11 }} : </ion-label>\n                          <ion-input type="text" name="field11" [(ngModel)]="datas.field11"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama12">\n                          <ion-label floating> {{ itemInput.nama12 }} : </ion-label>\n                          <ion-input type="text" name="field12" [(ngModel)]="datas.field12"></ion-input>\n                      </ion-item> \n        \n                      <ion-item *ngIf="itemInput.nama13">\n                          <ion-label floating> {{ itemInput.nama13 }} : </ion-label>\n                          <ion-input type="text" name="field13" [(ngModel)]="datas.field13"></ion-input>\n                      </ion-item> \n\n                    <ion-item style="padding:  0; ">\n                      <ion-label floating>Cara Perolehan</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                        <ion-option value="" selected="true"></ion-option>\n                        <ion-option value="1">Pembelian</ion-option>\n                        <ion-option value="2">Hadiah / Hibah</ion-option>\n                        <ion-option value="3">Lainya</ion-option>\n                        <ion-option value="4">Mutasi</ion-option>\n                        <ion-option value="5">Reklas</ion-option>\n                        <ion-option value="6">Kapitalisasi</ion-option>\n                      </ion-select>\n                    </ion-item>\n      \n                      <ion-item style="padding:  0; ">\n                        <ion-label floating>Status Aset</ion-label>\n                        <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                          <ion-option value="" selected="true"></ion-option>\n                          <ion-option value="1">Intrakomptabel</ion-option>\n                          <ion-option value="2">Aset Lancar</ion-option>\n                          <ion-option value="3">Aset Tetap</ion-option>\n                          <ion-option value="4">Aset Lainnya</ion-option>\n                          <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                          <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                          <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                          <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                          <ion-option value="9">Aset Lain-lain</ion-option>\n                          <ion-option value="10">Ekstrakomptabel</ion-option>\n                          <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                          <ion-option value="12">Pemindahtangan hibah</ion-option>\n                          <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                          <ion-option value="14">Pemusnahan</ion-option>\n                        </ion-select>\n                      </ion-item>\n      \n      \n                      <ion-item style="padding:  0; ">\n                          <ion-label floating>Sumber Dana</ion-label>\n                          <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                              <ion-option value="" selected="true"> </ion-option>\n                              <ion-option value="APBD">APBD</ion-option>\n                              <ion-option value="BANPROV">BANPROV</ion-option>\n                              <ion-option value="Block Grand">Block Grand</ion-option>\n                              <ion-option value="BOS APBD">BOS APBD</ion-option>\n                              <ion-option value="BOS APBN">BOS APBN</ion-option>\n                              <ion-option value="DAK">DAK</ion-option>\n                              <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                              <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                              <ion-option value="JKN">JKN</ion-option>\n                              <ion-option value="Komite">Komite</ion-option>\n                              <ion-option value="Wakaf">Wakaf</ion-option>\n                          </ion-select>\n                        </ion-item>\n      \n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Kondisi Barang</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Baik</ion-option>\n                                <ion-option value="2">Kurang Baik</ion-option>\n                                <ion-option value="3">Rusak Berat</ion-option>\n                            </ion-select>\n                        </ion-item>\n      \n                    \n\n\n                </div>\n            \n                <!--END KIB E-->\n\n\n\n                <!-- KIB F -->\n                <div *ngIf="data[0].namaTable == \'view_kib_f\'">\n\n                    <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                        LOKASI\n                      </ion-list-header>\n                      <ion-item *ngIf="itemInput.nama2">\n                          <ion-label floating> {{ itemInput.nama2 }} : </ion-label>\n                          <ion-input type="text" name="field2" [(ngModel)]="datas.field2"></ion-input>\n                     </ion-item> \n\n                      <ion-item  style="padding:  0;">\n                        <ion-label floating>Kabupaten / Kota : </ion-label>\n                        <ion-select class="ion-select2" (ionChange)="changeKec()"  [(ngModel)]="dataSelect.kota" name="kota">\n                            <!-- [(ngModel)]="dataUrusan" -->\n                          <ion-option *ngFor="let kota of dataKota"  value="{{ kota.kd_kota }}">{{ kota.nama }}</ion-option>\n                        </ion-select>\n                    </ion-item>\n            \n                    <ion-item style="padding:  0;">\n                      <ion-label  >Kecamatan : </ion-label>\n                      <ion-select class="ion-select1"  [(ngModel)]="dataSelect.kecamatan" name="kecamatan">\n                          <!-- [(ngModel)]="dataUrusan" -->\n                          <ion-option *ngFor="let kecamatan of dataKec"  value="{{ kecamatan.kd_kec }}">{{ kecamatan.nama }}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n\n                    \n\n    \n                  <ion-item *ngIf="itemInput.nama4">\n                        <ion-label floating> {{ itemInput.nama4 }} : </ion-label>\n                        <ion-input type="text" name="field4" [(ngModel)]="datas.field4"></ion-input>\n                  </ion-item> \n    \n\n                  <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                      Nama & Kode Barang\n                    </ion-list-header>\n  \n                    <ion-item>\n                        <ion-label floating> Kode Barang : </ion-label>\n                        <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n                    </ion-item> \n          \n                    <ion-item *ngIf="itemInput.nama1">\n                        <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                        <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                      </ion-item> \n          \n                      <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                          Harga Perolehan :\n                        </ion-label>\n                \n                       <ion-grid>\n                          <ion-row>\n                           <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                              </ion-input></ion-col>\n                              <ion-col  col-4 class="input-wrappers">\n                                <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                              </ion-col>\n                              <ion-col ion-item col-4 class="input-wrappers">\n                                <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                              </ion-col>\n                          </ion-row>\n                      </ion-grid>\n\n                  <ion-item *ngIf="itemInput.nama3">\n                      <ion-label floating> {{ itemInput.nama3 }} : </ion-label>\n                      <ion-input type="text" name="field3" [(ngModel)]="datas.field3"></ion-input>\n                 </ion-item> \n\n                    <ion-item style="padding:  0; ">\n                      <ion-label floating>Cara Perolehan</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                        <ion-option value="" selected="true"></ion-option>\n                        <ion-option value="1">Pembelian</ion-option>\n                        <ion-option value="2">Hadiah / Hibah</ion-option>\n                        <ion-option value="3">Lainya</ion-option>\n                        <ion-option value="4">Mutasi</ion-option>\n                        <ion-option value="5">Reklas</ion-option>\n                        <ion-option value="6">Kapitalisasi</ion-option>\n                      </ion-select>\n                    </ion-item>\n      \n                      <ion-item style="padding:  0; ">\n                        <ion-label floating>Status Aset</ion-label>\n                        <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                          <ion-option value="" selected="true"></ion-option>\n                          <ion-option value="1">Intrakomptabel</ion-option>\n                          <ion-option value="2">Aset Lancar</ion-option>\n                          <ion-option value="3">Aset Tetap</ion-option>\n                          <ion-option value="4">Aset Lainnya</ion-option>\n                          <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                          <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                          <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                          <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                          <ion-option value="9">Aset Lain-lain</ion-option>\n                          <ion-option value="10">Ekstrakomptabel</ion-option>\n                          <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                          <ion-option value="12">Pemindahtangan hibah</ion-option>\n                          <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                          <ion-option value="14">Pemusnahan</ion-option>\n                        </ion-select>\n                      </ion-item>\n      \n      \n                      <ion-item style="padding:  0; ">\n                          <ion-label floating>Sumber Dana</ion-label>\n                          <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                              <ion-option value="" selected="true"> </ion-option>\n                              <ion-option value="APBD">APBD</ion-option>\n                              <ion-option value="BANPROV">BANPROV</ion-option>\n                              <ion-option value="Block Grand">Block Grand</ion-option>\n                              <ion-option value="BOS APBD">BOS APBD</ion-option>\n                              <ion-option value="BOS APBN">BOS APBN</ion-option>\n                              <ion-option value="DAK">DAK</ion-option>\n                              <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                              <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                              <ion-option value="JKN">JKN</ion-option>\n                              <ion-option value="Komite">Komite</ion-option>\n                              <ion-option value="Wakaf">Wakaf</ion-option>\n                          </ion-select>\n                        </ion-item>\n                        \n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Bertingkat / Tidak</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.bertingkat" name="bertingkat" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Bertingkat</ion-option>\n                                <ion-option value="2">Tidak</ion-option>\n                            </ion-select>\n                          </ion-item>\n\n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Tipe Bangunan</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.tipeBangunan" name="tipeBangunan" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Permanen</ion-option>\n                                <ion-option value="2">Semi Permanen</ion-option>\n                                <ion-option value="3">Darurat</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n\n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Kondisi Barang</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Baik</ion-option>\n                                <ion-option value="2">Kurang Baik</ion-option>\n                                <ion-option value="3">Rusak Berat</ion-option>\n                            </ion-select>\n                        </ion-item>\n      \n                    \n                    \n\n\n\n\n                </div>\n            \n                <!--END KIB F-->\n\n\n                <!-- KIB G -->\n                <div *ngIf="data[0].namaTable == \'view_kib_g\'">\n                  \n                    <ion-list-header style="text-align: left;padding:  0;font-size: 17px;background: #f7f7f7;color: #dc9b4a;border-bottom: 1px dashed;margin-top: 20px;height:  0px;border-top: 1px dashed;min-height: 3.5rem;">\n                        Nama & Kode Barang\n                      </ion-list-header>\n    \n                      <ion-item>\n                          <ion-label floating> Kode Barang : </ion-label>\n                          <ion-input type="text" name="kodeBarang" [(ngModel)]="datas.kodeBarang"></ion-input>\n                      </ion-item> \n            \n                      <ion-item *ngIf="itemInput.nama1">\n                          <ion-label floating> {{ itemInput.nama1 }} : </ion-label>\n                          <ion-input type="text" name="field1" [(ngModel)]="datas.field1"></ion-input>\n                        </ion-item> \n    \n                        <ion-label stacked style="text-align: left;padding:  0;font-size: 15px;">\n                            Harga Perolehan :\n                          </ion-label>\n                  \n                         <ion-grid>\n                            <ion-row>\n                             <ion-col ion-item col-4 class="input-wrappers">\n                                    <ion-input type="text" name="hargaDari" [(ngModel)]="datas.hargaDari">                        \n                                </ion-input></ion-col>\n                                <ion-col  col-4 class="input-wrappers">\n                                  <h6 style="text-align:center; color:#f19d36;">s/d</h6>\n                                </ion-col>\n                                <ion-col ion-item col-4 class="input-wrappers">\n                                  <ion-input type="text" name="hargaSampai" [(ngModel)]="datas.hargaSampai"></ion-input>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n    \n                            <ion-item *ngIf="itemInput.nama3">\n                                <ion-label floating> {{ itemInput.nama3 }} : </ion-label>\n                                <ion-input type="text" name="field3" [(ngModel)]="datas.field3"></ion-input>\n                          </ion-item> \n\n                    <ion-item style="padding:  0; ">\n                      <ion-label floating>Cara Perolehan</ion-label>\n                      <ion-select [(ngModel)]="dataSelect.perolehan" name="perolehan">\n                        <ion-option value="" selected="true"></ion-option>\n                        <ion-option value="1">Pembelian</ion-option>\n                        <ion-option value="2">Hadiah / Hibah</ion-option>\n                        <ion-option value="3">Lainya</ion-option>\n                        <ion-option value="4">Mutasi</ion-option>\n                        <ion-option value="5">Reklas</ion-option>\n                        <ion-option value="6">Kapitalisasi</ion-option>\n                      </ion-select>\n                    </ion-item>\n      \n                      <ion-item style="padding:  0; ">\n                        <ion-label floating>Status Aset</ion-label>\n                        <ion-select [(ngModel)]="dataSelect.staset" name="staset" style="font-size: 15px;">\n                          <ion-option value="" selected="true"></ion-option>\n                          <ion-option value="1">Intrakomptabel</ion-option>\n                          <ion-option value="2">Aset Lancar</ion-option>\n                          <ion-option value="3">Aset Tetap</ion-option>\n                          <ion-option value="4">Aset Lainnya</ion-option>\n                          <ion-option value="5">Tagihan Penjualan Angsuran</ion-option>\n                          <ion-option value="6">Tuntutan Ganti Rugi</ion-option>\n                          <ion-option value="7">Kemitraan dengan Pihak Ke Tiga</ion-option>\n                          <ion-option value="8">Aset Tidak Berwujud</ion-option>\n                          <ion-option value="9">Aset Lain-lain</ion-option>\n                          <ion-option value="10">Ekstrakomptabel</ion-option>\n                          <ion-option value="11">Pemindahtangan tukar menukar</ion-option>\n                          <ion-option value="12">Pemindahtangan hibah</ion-option>\n                          <ion-option value="13">Pemindahtangan penyertaan modal</ion-option>\n                          <ion-option value="14">Pemusnahan</ion-option>\n                        </ion-select>\n                      </ion-item>\n      \n      \n                      <ion-item style="padding:  0; ">\n                          <ion-label floating>Sumber Dana</ion-label>\n                          <ion-select [(ngModel)]="dataSelect.sumberDana" name="sumberDana">\n                              <ion-option value="" selected="true"> </ion-option>\n                              <ion-option value="APBD">APBD</ion-option>\n                              <ion-option value="BANPROV">BANPROV</ion-option>\n                              <ion-option value="Block Grand">Block Grand</ion-option>\n                              <ion-option value="BOS APBD">BOS APBD</ion-option>\n                              <ion-option value="BOS APBN">BOS APBN</ion-option>\n                              <ion-option value="DAK">DAK</ion-option>\n                              <ion-option value="Hibah Provinsi">Hibah Provinsi</ion-option>\n                              <ion-option value="Hibah Pusat">Hibah Pusat</ion-option>\n                              <ion-option value="JKN">JKN</ion-option>\n                              <ion-option value="Komite">Komite</ion-option>\n                              <ion-option value="Wakaf">Wakaf</ion-option>\n                          </ion-select>\n                        </ion-item>\n      \n                        <ion-item style="padding:  0; ">\n                            <ion-label floating>Kondisi Barang</ion-label>\n                            <ion-select [(ngModel)]="dataSelect.kondisiBarang" name="kondisiBarang" style="font-size: 15px;">\n                                <ion-option value="" selected="true"> </ion-option>\n                                <ion-option value="1">Baik</ion-option>\n                                <ion-option value="2">Kurang Baik</ion-option>\n                                <ion-option value="3">Rusak Berat</ion-option>\n                            </ion-select>\n                        </ion-item>\n      \n                    \n                    \n\n                        \n\n\n                </div>\n            \n                <!--END KIB G-->\n\n\n                \n          </div>\n      </div>\n\n\n\n       \n      </ion-list>\n  </div>\n</div>\n\n\n</div>\n\n<ion-fab bottom (click)="submit(data[0].namaTable)" style="width: 100%; bottom: 0; text-align:  center; background: #f19d36;">\n  <ion-row>\n          <ion-col style="padding:  3%;font-size: 13px;color: #fff;">\n                CARI DATA\n         </ion-col>\n  </ion-row>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ScanerlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensusPage = /** @class */ (function () {
    function SensusPage(GlobalProvider, appCtrl, navCtrl, barcodeScanner, toast, storage, http, dataService) {
        this.GlobalProvider = GlobalProvider;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.storage = storage;
        this.http = http;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
    }
    SensusPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ScanerlayoutPage');
        this.storage.get('pageSession').then(function (val) {
            console.log('Kamu Memilih Page', val);
            _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/sensus/dataSensus.php?id=' + val)
                .map(function (result) { return result.json(); })
                .subscribe(function (data) {
                _this.data = data.result;
                console.log(data.result);
            }, function (err) {
                console.log(err);
            });
        });
        this.scan();
    };
    SensusPage.prototype.scan = function () {
        var _this = this;
        var options = {
            prompt: " "
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            _this.storage.get('pageSession').then(function (val) {
                return _this.http.get(_this.GlobalProvider.url + 'atis/pages/api/api/sensus/dataSensus.php?search=' + barcodeData.text)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (response) {
                    _this.products = response;
                    _this.selectedProduct = _this.products.find(function (product) { return product.idbi === barcodeData.text; });
                    if (_this.selectedProduct !== undefined) {
                        _this.productFound = true;
                        console.log(_this.selectedProduct);
                    }
                    else {
                        _this.selectedProduct = {};
                        _this.productFound = false;
                        _this.toast.show('Data ' + barcodeData.text + ' Tidak Ada / Tidak Diketahui', '8000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                    console.log(_this.products);
                });
            });
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    SensusPage.prototype.home = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    SensusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensus',template:/*ion-inline-start:"C:\Users\FUJIN\Atisisbada\src\pages\sensus\sensus.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n      <ion-buttons left>\n          <button ion-button icon-only  (click)="home()">\n             <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button> \n        </ion-buttons>\n\n    <ion-title>\n        SENSUS\n    </ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content class="home-content" padding style=\'background-color: #efefef;\'>\n\n\n\n  <ion-card style="margin: 0 !important; width: calc(100% - 0px);" *ngIf="productFound">\n      \n    <div style=" background: #0bb991; color: white; padding: 3%;" *ngIf="selectedProduct.mode == 1">\n          <ion-icon ios="ios-alert" md="md-alert"></ion-icon>\n          Inventarisasi Barang Sukses\n      </div>\n\n      <div style=" background: #b6b90b; color: white; padding: 3%;" *ngIf="selectedProduct.mode == 2">\n          <ion-icon ios="ios-alert" md="md-alert"></ion-icon>\n           Sudah Di Inventarisasi\n      </div>\n\n      <div style=" background: #b90b43; color: white; padding: 3%;" *ngIf="selectedProduct.mode == 3">\n          <ion-icon ios="ios-alert" md="md-alert"></ion-icon>\n         ID Barang Tidak Ditemukan\n      </div>\n\n    <ion-card-content class="sensus" *ngIf="selectedProduct.mode == 1">\n        <ion-card-title>\n            ID Barang : {{ selectedProduct.idbi }}\n          </ion-card-title>\n      \n          <ion-item>\n              <b><h2>Nama Barang</h2></b>\n              <h3>{{ selectedProduct.nm_barang }}</h3>\n          </ion-item>\n\n          <ion-item>\n            <b><h2>Kondisi</h2></b>\n            <h3>{{ selectedProduct.kondisi }}	</h3>\n        </ion-item>\n          \n        <ion-row style="text-align:  center;">\n          <ion-col style="border-right: 1px solid #c5bcbc;background-color: #04c2e4;">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="home()">\n                      <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                 Kembali\n              </button>\n            </ion-col>\n      \n          <ion-col style=" background: #0bb991; ">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="scan()">\n                  <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                Scan\n              </button>\n         </ion-col>\n       </ion-row>\n\n    </ion-card-content>\n\n    <ion-card-content class="sensus" *ngIf="selectedProduct.mode == 2">\n        <ion-card-title>\n            ID Barang : {{ selectedProduct.idbi }}\n          </ion-card-title>\n      \n          <ion-item>\n              <b><h2>Nama Barang</h2></b>\n              <h3>{{ selectedProduct.nm_barang }}</h3>\n          </ion-item>\n\n          <ion-item>\n            <b><h2>Kondisi</h2></b>\n            <h3>{{ selectedProduct.kondisi }}	</h3>\n        </ion-item>\n          \n        <ion-row style="text-align:  center;">\n          <ion-col style="border-right: 1px solid #c5bcbc;background-color: #04c2e4;">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="home()">\n                      <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                 Kembali\n              </button>\n            </ion-col>\n      \n          <ion-col style=" background: #0bb991; ">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="scan()">\n                  <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                Scan\n              </button>\n         </ion-col>\n       </ion-row>\n\n    </ion-card-content>\n\n    <ion-card-content class="sensus" *ngIf="selectedProduct.mode == 3">\n        <ion-card-title>\n            ID Barang : {{ selectedProduct.idbi }}\n          </ion-card-title>\n      \n          \n        <ion-row style="text-align:  center;">\n          <ion-col style="border-right: 1px solid #c5bcbc;background-color: #04c2e4;">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="home()">\n                      <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                 Kembali\n              </button>\n            </ion-col>\n      \n          <ion-col style=" background: #0bb991; ">\n              <button style="color: #fff;" ion-button clear small color="danger" icon-start (click)="scan()">\n                  <ion-icon ios="ios-search" md="md-search"></ion-icon>\n                Scan\n              </button>\n         </ion-col>\n       </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FUJIN\Atisisbada\src\pages\sensus\sensus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], SensusPage);
    return SensusPage;
}());

//# sourceMappingURL=sensus.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.url = "http://123.231.253.228/";
    }
    GlobalProvider.prototype.urlService = function () {
        return this.url;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map