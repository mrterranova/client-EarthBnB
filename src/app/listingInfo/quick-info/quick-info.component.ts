import { Component, Input, OnInit } from '@angular/core';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quick-info',
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.css']
})
export class QuickInfoComponent implements OnInit {

 //global variables
 public location; 
 public reviews;
 public revCount = 0;
 public hostmessage;
 public spacediv = [];

 constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
 ngOnInit(): void {
   this.getLoc(this.route.snapshot.params.id);
   this.getHostMessage(this.route.snapshot.params.id)
 }
 getLoc(id: number){
   this.tlService.getLoc(id).subscribe(data => {
     this.location = data;
     console.log(data);
    });
 }
 getHostMessage(id: number){
   this.tlService.getHostMessage(id).subscribe(data =>{ 
     this.hostmessage = data; 
     this.spaceDiv(this.hostmessage.hostspace);
    })

 }
 spaceDiv(host){
  this.spacediv =  host.split("<br/>");
 }


}
