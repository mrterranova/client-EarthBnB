import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brian-ttd',
  templateUrl: './brian-ttd.component.html',
  styleUrls: ['./brian-ttd.component.css'],
})
export class BrianTtdComponent implements OnInit {
  public todos;
  public location = {};
  public locByState = [];
  public state;
  public num = 78;
  public len = 0;

  constructor(
    private ttdService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getLocationByID(this.route.snapshot.params.id);
  }

  getLocationByID(id: number) {
    this.ttdService.getLocationByID(id).subscribe((data) => {
      this.location = data;
      this.findingState(data);
    });
    console.log(this.locByState);
  }

  findingState(state) {
    // console.log('state', state.state_territory);
    this.getTTDs(state.state_territory);
  }

  getTTDs(state) {
    this.ttdService.getTTds().subscribe((data) => {
      this.todos = data;
      this.len = this.todos.length;
      this.todos.map((todoState) => {
        if (state == todoState.location) {
          this.locByState.push(todoState);
        }
      });
    });
  }

  sLeft() {
    //More dynamic solution but not fully fleshed out
    // document.getElementById("pag-mpts-clickable").scrollLeft -= window.innerWidth-175;
    document.getElementById('pag-ttd-clickable').scrollLeft -= 1248;

    //this moves on computers full screen - hard coded solution
    var count = parseInt(document.getElementById('pgnumb1').innerHTML) - 1;
    //attentiong more dynamic features - it isn't functioning(would have to revisit later)
    if (window.innerWidth == 1248) {
      console.log('-', window.innerWidth);
      count = parseInt(document.getElementById('pgnumb2').innerHTML);
      document.getElementById('pag-ttd-clickable').scrollLeft = 4992;
      //if the count reachs 0 then change the page count to the number of pages and scroll to the last page -hardcoded.
    } else if (count === 0) {
      count = parseInt(document.getElementById('pgnumb2').innerHTML);
      document.getElementById('pag-ttd-clickable').scrollLeft = 4992;
    }
    document.getElementById('pgnumb1').innerHTML = count + '';
  }

  sRight() {
    console.log('Scrolling Right');
    //More dynamic solution but not fully fleshed out
    // document.getElementById("pag-mpts-clickable").scrollLeft += window.innerWidth-175;

    //this moves on computers full screen - hard coded solution
    document.getElementById('pag-ttd-clickable').scrollLeft += 1248;
    // keeps track of the page numbering through variable count
    var count = 1 + parseInt(document.getElementById('pgnumb1').innerHTML);
    //if the count reaches the end of the document, then make sure the page number does not exceed the number of pages
    if (count == parseInt(document.getElementById('pgnumb2').innerHTML)) {
      count = parseInt(document.getElementById('pgnumb2').innerHTML);
      //if the count does exceed the number of pages, revert count to 1 and scroll back to beginning
    } else if (count > parseInt(document.getElementById('pgnumb2').innerHTML)) {
      document.getElementById('pag-ttd-clickable').scrollLeft = 0;
      count = 1;
    }
    //print page count as string
    document.getElementById('pgnumb1').innerHTML = count + '';
  }

  //trying out dynamic styling - it works!
  dynamicWidth() {
    // console.log(this.len / 4);
    this.endPgCount(this.len / 4);
    return this.num * (this.len / 4) + 'rem';
  }

  endPgCount(pgcount) {
    document.getElementById('pgnumb2').innerHTML = Math.ceil(pgcount) + '';
  }
}
