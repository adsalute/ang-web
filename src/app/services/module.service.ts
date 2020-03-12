import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResDataModal } from './../models/resDataModal';
import { Observable } from 'rxjs';

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

  getmodes(): Observable<ResDataModal>{
    const url = `${this.apiUrl}/modules/getmodes`;
    return this.http.get<ResDataModal>(url);
  }

  savemode(){
    const url = `${this.apiUrl}/modules/create`;
    return this.http.post(url);
  }

  delmode(moduleID: any){
    const url = `${this.apiUrl}/modules/${moduleID}`;
    return this.http.delete(url)
    .toPromise();
  }

}
