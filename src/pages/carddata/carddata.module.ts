import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarddataPage } from './carddata';

@NgModule({
  declarations: [
    CarddataPage
  ],
  imports: [
    IonicPageModule.forChild(CarddataPage)
  ],
  entryComponents: [
    CarddataPage
  ]
})
export class CarddataPageModule {}
