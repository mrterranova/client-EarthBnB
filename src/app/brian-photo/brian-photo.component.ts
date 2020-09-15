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
  mark = 1;
  pics = [];

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

  ///   modal functions below

  galleryOpen() {
    // alert('a gallery modal is coming soon when you click me');
    const gal = document.getElementById('photoGallery');
    gal.style.display = 'block';
    this.showDivs(this.mark);
  }

  closeGallery() {
    const gal = document.getElementById('photoGallery');
    gal.style.display = 'none';
    this.mark = 1;
  }

  plusDivs(n) {
    this.showDivs((this.mark += n));
  }

  showDivs(n) {
    var i = 0;
    var x = document.getElementsByClassName('bwlSliderz');
    if (n > x.length) {
      this.mark = 1;
    }
    if (n < 1) {
      this.mark = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'; /// you say it's an error, it doesn't exist - but it works so who is laughing now?
    }
    x[this.mark - 1].style.display = 'block';
  }
}
