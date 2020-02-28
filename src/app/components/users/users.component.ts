import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.getUsers();
  }

  async getUsers(){
    try {
      const rs: any = await this.apiService.getUser();
      if(rs.results){ //variable to set in api
        this.users = rs.results;
      }
    } catch(err){
      console.log(err);
    }
  }

}
