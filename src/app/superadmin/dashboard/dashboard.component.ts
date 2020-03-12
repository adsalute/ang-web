import { ModalModuleComponent } from './../../share/modal-module/modal-module.component';
import { ModuleService } from './../../services/module.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private moduleService: ModuleService,
    private modalService: NgbModal,
  ) { }



  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print'
      ]
    };

    this.getModes();
  }

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

  openEditbox(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
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

}

