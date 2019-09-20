import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {
  private url: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID'
    })
  };
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]>{
    this.url = "";
    return this.http.get<Image[]>(this.url, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError),
        map(res => res["data"])
      );
  }
  handleError(error){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
