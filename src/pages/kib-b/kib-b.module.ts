import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibBPage } from './kib-b';

@NgModule({
  declarations: [
    KibBPage
  ],
  imports: [
    IonicPageModule.forChild(KibBPage)
  ],
  entryComponents: [
    KibBPage
  ]
})
export class KibBPageModule {}
