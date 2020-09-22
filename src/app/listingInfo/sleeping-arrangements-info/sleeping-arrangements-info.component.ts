import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
@Component({
  selector: 'app-sleeping-arrangements-info',
  templateUrl: './sleeping-arrangements-info.component.html',
  styleUrls: ['./sleeping-arrangements-info.component.css']
})
export class SleepingArrangementsInfoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('sleepingarrdata') sleepingArrData: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
