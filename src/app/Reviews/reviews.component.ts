import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  public reviews: any;
  public categoryArr: number[];
  public totalReview: number = 0;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.getReviews();
  }
  getReviewTotal(...avgArray: number[]): number {
    let total: number = avgArray.reduce((total, arg) => total + arg, 0);
    return total;
  }
  getReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
        this.categoryArr = this.processReviewCatAvg(this.reviews);
      },
      (err) => console.error(err),
      () => console.log(this.reviews, this.categoryArr)
    );
  }

  processReviewCatAvg(data: Array<object>): number[] {
    let arrCategories: number[] = [];
    let catClean: number = 0,
      catAcc: number = 0,
      catComm: number = 0,
      catLoc: number = 0,
      catCheck: number = 0,
      catVal: number = 0;

    for (let i = 0; i < data.length; i++) {
      const element: {} = data[i];
      catClean += +element['cleanliness'];
      catAcc += +element['accuracy'];
      catComm += +element['communication'];
      catLoc += +element['location'];
      catCheck += +element['checkIn'];
      catVal += +element['value'];
    }

    arrCategories.push(
      +catClean.toFixed(2),
      +catAcc.toFixed(2),
      +catComm.toFixed(2),
      +catLoc.toFixed(2),
      +catCheck.toFixed(2),
      +catVal.toFixed(2)
    );
    console.log(arrCategories);
    return this.getCategoryAvgs(arrCategories, data.length);
  }

  getCategoryAvgs(arrCategories: number[], count: number): number[] {
    let avgArray: number[] = [];
    arrCategories.forEach((element) => {
      avgArray.push(+(element / count).toFixed(2));
    });

    this.totalReview = this.getReviewTotal(...avgArray) / 6;
    console.log(`totalReview before divide: ${this.totalReview}`);

    return avgArray;
  }
}
