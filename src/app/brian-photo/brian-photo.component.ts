import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brian-photo',
  templateUrl: './brian-photo.component.html',
  styleUrls: ['./brian-photo.component.css'],
})
export class BrianPhotoComponent implements OnInit {
  public photos;
  public photo;
  page = 1;
  slideIndex = 1;
  pics: any;
  // pics = [];

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPhotos(); /// get all
    this.getPictureById(this.page); /// get one
  }

  getPhotos() {
    this.photosService.getPhotos().subscribe(
      (data) => {
        this.photos = data;
      },
      (err) => console.log(err),
      // () => console.log(this.photos),
      () => (this.pics = this.photos)
    );
  }

  getPictureById(id: number) {
    this.photosService.getPictureById(id).subscribe(
      (data) => {
        this.photo = data;
      },
      (err) => console.log(err)
      // () => console.log(this.photo)
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

  ///   modal functions below

  galleryOpen() {
    const gal = document.getElementById('photoGallery');
    gal.style.display = 'block';
    this.showDivs(this.slideIndex);
  }

  closeGallery() {
    const gal = document.getElementById('photoGallery');
    gal.style.display = 'none';
    this.slideIndex = 1;
  }

  plusDivs(n) {
    this.showDivs((this.slideIndex += n));
    
  }

  showDivs(n) {
    let i;
    const x = (document.getElementsByClassName('bwlSliderz') as HTMLCollectionOf<HTMLElement>);
    if (n > x.length) {
      this.slideIndex = 1;
      console.log(x);
    }
    if (n < 1) {
      this.slideIndex = x.length;
      console.log(x);
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
      console.log(x);
    }
    x[this.slideIndex - 1].style.display = 'block';
    console.log(x);
  }
}


///  const x = document.getElementsByClassName('bwlSliderz');