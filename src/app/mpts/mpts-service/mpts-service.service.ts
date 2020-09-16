import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MptsServiceService {
  Location = {

  }

  constructor(private http: HttpClient) { 

  }

  getLocates() {
    return this.http.get('http://localhost:8080/api/v1/mpts')
  }

  getImgs() {
    return this.http.get('http://localhost:8080/api/v1/photos')
  }
  // updateLocates(locates: Location): Observable<Location> {
  // }
  
}
