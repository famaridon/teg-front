import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Room, Player } from './beans/room';

@Injectable({
  providedIn: 'root'
})
export class TegService {

private readonly backend = 'http://vv0129:8080';

  constructor(private http: HttpClient) {
  }

  public getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(`${this.backend}/teg/rooms`);
  }

  public joinRoom(room: Room): Observable<Player> {
    return this.http.post<Player>(`${this.backend}/teg/rooms/${room.id}/join`, {});
  }

  public getRoomsEvents(): Observable<Array<Room>> {
    const eventSource = new EventSource(`${this.backend}/teg/rooms/events`);
    const subject = new Subject<Array<Room>>();
    eventSource.addEventListener('message', (message) => {
      subject.next(JSON.parse(message.data));
    });
    // eventSource.addEventListener('error', (err) => {
    //   subject.error(err);
    //   eventSource.close();
    // });
    return subject.asObservable();
  }

  public createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.backend}/teg/room?roomName=${room.name}`, room);
  }
}
