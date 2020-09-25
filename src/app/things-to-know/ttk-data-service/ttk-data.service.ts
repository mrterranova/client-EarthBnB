import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class TtkDataService {
  constructor (
    private http: HttpClient
  ) {}

  getTtkData() {
    return this.http.get(`http://localhost:8080/ttk/1`);
  }

  getLoc(id:number) {
    return this.http.get(`http://localhost:8080/api/v1/mpts/` + id)
  }

}
