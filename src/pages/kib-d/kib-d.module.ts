import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibDPage } from './kib-d';

@NgModule({
  declarations: [
    KibDPage
  ],
  imports: [
    IonicPageModule.forChild(KibDPage)
  ],
  entryComponents: [
    KibDPage
  ]
})
export class KibDPageModule {}
