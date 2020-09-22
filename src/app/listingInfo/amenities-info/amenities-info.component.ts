import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-amenities-info',
  templateUrl: './amenities-info.component.html',
  styleUrls: ['./amenities-info.component.css']
})
export class AmenitiesInfoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('amenitiesdata') amenitiesData: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
