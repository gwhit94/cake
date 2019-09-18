import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {
  url: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID 6eaf9599ae0525c'
    })
  };
  constructor(private http: HttpClient) { }

  getImages(){
    this.url = "https://api.imgur.com/3/album/7WzNkmW/images";
    return this.http.get(this.url, this.httpOptions)
      .pipe(
        map(res => res["data"])
      );
  }
}
