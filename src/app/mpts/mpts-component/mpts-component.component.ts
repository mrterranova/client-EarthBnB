import { Component, OnInit } from '@angular/core';
import { MptsServiceService } from '../mpts-service/mpts-service.service'
// import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-mpts-component',
  templateUrl: './mpts-component.component.html',
  styleUrls: ['./mpts-component.component.css']
})
export class MptsComponentComponent implements OnInit {
public locates;
public imges;
totalRecords:number;
page:number =1;

  constructor(private mptsService: MptsServiceService) { }

  ngOnInit() {
    this.getLocates();
    this.getImges();
  }

  getLocates()  {
      this.mptsService.getLocates().subscribe(
        data => { this.locates = data },
        err => console.log(err)
      );
  }

  getImges(){
    this.mptsService.getImgs().subscribe(
      data => { this.imges = data }, 
      err => {console.log("Imgs errrrrr")}
    )
  }
  
  scrollLeft(){
    console.log("Scrolling Left");
    document.getElementById("pag-mpts-clickable").scrollLeft -= window.outerWidth;
    console.log(document.getElementById("pgnum1").innerHTML)
  }

  scrollRight(){
    console.log("Scrolling Right");
    document.getElementById("pag-mpts-clickable").scrollLeft += window.outerWidth;
    // document.getElementById("pgnum1").innerHTML.replace()
  }
}

