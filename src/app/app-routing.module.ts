import { UsertableComponent } from './components/usertable/usertable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: UsertableComponent},
  { path: 'admin', loadChildren: './superadmin/superadmin.module#SuperadminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
