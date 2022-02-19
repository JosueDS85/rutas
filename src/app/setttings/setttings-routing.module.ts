import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetttingsPage } from './setttings.page';

const routes: Routes = [
  {
    path: '',
    component: SetttingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetttingsPageRoutingModule {}
