import { ModuleService } from './../../services/module.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

  export interface PeriodicElement {
    modeName: string;
    status: string;
  }

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styles: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private moduleService: ModuleService,
    ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }
}
