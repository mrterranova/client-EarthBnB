import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingInfoService {
  constructor(private http: HttpClient) {}

  getAmenities() {
    return this.http.get(`http://localhost:8080/api/v1/amenities/`);
  }

  getAmenityById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/amenities/` + id);
  }

  getSleepingArrs() {
    return this.http.get(`http://localhost:8080/api/v1/sleepingarrs/`);
  }

  getSleepingArrById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/sleepingarrs/` + id);
  }

  getListingInfo() {
    return this.http.get(`http://localhost:8080/api/v1/listings/`);
  }

  getListingInfoById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/listings/` + id);
  }
}
