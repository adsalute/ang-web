import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OwnerModule } from './owner/owner.module';
import { InternalServerComponent } from './share/internal-server/internal-server.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule"},
  { path: '**', component: InternalServerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
