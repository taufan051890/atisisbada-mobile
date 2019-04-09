import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibEPage } from './kib-e';

@NgModule({
  declarations: [
    KibEPage
  ],
  imports: [
    IonicPageModule.forChild(KibEPage)
  ],
  entryComponents: [
    KibEPage
  ]
})
export class KibEPageModule {}
