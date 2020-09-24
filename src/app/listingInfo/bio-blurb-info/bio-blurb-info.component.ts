import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-bio-blurb-info',
  templateUrl: './bio-blurb-info.component.html',
  styleUrls: ['./bio-blurb-info.component.css']
})
export class BioBlurbInfoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('listingdata') listingData: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
