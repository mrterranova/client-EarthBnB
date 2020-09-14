import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-brian-photo',
  templateUrl: './brian-photo.component.html',
  styleUrls: ['./brian-photo.component.css'],
})
export class BrianPhotoComponent implements OnInit {
  ///// typescript .... smhh....  am i right....

  public photos;
  public photo;
  page = 1;
 

  constructor(private photosService: PhotosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPhotos(); /// get all
    this.getPictureById(this.page); /// get one
  }

  getPhotos(){
    this.photosService.getPhotos().subscribe(
      data => {this.photos = data},
      err => console.log(err),
      () => console.log(this.photos),

    );
  }


  getPictureById(id:number) {
    this.photosService.getPictureById(id).subscribe(
      (data) => {
        this.photo = data;
      },
      (err) => console.log(err),
      () => console.log(this.photo)
    );
  }

  clickUp() {
    if (this.page <= 19) {
      this.page += 1;
      this.getPictureById(this.page);
    } else {
      this.page = 1;
      this.getPictureById(this.page);
    }
  }

  clickDown() {
    if (this.page >= 2) {
      this.page -= 1;
      this.getPictureById(this.page);
    } else {
      this.page = 20;
      this.getPictureById(this.page);
    }
  }

  gallery(){
    alert("a gallery modal is coming soon when you click me");
  }

}
