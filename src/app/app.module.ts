import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AllPage } from '../pages/all/all';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { ListlayoutPage } from '../pages/listlayout/listlayout';
import { MapslayoutPage } from '../pages/mapslayout/mapslayout';
import { CardlayoutPage } from '../pages/cardlayout/cardlayout';
import { BasiclayoutPage } from '../pages/basiclayout/basiclayout';
import { ScanerlayoutPage } from '../pages/scanerlayout/scanerlayout';
import { ScanerqrlayoutPage } from '../pages/scanerqrlayout/scanerqrlayout';
import { CarddataPage } from '../pages/carddata/carddata';
import { SearchPage } from '../pages/search/search';
import { ResultSearchPage } from '../pages/result-search/result-search';
import { SortPage } from '../pages/sort/sort';


import { SensusPage } from '../pages/sensus/sensus';
import { KibAPage } from '../pages/kib-a/kib-a';
import { KibBPage } from '../pages/kib-b/kib-b';
import { KibCPage } from '../pages/kib-c/kib-c';
import { KibDPage } from '../pages/kib-d/kib-d';
import { KibEPage } from '../pages/kib-e/kib-e';
import { KibFPage } from '../pages/kib-f/kib-f';
import { KibGPage } from '../pages/kib-g/kib-g';
import { PopoverHomePage } from '../pages/popover-home/popover-home';
import { PopoverCardPage } from '../pages/popover-card/popover-card';
import { RekapPage } from '../pages/rekap/rekap';
import { Rekap2Page } from '../pages/rekap2/rekap2';
import { Rekap3Page } from '../pages/rekap3/rekap3';
import { Rekap4Page } from '../pages/rekap4/rekap4';
import { Rekap5Page } from '../pages/rekap5/rekap5';
import { Rekap6Page } from '../pages/rekap6/rekap6';
import { Rekap7Page } from '../pages/rekap7/rekap7';
import { RekapDetailPage } from '../pages/rekap-detail/rekap-detail';
import { CariSkpdPage } from '../pages/cari-skpd/cari-skpd';

import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { Toast } from '@ionic-native/toast';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import {Camera} from '@ionic-native/camera';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    // MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    // LoginPage,
    // AllPage,
    // ListlayoutPage,
    // MapslayoutPage,
    // CardlayoutPage,
    // CarddataPage,
    // SearchPage,
    // ResultSearchPage,
    // SortPage,
    // KibAPage,
    // KibBPage,
    // KibCPage,
    // KibDPage,
    // KibEPage,
    // KibFPage,
    // KibGPage,
    // SensusPage,
    // PopoverHomePage,
    // PopoverCardPage,
    // MenuPage,
    // TabsPage,
    // RekapPage,
    // Rekap2Page,
    // Rekap3Page,
    // Rekap4Page,
    // Rekap5Page,
    // Rekap6Page,
    // Rekap7Page,
    // RekapDetailPage,
    // CariSkpdPage,
    // BasiclayoutPage,
    // ScanerlayoutPage,
    // ScanerqrlayoutPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    AllPage,
    ListlayoutPage,
    MapslayoutPage,
    CardlayoutPage,
    CarddataPage,
    SearchPage,
    SortPage,
    KibAPage,
    KibBPage,
    KibCPage,
    KibDPage,
    KibEPage,
    KibFPage,
    KibGPage,
    SensusPage,
    PopoverHomePage,
    PopoverCardPage,
    MenuPage,
    TabsPage,
    RekapPage,
    Rekap2Page,
    Rekap3Page,
    Rekap4Page,
    Rekap5Page,
    Rekap6Page,
    Rekap7Page,
    RekapDetailPage,
    CariSkpdPage,
    ResultSearchPage,
    BasiclayoutPage,
    ScanerlayoutPage,
    ScanerqrlayoutPage
  ],
  providers: [
    ErrorHandler,
    StatusBar,
    SplashScreen,
    SocialSharing,
    PhotoViewer,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    DataServiceProvider,
    Toast,
    Camera,
    GlobalProvider
  ]
})
export class AppModule {}
