import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WarsService {

  baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {
  }
      /* GET API */
      getWars(page:number): Observable<any> {
        const url = `${this.baseUrl}/people/?page=${page}`;
        return this.http.get(url);
      }


}
