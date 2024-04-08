import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


export class store {
  _id!: string;
  name!: string;
  price!: string;
  description!: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Node/Express API
  REST_API: string = 'http://localhost:8080/api';

  //Http headers
  HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //add
  addStore(data: store): Observable<any> {
    const API_URL = `${this.REST_API}/add-store`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //get all objects
  getStores() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  //get single objects
  getStore(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/read-store/${id}`;
    return this.httpClient.get(API_URL, { headers: this.HttpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  //update objects
  updateStore(id: any, data: any): Observable<any> {
    const API_URL = `${this.REST_API}/update-store/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.HttpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //delete objects
  deleteStore(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/delete-store/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.HttpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //error
  handleError(err: HttpErrorResponse) {
    let errorMassage = '';
    if (err.error instanceof ErrorEvent) {
      //Handle client error
      errorMassage = err.error.message
    }
    else {
      //Handle server error
      errorMassage = `Error Code: ${err.status}\nMessage:${err.message}`
    }
    console.log(errorMassage);
    return throwError(errorMassage);
  }
}
