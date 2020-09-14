import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  // pageNumb = 1;

  getPhotos() {
    return this.http.get('http://localhost:8080/api/v1/photos/');
  }

  getPictureById(id: number){
   
    return this.http.get(`http://localhost:8080/api/v1/photos/`+id)
  }
}
