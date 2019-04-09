import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RekapPage } from './rekap';

@NgModule({
  declarations: [
    RekapPage
  ],
  imports: [
    IonicPageModule.forChild(RekapPage)
  ],
  entryComponents: [
    RekapPage
  ]
})
export class RekapPageModule {}
