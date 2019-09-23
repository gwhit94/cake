import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImgurService } from '../imgur.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  data: any;
  error: string;
  loading: boolean;
  savedData: string;

  constructor(private imgur: ImgurService) { }

  ngOnInit() {
    this.loading = true;
    this.getGallery();
  }
  // navigates to image link on click
  openLink(link){
    window.location.href = link;
  }
  // Function to check if gallery data already in local storage
  checkForSaved(){
    this.data = localStorage.getItem("savedData");
    if (this.data !== null){
      this.data = JSON.parse(this.data);
      this.loading = false;
      return true;
    } else {
      return false;
    }
  }
  // if gallery not already saved, retrieves the data from imgur album
  getGallery(){

    if(this.checkForSaved()){
      return;
    }

    this.imgur.getImages().subscribe(
      res => {
        this.data = res;
        this.loading = false;
        localStorage.setItem("savedData", JSON.stringify(this.data));
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

}
// Todo: Go back to previous version where images loaded are the smaller version
// to reduce bandwidth usage and consume less resources
