import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverCardPage } from './popover-card';

@NgModule({
  declarations: [
    PopoverCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverCardPage),
  ],
})
export class PopoverCardPageModule {}
