import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class HostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getHostData() {
    return this.http.get(`http://localhost:8080/hostdata/1`);
  }

}
