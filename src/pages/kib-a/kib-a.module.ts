import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibAPage } from './kib-a';

@NgModule({
  declarations: [
    KibAPage
  ],
  imports: [
    IonicPageModule.forChild(KibAPage)
  ],
  entryComponents: [
    KibAPage
  ]
})
export class KibAPageModule {}
