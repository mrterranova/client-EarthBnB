import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.css']
})
export class TitleInfoComponent implements OnInit {
  title: string = 'Title of Listing, Interpolated and also stuff - /awesome';
  rating: string = '⭐ 4.86 (68)';
  hostLevel: string = 'Superhost';
  listingLocation: string = 'Morongo Valley, California, United States';

  constructor() { }

  getListing = () => {
    console.log('getListing() fired from OnInit!');
  }

  ngOnInit(): void {
    this.getListing();
  }

}
