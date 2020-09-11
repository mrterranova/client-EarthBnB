import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TtkServiceService {

  constructor(private http: HttpClient) { 

  }

  getTtkData() {
    return this.http.get('http://localhost8080/ttk/1')
  }
  
}
