import { Component, OnInit } from '@angular/core';
import { TtkDataService } from '../ttk-data-service/ttk-data.service';

@Component({
  selector: 'app-ttkcontainer',
  templateUrl: './ttkcontainer.component.html',
  styleUrls: ['./ttkcontainer.component.css']
})
export class TtkContainerComponent implements OnInit {
  constructor(private ttkDataService: TtkDataService) {}
  ttkdata = {};
  loadTtkData(){
    this.ttkDataService.getTtkData().subscribe(data => this.ttkdata = data);
  }

  ngOnInit() {
    this.loadTtkData();
  }

}