import { ModalModuleComponent } from './../../share/modal-module/modal-module.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';


import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  closeResult: string;
  dtOptions: any = {};
  datas: any = [];
  buttons: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private modalbox: ModalModuleComponent
  ) { }



 async ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print'
      ]
    };

    //await this.getModes();
  }
/*
  async doRemove(data: any) {
    try {
      const rs: any = await this.moduleService.delmode(data.moduleID);
      if (rs.status) {
        await this.getModes();
      } else {
        alert(rs.error);
      }

    } catch (e) {
      console.log(e);
    }
  }



  async getModes() {
    try {
      const rs: any = await this.moduleService.listAll();

      if (rs.rows) {
        this.datas = rs.rows;
      }

    } catch (err) {
      console.log('error: ' + err);
    }
  }
*/
}

