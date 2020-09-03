import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosticons',
  templateUrl: './hosticons.component.html',
  styleUrls: ['./hosticons.component.css'],
  template: `
    <img src="../imageshost/star.png">
  `
})
export class HosticonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
