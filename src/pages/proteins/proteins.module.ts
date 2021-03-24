import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProteinsPage } from './proteins';

@NgModule({
  declarations: [
    ProteinsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProteinsPage),
  ],
})
export class ProteinsPageModule {}
