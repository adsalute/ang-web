import { async } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './../../services/user.service';
import { OwnerAddComponent } from '../owner-add/owner-add.component';
import { OwnerDetailComponent } from './../owner-detail/owner-detail.component';
import { NotificationService } from 'src/app/services/notification.service';
import { OwnerDelComponent } from './../owner-del/owner-del.component';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  @ViewChild('mdlDetailUser', {static: false}) private mdlDetailUser: OwnerDetailComponent;
  @ViewChild('mdlFormUser', {static: false}) private mdlFormUser: OwnerAddComponent;
  @ViewChild('mdlDeleteUser', {static: false}) private mdlDeleteUser: OwnerDelComponent;

    users: any = [];
    page: any = 1;
    pageSize: any = 10;
    total: any = 0;

    limit: any = 0;
    offset: any = 0;
    query: any = '';

    optionsPage = ['10', '20', '30', '40', '50'];

  constructor(
    private user: UserService,
    private notifyService: NotificationService
  ) { }

  async ngOnInit() {
  await this.getAllData();
  }

  async getAllData() {
    await this.user.getUserAll(this.query, this.pageSize, this.offset)
    .toPromise()
    .then((rs: any) => {
      if(rs.status) { 
        this.users = rs.datas.rows;
        this.total = rs.datas.count;
      } else {
        this.showToasterError(rs.error, "System Maseage");
      }
    })
    .catch((e) => {
      this.showToasterError(e, "System Maseage");
    });
  }


  async onPageChange(event: number) {
    const _currentPage = +event;
    let _offset = 0;
    if(_currentPage > 1) {
      _offset = (_currentPage - 1) * this.pageSize;
    }
    this.offset = _offset;
    this.limit = this.pageSize;
    await this.getAllData();
  }

  doSearch() {
    this.getAllData();
  }


  openModalDetail(userLink) {
    this.mdlDetailUser.popModal(userLink);
  }

  openModalForm(userLink) {
    this.mdlFormUser.open(userLink);
  }
  
  openModalDel(userLink) {
    this.mdlDeleteUser.open(userLink);
  }

  async saveConfirm(event) {
    if (event) {
      await this.showToasterSuccess('ทำการบันทึกข้อมูลเสร็จเรียบร้อย !!', 'System Maseage');
      await this.getAllData();
    }
  }

  async deleteConfirm(event) {
    if (event) {
      await this.showToasterSuccess('ทำการลบข้อมูลเสร็จเรียบร้อย !!', 'System Maseage');
      await this.getAllData();
    }
  }

  showToasterSuccess(body: string, title: string) {
    this.notifyService.showSuccess(body, title);
  }

  showToasterError(body: string, title: string) {
    this.notifyService.showError(body, title);
  }

  showToasterInfo(body: string, title: string) {
    this.notifyService.showInfo(body, title);
  }

  showToasterWarning(body: string, title: string) {
    this.notifyService.showWarning(body, title);
  }

}