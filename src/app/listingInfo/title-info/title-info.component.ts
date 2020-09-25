import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.css']
})
export class TitleInfoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('listingdata') listingData: Data;

  public title: string = 'Title of Listing, Interpolated and also stuff - /awesome';
  public rating: string = '⭐ 4.86 (68)';
  public hostLevel: string = 'Superhost';
  public listingLocation: string = 'Morongo Valley, California, United States';

  constructor() {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings = () => {
    console.log(`oninitfromtitle-infocomponent`);
  }

}
