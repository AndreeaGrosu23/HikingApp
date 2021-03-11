import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hike } from 'src/app/model/hike.interface';

@Injectable({
  providedIn: 'root'
})
export class HikesService {

  constructor(private http: HttpClient) { }

  getAllHikes() {
    return this.http.get('/api/hikes');
  }

  post(hike: Hike): Observable<Hike> {
    return this.http.post<Hike>('/api/hikes', hike);
  }
}
