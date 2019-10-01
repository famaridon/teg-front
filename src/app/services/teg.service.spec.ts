import { TestBed, async, getTestBed } from '@angular/core/testing';

import { TegService } from './teg.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Room, Player } from './beans/room';

const backend = 'http://vv0129:8080';

describe('TegService', () => {


  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
    }).compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  it('should be created', () => {
    const service: TegService = TestBed.get(TegService);
    expect(service).toBeTruthy();
  });

  it('get a single room by it\'s id', () => {
    const dummyRoom = { name: 'famaridon', id: '1', players: null };

    const service: TegService = TestBed.get(TegService);
    service.getRoom('1').subscribe((room) => {
      expect(room).toEqual(dummyRoom);
    });

    const req = httpMock.expectOne(`${backend}/teg/room/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRoom);
  });

  it('join a room by it\'s id and recive a player', () => {
    const room = new Room();
    room.id = '1';
    const dummyPlayer = new Player();
    dummyPlayer.id = 'random';
    dummyPlayer.name = 'Captain America';

    const service: TegService = TestBed.get(TegService);
    service.joinRoom(room).subscribe((player) => {
      expect(player).toEqual(dummyPlayer);
    });

    const req = httpMock.expectOne(`${backend}/teg/rooms/1/join`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPlayer);
  });

  it('create a new room and get back the room with an id', () => {

    const service: TegService = TestBed.get(TegService);
    const room = new Room();
    room.name = 'Creation test';
    service.createRoom(room).subscribe((createdRoom) => {
      expect(createdRoom.id).toBeTruthy();
      expect(createdRoom.name).toEqual(room.name);
    });

    const req = httpMock.expectOne(`http://localhost:8080/teg/rooms`);
    expect(req.request.method).toBe('POST');
    req.flush({name: 'Creation test', id: 1});
  });

});
