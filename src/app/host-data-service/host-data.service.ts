import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class HostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getMptsData(id : number) {
    return this.http.get(`http://localhost:8080/api/v1/mpts/`+ id)
  }
  getHostData(id : number){
    return this.http.get(`http://localhost:8080/api/v1/hostdata/` + id)
  }
}
