import {Component, OnInit, Directive, Input, Output, EventEmitter} from '@angular/core';
import { MptsServiceService } from '../mpts/mpts-service/mpts-service.service';
import { ActivatedRoute } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent implements OnInit {
  constructor(
    private mptsService: MptsServiceService,
    private route: ActivatedRoute
  ) {}
  public location;
  public locates = {};
  public lArr = [];

  ngOnInit(): void {
    this.getLocate(this.route.snapshot.params.id);
    this.getLocates();
  }

  getLocate(id: number) {
    this.mptsService.getLocate(id).subscribe( loc => {
      this.location = loc;
    });
  }

  getLocates() {
    this.mptsService.getLocates().subscribe((data) => {
      this.locates = data;
    //   var temp = [];
    //   this.locates.map(val => temp.push(val.state_territory));
    //   this.lArr = temp.filter((c, index) => {
    //     return temp.indexOf(c) === index;
    //   })
    //   console.log(this.lArr)
     });
   }
  
}