import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './beans/room';

@Injectable({
  providedIn: 'root'
})
export class TegService {

  constructor(private http: HttpClient) {
  }

  public ping(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/teg/ping');
  }

  public getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>('http://localhost:8080/teg/rooms');
  }
}
