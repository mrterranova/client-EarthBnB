import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class HostDataService {
  constructor (
    private http: HttpClient
  ) {}

  // getHostData() {
  //   return this.http.get(`http://localhost:8080/api/v1/hostdata/15`);
  // }
  getMptsData() {
    return this.http.get(`http://localhost:8080/api/v1/mpts/15`)
  }
  getHostData(id : number){
    return this.http.get(`http://localhost:8080/api/v1/hostdata/` + id)
  }
}
