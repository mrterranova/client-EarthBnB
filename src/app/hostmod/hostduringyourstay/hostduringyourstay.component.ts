import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hostduringyourstay',
  templateUrl: './hostduringyourstay.component.html',
  styleUrls: ['./hostduringyourstay.component.css']
})
export class HostduringyourstayComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
