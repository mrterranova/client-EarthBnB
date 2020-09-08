import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-hostheader',
  templateUrl: './hostheader.component.html',
  styleUrls: ['./hostheader.component.css']
})
export class HostheaderComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
