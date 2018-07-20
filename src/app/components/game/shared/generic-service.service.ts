import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  private baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getPersonages(id) {
    return this.http.get(this.baseUrl + 'people/' + id)
      .pipe(map(data => data));
  }

}