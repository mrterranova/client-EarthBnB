import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'


@Component({
  selector: 'app-stay-descriptor',
  templateUrl: './stay-descriptor.component.html',
  styleUrls: ['./stay-descriptor.component.css']
})
export class StayDescriptorComponent implements OnInit {

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  public location;
  public host;

  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
    this.getHost(this.route.snapshot.params.id);
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => this.location = data);
  }

  getHost(id: number){
    this.tlService.getHost(id).subscribe(data => {this.host = data;})
  }
}
