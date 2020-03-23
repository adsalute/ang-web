import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { User } from './../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }
  
getUsers(): Observable<any>{
  const url = `${this.apiUrl}/users/getusers`;
    return this.http.get(url).pipe(map(this.extractData));
}

private extractData(res: Response){
  return res || {};
}

}
