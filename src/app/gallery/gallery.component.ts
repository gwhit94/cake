import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../imgur.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  data: any;
  error: string;
  loading: boolean;

  constructor(private imgur: ImgurService) { }

  ngOnInit() {
  }
  getGallery(){
    this.loading = true;

    this.imgur.getImages().subscribe(
      res => {
        this.data = res;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

}
