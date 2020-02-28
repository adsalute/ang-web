import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
getPhotos(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
  constructor(
    private http: HttpClient
  ) { }
}
