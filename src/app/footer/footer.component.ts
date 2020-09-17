import {Component, OnInit, Directive, Input, Output, EventEmitter} from '@angular/core';
import { MptsServiceService } from '../mpts/mpts-service/mpts-service.service';
import { ActivatedRoute } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

// @Pipe({ name: 'evenodd' })
// export class EvenOddPipe implements PipeTransform {
//   transform(value:any[], filter:string) {
//     if(!value || (filter !== 'even' && filter !== 'odd')) {
//       return value;
//     }
//     return value.filter((item, idx) => filter === 'even' ? idx % 2 === 1 : idx % 2 === 0 );
//   }
// }


export class FooterComponent implements OnInit {
  constructor(
    private mptsService: MptsServiceService,
    private route: ActivatedRoute
  ) {}
  public thelocate = {};
  public locates = {};
  public lArr = [];

  ngOnInit(): void {
    this.getLocate(this.route.snapshot.params.id);
    this.getLocates();
  }

  getLocate(id: number) {
    this.mptsService.getLocate(id).subscribe((data) => {
      this.thelocate = data;
    });
  }

  getLocates() {
    this.mptsService.getLocates().subscribe((data) => {
      this.locates = data;
      var temp = [];
      data.map(val => temp.push(val.state_territory));
      this.lArr = temp.filter((c, index) => {
        return temp.indexOf(c) === index;
      })
      // console.log(this.lArr)
    });
  }
  
}