import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCountPage } from './create-count.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCountPageRoutingModule {}
