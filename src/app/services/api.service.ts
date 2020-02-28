import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get('https://randomuser.me/api/?results=50')
    .toPromise();
  }
}
