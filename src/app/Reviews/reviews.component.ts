import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  public reviews: Data;
  public categoryArr: number[] = [2.0, 3.5, 5.0, 4.8, 4.7];
  progressValue: number = 0;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.getReviews();
    // this.categoryArr = this.processReviewCatAvg();
  }
  getReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (err) => console.error(err),
      () => console.log('reviews loaded')
    );
  }
  /*
  processReviewCatAvg(): number[] {
    let arrCategories: number[] = [];
    let catClean: number,
      catAcc: number,
      catComm: number,
      catLoc: number,
      catCheck: number,
      catVal: number = 0;
    let count: number = 0;

    this.reviews.forEach((element: any) => {
      count++;
      catClean += element.category_cleanliness;
      catAcc += element.category_accuracy;
      catComm += element.category_communication;
      catLoc += element.category_location;
      catCheck += element.category_checkin;
      catVal += element.category_value;
    });

    arrCategories.push(catClean, catAcc, catComm, catLoc, catCheck, catVal);
    // console.log(arrCategories);
    return this.getCategoryAvgs(arrCategories, count);
  }

  getCategoryAvgs(arrCategories: number[], count: number): number[] {
    let avgArray: number[] = [];
    arrCategories.forEach((element) => {
      avgArray.push(element / count);
    });
    return avgArray;
  } */
}
