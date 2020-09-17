import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
<<<<<<< HEAD
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
=======
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  this.hideTheText();
  }
  hideTheText() {
    const words = document.getElementsByClassName(
      'hideMeText'
    ) as HTMLCollectionOf<HTMLElement>;

    words[0].style.display = 'none';
    words[1].style.display = 'none';
  }
}

// hideMeText thought it would work but it can't grab the element from another component
>>>>>>> 7fc4088ed6f6c324645796dcc54e5a80c2a41eae
