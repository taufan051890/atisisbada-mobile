import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensusPage } from './sensus';
@NgModule({
  declarations: [
    SensusPage
  ],
  imports: [
    IonicPageModule.forChild(SensusPage)
  ],
  entryComponents: [
    SensusPage
  ]
})
export class SensusPageModule {}
