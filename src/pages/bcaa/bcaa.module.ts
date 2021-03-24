import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcaaPage } from './bcaa';

@NgModule({
  declarations: [
    BcaaPage,
  ],
  imports: [
    IonicPageModule.forChild(BcaaPage),
  ],
})
export class BcaaPageModule {}
