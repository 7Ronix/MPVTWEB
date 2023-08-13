import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  changeBackgroundCounter: any;
  images: any;

  constructor() { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    setInterval(() => {
      // this.changeBackgroundCounter = this.changeBackgroundCounter + 1;
      // if (this.changeBackgroundCounter > this.images.length - 1) {
      //   this.changeBackgroundCounter = 0;
      // }
    }, 1000);
  }


}
