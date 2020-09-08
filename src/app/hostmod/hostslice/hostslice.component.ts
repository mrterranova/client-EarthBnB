import { Component, OnInit } from '@angular/core';

import { HostDataService } from '../../host-data-service/host-data.service';

@Component({
  selector: 'app-hostslice',
  templateUrl: './hostslice.component.html',
  styleUrls: ['./hostslice.component.css']
})
export class HostsliceComponent implements OnInit {
  constructor(private hostDataService: HostDataService) {}
  hostdata = {};
  loadHostData(){
    this.hostDataService.getHostData().subscribe(data => this.hostdata = data);
  }
  ngOnInit() {
    this.loadHostData();
  }

}
