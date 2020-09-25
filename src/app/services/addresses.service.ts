import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  key = 'AIzaSyCe7klwWKP3V8BVXkaP990AM1dvHrDyvl0';

  constructor(private http: HttpClient) {}

  getAddresses() {
    return this.http.get('http://localhost:8080/api/v1/map');
  }

  getAddressById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/map/` + id);
  }

  getDescriptionById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/mpts/` + id);
  }

  getPointsOfInterest(lat: number, lon: number) {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=15000&type=tourist_attraction&location=${lat},${lon}`
    );
  }
}
