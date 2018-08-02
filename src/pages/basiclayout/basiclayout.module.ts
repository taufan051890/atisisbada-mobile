import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasiclayoutPage } from './basiclayout';

@NgModule({
  declarations: [
    BasiclayoutPage,
  ],
  imports: [
    IonicPageModule.forChild(BasiclayoutPage),
  ],
})
export class BasiclayoutPageModule {}
