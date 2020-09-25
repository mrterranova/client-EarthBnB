import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'

@Component({
  selector: 'app-amenities-info',
  templateUrl: './amenities-info.component.html',
  styleUrls: ['./amenities-info.component.css']
})
export class AmenitiesInfoComponent implements OnInit {
  public amenities;
  public count= 0;

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAmeni(this.route.snapshot.params.id)
  }

  getAmeni(id: number){
    this.tlService.getAmeni(id).subscribe( data => {this.amenities = data; this.amenities.map(tc => {if(tc) this.count++})})
  }

}
