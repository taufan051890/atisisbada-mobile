import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapslayoutPage } from './mapslayout';

@NgModule({
  declarations: [
    MapslayoutPage
  ],
  imports: [
    IonicPageModule.forChild(MapslayoutPage)
  ],
  entryComponents: [
    MapslayoutPage
  ]
})
export class MapslayoutPageModule {}
