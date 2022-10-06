import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSchoolPage } from './detail-school.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSchoolPageRoutingModule {}
