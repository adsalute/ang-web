import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  
  constructor(
    private http: HttpClient,
    ) { }

  getUserAll( query: any, limit: number, offset: number) {
    const apiUrl = environment.apiUrl+"/users";
    return this.http.get(`${apiUrl}?query=${query}&limit=${limit}&offset=${offset}`);
  }


  getUserID(id) {
    const apiUrl = environment.apiUrl+"/users";
    return this.http.get(`${apiUrl}/${id}`);
  }

  createUser(data) {
    const apiUrl = environment.apiUrl+"/users";
    return this.http.post(apiUrl, data);
  }

  updateUser(id, data) {
    const apiUrl = environment.apiUrl+"/users";
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  deleteUser(id){
    const apiUrl = environment.apiUrl+"/users";
    return this.http.delete(`${apiUrl}/${id}`);
  }

  findByName(name) {
    const apiUrl = environment.apiUrl+"/users";
    return this.http.get(`${apiUrl}?personName=${name}`);
  }
}
