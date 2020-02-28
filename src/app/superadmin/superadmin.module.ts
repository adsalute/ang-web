import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ModuleService } from './../services/module.service';
import { MaterialModule } from './../material.module';





@NgModule({

  declarations: [
    LayoutComponent,
    AppComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    SuperadminRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],

  exports: [],
  providers: [ ModuleService ]
})
export class SuperadminModule { }
