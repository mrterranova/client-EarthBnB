import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs-compat/operator/windowWhen';
import { MptsServiceService } from '../mpts-service/mpts-service.service'

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
count = 0;

  constructor(private mptsService: MptsServiceService) { }

  ngOnInit() {
    this.getLocates();
    this.getImges();
  }

  getLocates()  {
      this.mptsService.getLocates().subscribe(
        data => { this.locates = data },
        () => {
          for (var i=0; i < this.locates.length; +i++){
            console.log(i)
          }
        }
      );
  }

  getImges(){
    this.mptsService.getImgs().subscribe(
      data => { this.imges = data }, 
      err => {console.log("Imgs errrrrr")},
      () => {console.log(this.imges.length)}
    )
  }
  
  scrollLeft(){
    document.getElementById("pag-mpts-clickable").scrollLeft -= window.innerWidth-175;
    var count = parseInt(document.getElementById("pgnum1").innerHTML)-1;
    if(window.innerWidth==1248){
      console.log("-", window.innerWidth)
      count = parseInt(document.getElementById("pgnum2").innerHTML);
      document.getElementById("pag-mpts-clickable").scrollLeft = 4992;
    } else if(count === 0){
      count = parseInt(document.getElementById("pgnum2").innerHTML);
      document.getElementById("pag-mpts-clickable").setAttribute("transition", "[ auto | smooth ]")
      document.getElementById("pag-mpts-clickable").scrollLeft = 4992;
    }

      document.getElementById("pgnum1").innerHTML = count+"";
    
  }

  scrollRight(){
    console.log("Scrolling Right");
    document.getElementById("pag-mpts-clickable").scrollLeft += window.innerWidth-175;
    var count = 1 + parseInt(document.getElementById("pgnum1").innerHTML);
    if(count == parseInt(document.getElementById("pgnum2").innerHTML)){
      count = parseInt(document.getElementById("pgnum2").innerHTML)
    } else if (count > parseInt(document.getElementById("pgnum2").innerHTML)) {
      document.getElementById("pag-mpts-clickable").scrollLeft = 0;
      count = 1;
    }

    document.getElementById("pgnum1").innerHTML = count+"";
  }
  dynamicWidth(){
    return '390rem'
  }
}

