import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
