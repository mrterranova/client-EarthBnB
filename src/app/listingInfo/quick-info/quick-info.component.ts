import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-quick-info',
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.css']
})
export class QuickInfoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('listingdata') listingData: Data;

  listingType: string = 'Entire Home';
  listingTypeDescriptor: string = "You'll have the bungalow to yourself!";
  hostName: string = 'Peggy & Christopher';
  hostLevel: string = 'Superhost';
  hostDescriptor: string = 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.';
  locationLevel: string = 'Great location';
  locationLevelDescriptor: string = '100% of recent guests gave the location a 5-star rating.';
  cancellationInfo: string = 'Enter dates to see cancellation policy info.';
  cancellationInfoDescriptor: string = 'Please enter dates for more info.';

  constructor() { }

  ngOnInit(): void {
  }

}
