import { ModalModuleComponent } from './../share/modal-module/modal-module.component';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';

import { LayoutComponent } from './layout/layout.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import { ModuleService } from './../services/module.service';
import { MaterialModule } from './../material.module';

import { DataTablesModule } from 'angular-datatables';
import { ModuleComponent } from './module/module.component';



@NgModule({

  declarations: [
    LayoutComponent,
    AppComponent,
    ModalModuleComponent,
    ModuleComponent

  ],

  imports: [
    CommonModule,
    SuperadminRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    DataTablesModule
  ],

  exports: [
  ],
  providers: [ ModuleService ]
})
export class SuperadminModule { }
