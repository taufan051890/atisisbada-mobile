import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanerlayoutPage } from './scanerlayout';

@NgModule({
  declarations: [
    ScanerlayoutPage
  ],
  imports: [
    IonicPageModule.forChild(ScanerlayoutPage)
  ],
  entryComponents: [
    ScanerlayoutPage
  ]
})
export class ScanerlayoutPageModule {}
