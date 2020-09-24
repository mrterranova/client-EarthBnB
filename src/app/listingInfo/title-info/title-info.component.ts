import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'


@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.css']
})
export class TitleInfoComponent implements OnInit {

  //global variables
  public location; 
  public reviews;
  public revCount = 0;

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
    this.getReviews();
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => this.location = data);
  }

  getReviews(){
    this.tlService.getReviews().subscribe(
      data => {
        this.reviews = data;
        this.revlogic(data);
    });
  }

  revlogic(revs){
    revs.map( rev => {
      if(rev.locationReviewed == this.location.id){
        this.revCount++;
      }
    })
  }

}
