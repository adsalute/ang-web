import { HttpClient } from '@angular/common/http';
import { ModuleService } from './../../services/module.service';
import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styles: []
})

export class ModuleComponent implements OnInit {

  items: any = [];

  constructor(
    private moduleService: ModuleService
  ){}

  async ngOnInit() {
    await this.viewModule();
  }

  async viewModule(){
    try{
      const rs: any = await this.moduleService.listAll();
      console.log(rs.rows);
      if(rs.rows){
        this.items = rs.rows;
      }

    } catch (err) {
      console.log('error: ' + err);
    }

}
}