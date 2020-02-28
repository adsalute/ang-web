import { Component, OnInit } from '@angular/core';
import { ModuleService } from './../../services/module.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  empData: any = [];

  constructor(
    private moduleService: ModuleService
    ) { }

    async ngOnInit() {
      await this.getModuleData();
    }

    async getModuleData() {
      try {
        const rs: any = await this.moduleService.getmodes();
        if(rs.rows){
          this.empData = rs.rows;
          console.log(this.empData);
        }
      } catch (err) {
        console.log('error: ' + err);
      }

  }
}

