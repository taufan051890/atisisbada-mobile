import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KibFPage } from './kib-f';

@NgModule({
  declarations: [
    KibFPage
  ],
  imports: [
    IonicPageModule.forChild(KibFPage)
  ],
  entryComponents: [
    KibFPage
  ]
})
export class KibFPageModule {}
