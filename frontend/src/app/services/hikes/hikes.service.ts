import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HikesService {

  constructor(private http: HttpClient) { }

  getAllHikes() {
    return this.http.get('/api/hikes');
  }
}
