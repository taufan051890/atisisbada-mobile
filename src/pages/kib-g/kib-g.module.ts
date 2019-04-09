import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibGPage } from './kib-g';
@NgModule({
  declarations: [
    KibGPage
  ],
  imports: [
    IonicPageModule.forChild(KibGPage)
  ],
  entryComponents: [
    KibGPage
  ]
})
export class KibGPageModule {}
