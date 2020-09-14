import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HostDataService } from '../../host-data-service/host-data.service';

@Component({
  selector: 'app-hostslice',
  templateUrl: './hostslice.component.html',
  styleUrls: ['./hostslice.component.css']
})
export class HostsliceComponent implements OnInit {
  constructor(private hostDataService: HostDataService) { }
  hostdata: Data = {};
  mptsdata: Data = {};
  loadHostData() {
    this.hostDataService.getHostData().subscribe(data => this.hostdata = data);
  }
  loadMPTSData() {
    this.hostDataService.getMptsData().subscribe(data => this.mptsdata = data);
  }
  ngOnInit() {
    this.loadHostData();
    this.loadMPTSData();
  }

}
