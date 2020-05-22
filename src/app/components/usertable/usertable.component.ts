import { ModalUserComponent } from './../../share/modal-user/modal-user.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit, AfterViewInit{

  public displayedColumns = ['firstName', 'lastName', 'email', 'update', 'delete'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  searchKey: string;
  public users;
  constructor(
    private userService: UserService,
    private diaglog: MatDialog
    ) { }

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openDialog() {
  const dialogConfig = new MatDialogConfig();

    this.diaglog.open(ModalUserComponent, dialogConfig);

    
  }
 

}