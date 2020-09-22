
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable()
export class CohostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getCohostData(id : number) {
    return this.http.get(`http://localhost:8080/api/v1/cohostdata/`+ id);
  }

}
