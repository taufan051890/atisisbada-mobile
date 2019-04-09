import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UbahProfilePage } from './ubah-profile';

@NgModule({
  declarations: [
    UbahProfilePage
  ],
  imports: [
    IonicPageModule.forChild(UbahProfilePage)
  ],
  entryComponents: [
    UbahProfilePage
  ]
})
export class UbahProfilePageModule {}
