import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }

  listAll(){
    const _url = `${this.apiUrl}/modules/all`;
    return this.http.get(_url)
    .toPromise();
  }

  getmodes(){
    const url = `${this.apiUrl}/modules/getmodes`;
    return this.http.get(url)
    .toPromise();
  }

}
