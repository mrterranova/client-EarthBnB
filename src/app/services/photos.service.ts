import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get('http://localhost:8080/api/v1/photos/');
  }

  getPictureById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/photos/` + id);
  }
}
