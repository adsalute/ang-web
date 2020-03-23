import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }

  listAll(){
    const url = `${this.apiUrl}/modules/all`;
    return this.http.get(url)
    .toPromise();
  }

  delmode(moduleID: any){
    const url = `${this.apiUrl}/modules/${moduleID}`;
    return this.http.delete(url)
    .toPromise();
  }

}
