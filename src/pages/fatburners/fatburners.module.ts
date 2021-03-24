import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FatburnersPage } from './fatburners';

@NgModule({
  declarations: [
    FatburnersPage,
  ],
  imports: [
    IonicPageModule.forChild(FatburnersPage),
  ],
})
export class FatburnersPageModule {}
