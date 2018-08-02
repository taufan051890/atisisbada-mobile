import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverHomePage } from './popover-home';

@NgModule({
  declarations: [
    PopoverHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverHomePage),
  ],
})
export class PopoverHomePageModule {}
