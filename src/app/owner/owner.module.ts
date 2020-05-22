import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { MenuComponent } from './menu/menu.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnerDelComponent } from './owner-del/owner-del.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: OwnerListComponent },
  { path: 'add', component: OwnerAddComponent },
  { path: 'del', component: OwnerDelComponent }
];

@NgModule({
  declarations: [
    MenuComponent,
    OwnerAddComponent,
    OwnerListComponent,
    OwnerDetailComponent,
    OwnerDelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule,
    OwnerDetailComponent,
    OwnerDelComponent,
    OwnerAddComponent,
    NgbModule,
  ],
  providers: [
    UserService
  ]

})
export class OwnerModule { }
