import { TestBed, async, getTestBed } from '@angular/core/testing';

import { TegService } from './teg.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Room } from './beans/room';

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

  it('can get some rooms', () => {

    const dummyRooms = [
      { name: 'famaridon', id: '1' },
      { name: 'quentin' , id: '2'}
    ];

    const service: TegService = TestBed.get(TegService);
    service.getRooms().subscribe((rooms) => {
      expect(rooms.length).toBe(2);
      expect(rooms).toEqual(dummyRooms);
      expect(rooms[0].name).toEqual('famaridon');
    });

    const req = httpMock.expectOne(`http://localhost:8080/teg/rooms`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRooms);
  });

  it('can create room', () => {

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
