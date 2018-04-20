import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperMarketsPage } from './super-markets';

@NgModule({
  declarations: [
    SuperMarketsPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperMarketsPage),
  ],
})
export class SuperMarketsPageModule {}
