import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get(`http://localhost:8080/api/v1/reviews/`);
  }

  getReviewsById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/reviews/` + id);
  }
}
