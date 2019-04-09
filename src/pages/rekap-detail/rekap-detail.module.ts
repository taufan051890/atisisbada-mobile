import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RekapDetailPage } from './rekap-detail';

@NgModule({
  declarations: [
    RekapDetailPage
  ],
  imports: [
    IonicPageModule.forChild(RekapDetailPage)
  ],
  entryComponents: [
    RekapDetailPage
  ]
})
export class RekapDetailPageModule {}
