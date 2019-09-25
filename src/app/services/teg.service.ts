import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './beans/room';

@Injectable({
  providedIn: 'root'
})
export class TegService {

private readonly backend = 'http://vv0129:8080';

  constructor(private http: HttpClient) {
  }

  public ping(): Observable<string> {
    return this.http.get<string>(`${this.backend}/teg/ping`);
  }

  public getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(`${this.backend}/teg/rooms`);
  }

  public createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.backend}/teg/room?roomName=${room.name}`, room);
  }
}
