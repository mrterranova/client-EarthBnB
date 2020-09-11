
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable()
export class CohostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getCohostData() {
    return this.http.get(`http://localhost:8080/api/v1/cohostdata/15`);
  }

}
