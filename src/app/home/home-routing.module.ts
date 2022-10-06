import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthgardGuard } from '../services/authgard.guard';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-count',
    loadChildren: () => import('./create-count/create-count.module').then( m => m.CreateCountPageModule)
  },
  {
    path: 'detail-school',
    loadChildren: () => import('./detail-school/detail-school.module').then( m => m.DetailSchoolPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
