import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkipperPage } from './skipper';

@NgModule({
  declarations: [
    SkipperPage,
  ],
  imports: [
    IonicPageModule.forChild(SkipperPage),
  ],
})
export class SkipperPageModule {}
