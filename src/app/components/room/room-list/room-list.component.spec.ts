import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListComponent } from './room-list.component';
import { TegService } from 'src/app/services/teg.service';
import { of } from 'rxjs';
import { RoomComponent } from 'src/app/components/room/room/room.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RoomCardComponent } from '../room-card/room-card.component';

const dummyRooms = [
  { name: 'famaridon', id: '1' },
  { name: 'quentin', id: '2' }
];

class MockTegService {
  watchRoomsEvents() {
    return of(dummyRooms);
  }
}

describe('RoomListComponent', () => {
  let component: RoomListComponent;
  let tegServiceMock: TegService;
  let fixture: ComponentFixture<RoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TegService, useClass: MockTegService }],
      declarations: [RoomListComponent, RoomComponent, RoomCardComponent],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
    tegServiceMock = TestBed.get(TegService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all rooms', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.queryAll(By.css('app-room-card')).length).toBe(2);
  });

  it('should display create button', () => {
    expect(fixture.debugElement.query(By.css('button.create'))).toBeTruthy();
  });
});
