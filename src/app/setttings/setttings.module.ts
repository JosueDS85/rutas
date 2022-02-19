import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetttingsPageRoutingModule } from './setttings-routing.module';

import { SetttingsPage } from './setttings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetttingsPageRoutingModule
  ],
  declarations: [SetttingsPage]
})
export class SetttingsPageModule {}
