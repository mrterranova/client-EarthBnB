import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-card-mpts',
  templateUrl: './card-mpts.component.html',
  styleUrls: ['./card-mpts.component.css']
})
export class CardMptsComponent implements OnInit {
@Input('locate') locate: Data;
@Input('img') img: Data;
  constructor() { }

  ngOnInit(): void {
  }

  fillup(){
    alert("filled up")
    document.getElementById("heart").style.fill = "#59ff59"
  }
}
