import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'app-brian-photo',
  templateUrl: './brian-photo.component.html',
  styleUrls: ['./brian-photo.component.css'],
})
export class BrianPhotoComponent implements OnInit {

///// typescript .... smhh....  am i right.... 

public photos;
page = 1;

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    // this.getPhotos();
    this.getPictureById();
  }

  // altBigPic:"alt text"

  getPictureById(){
    this.photosService.getPictureById().subscribe(
      data => {this.photos = data},
      err => console.log(err),
      () => console.log(this.photos),
     
    );
  }

}
