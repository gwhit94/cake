import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../imgur.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  data: any;

  constructor(private imgur: ImgurService) { }

  ngOnInit() {
  }
  getGallery(){
    this.imgur.getImages()
      .subscribe(res => { this.data = res; this.assignThumb() });
  }
  assignThumb(){
    this.data.forEach(element => {
      element["thumbSqr"] = `https://i.imgur.com/${element.id}b.jpg`;
      element["thumbMed"] = `https://i.imgur.com/${element.id}m.jpg`;
      element["thumbLrg"] = `https://i.imgur.com/${element.id}l.jpg`;
    });
  }


}
