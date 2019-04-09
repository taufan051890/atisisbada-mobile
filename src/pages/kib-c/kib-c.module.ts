import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibCPage } from './kib-c';
@NgModule({
  declarations: [
    KibCPage
  ],
  imports: [
    IonicPageModule.forChild(KibCPage)
  ],
  entryComponents: [
    KibCPage
  ]
})
export class KibCPageModule {}
