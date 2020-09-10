import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brian-photo',
  templateUrl: './brian-photo.component.html',
  styleUrls: ['./brian-photo.component.css'],
})
export class BrianPhotoComponent implements OnInit {
  bigPic =
    'https://i.etsystatic.com/12310347/r/il/b4602c/1888402529/il_1588xN.1888402529_n58f.jpg';
  altBigPic = 'lego house front view from etsy page';

  smallPicTopLeft =
    'https://i.etsystatic.com/12310347/r/il/ba8519/1840915590/il_794xN.1840915590_rlm7.jpg';
  altSmallPicTopLeft = 'lego house front angle';

  smallPicTopRight =
    'https://i.etsystatic.com/12310347/r/il/339a27/1840915688/il_794xN.1840915688_8i58.jpg';
  altSmallPicTopRight = 'lego house backyard angle';

  smallPicBotLeft =
    'https://i.etsystatic.com/12310347/r/il/b30b5b/1888403009/il_794xN.1888403009_q3ml.jpg';
  altSmallPicBotLeft = 'lego house back porch angle';

  smallPicBotRight =
    'https://i.etsystatic.com/12310347/r/il/140e47/1840916124/il_794xN.1840916124_gvw6.jpg';
  altSmallPicBotRight = 'lego house side angle';

  // page: number;
  // constructor(value: number) {
  //   this.page = 1;
  // }

  src = 'little brick lane Etsy shop';
  page: number = 1;

  constructor() {}

  ngOnInit(): void {}
}


// let page = this.page;

  function clickUp(){
    console.log("clickup");
    // if(page <=19){
    //   page++;
    // } else if (page === 20){
    //   page =1;
    // } else{
    //   page++;
    // }
  }

  function clickDown(){
    console.log("down down down");
    // if(page <=20){
    //   page--;
    // } else if (page === 1){
    //   page =20;
    // } else{
    //   page--;
    // }
  }
