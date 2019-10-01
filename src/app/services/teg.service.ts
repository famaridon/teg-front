import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Room, Player } from './beans/room';
import { SseClientService, SseMessageEvent } from './sse-client.service';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TegService {

  private readonly backend = 'http://vv0129:8080';

  constructor(private http: HttpClient, private sse: SseClientService) {
  }

  public getRoom(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.backend}/teg/room/${id}`);
  }

  public joinRoom(room: Room): Observable<Player> {
    return this.http.post<Player>(`${this.backend}/teg/rooms/${room.id}/join`, {});
  }

  public createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.backend}/teg/room?roomName=${room.name}`, room);
  }

  public watchRoomsEvents(): Observable<Array<Room>> {
    return this.sse.watch<Array<Room>>(`${this.backend}/teg/rooms/events`)
      .pipe(filter(event => event instanceof SseMessageEvent))
      .pipe(map(messageEvent => messageEvent.getData()));
  }


}
