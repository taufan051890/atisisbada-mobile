import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CariSkpdPage } from './cari-skpd';

@NgModule({
  declarations: [
    CariSkpdPage
  ],
  imports: [
    IonicPageModule.forChild(CariSkpdPage)
  ],
  entryComponents: [
    CariSkpdPage
  ]
})
export class CariSkpdPageModule {}
