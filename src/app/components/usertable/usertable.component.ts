import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit{

  displayedColumns = ['name', 'email', 'update', 'delete'];
  dataSource: MatTableDataSource<User>;

  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  @ViewChild('MatSort', {static: true}) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.dataSource.data = data; // on data receive populate dataSource.data array
      return data;
   });
  }

}