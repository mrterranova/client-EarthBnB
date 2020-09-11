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

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  // altBigPic:"alt text"

  getPhotos(){
    this.photosService.getPhotos().subscribe(
      data => {this.photos = data},
      err => console.log(err),
      () => console.log(this.photos),
     
    );
  }

}
