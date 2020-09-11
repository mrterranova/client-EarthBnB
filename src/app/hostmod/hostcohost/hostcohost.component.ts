import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { CohostDataService } from '../../cohost-data-service/cohost-data.service';


@Component({
  selector: 'app-hostcohost',
  templateUrl: './hostcohost.component.html',
  styleUrls: ['./hostcohost.component.css']
})
export class HostcohostComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  constructor(private cohostDataService: CohostDataService) { }
  cohostData1: Data = {};
  secondCohostBuild: Data = this.cohostData1.nametwo;
  loadCohostData(){
    this.cohostDataService.getCohostData().subscribe(data => this.cohostData1 = data);
  }
  ngOnInit() {
    this.loadCohostData();
  }

}
