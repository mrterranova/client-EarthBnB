import { Component, Input, OnInit } from '@angular/core';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sleeping-arrangements-info',
  templateUrl: './sleeping-arrangements-info.component.html',
  styleUrls: ['./sleeping-arrangements-info.component.css']
})
export class SleepingArrangementsInfoComponent implements OnInit {
  //global variables
  public location; 
  public sleep;
  public sleeparr=[];

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => {this.location = data; this.getSleep();});
    
  }

  getSleep(){
    this.tlService.getSleep().subscribe(data => {
<<<<<<< HEAD
=======
      console.log("sleep", data)
>>>>>>> 1e6ec4eda69e2ef39bc46c419b6786811e248c28
      this.sleep = data;
      this.pushSleep(data)
    })
  }

  pushSleep( arrangements ){
    arrangements.map( arrange => {
      if (arrange.location == this.location.id){
<<<<<<< HEAD
=======
        console.log("arrange", arrange)
>>>>>>> 1e6ec4eda69e2ef39bc46c419b6786811e248c28
        this.sleeparr.push(arrange)
      }
    })
  }

}
