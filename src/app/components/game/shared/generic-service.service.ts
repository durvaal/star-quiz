import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Cacheable } from 'ngx-cacheable';


@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  private baseUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  @Cacheable()
  getPersonages(page) {
    return this.http.get(`${this.baseUrl}/people/?page=${page}`);
  }

}
