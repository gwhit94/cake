import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../imgur.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  data: any;
  error: string;
  loading: boolean;
  loaded: boolean;
  savedData: string;

  constructor(private imgur: ImgurService) { }

  ngOnInit() {
    this.checkForSaved();
  }
  checkForSaved(){
    this.data = localStorage.getItem("savedData");
    if (this.data !== null){
      this.data = JSON.parse(this.data);
      this.loading = false;
      this.loaded = true;
      return true;
    } else {
      return false;
    }
  }
  getGallery(){
    this.loading = true;

    if(this.checkForSaved()){
      return;
    }

    this.imgur.getImages().subscribe(
      res => {
        this.data = res;
        this.loading = false;
        this.loaded = true;
        localStorage.setItem("savedData", JSON.stringify(this.data));
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

}
