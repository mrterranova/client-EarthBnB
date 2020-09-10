import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MptsServiceService {

  constructor(private http: HttpClient) { 

  }

  getMptsData() {
    return this.http.get('http://localhost8080/api/v1/mpts/1')
  }
  
}
