import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomViewComponent } from './room-view.component';
import { TegService } from 'src/app/services/teg.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoomComponent } from 'src/app/components/room/room/room.component';
import { FormsModule } from '@angular/forms';

const dummyRooms = [
  { name: 'famaridon', id: '1' },
  { name: 'quentin' , id: '2'}
];

class MockTegService {
  watchRoomsEvents() {
    return of(dummyRooms);
  }
}

describe('RoomViewComponent', () => {
  let component: RoomViewComponent;
  let tegServiceMock: TegService;
  let fixture: ComponentFixture<RoomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: TegService, useClass: MockTegService}],
      declarations: [ RoomViewComponent, RoomComponent ],
      imports: [AppRoutingModule, FormsModule]
    })
    .compileComponents();
    tegServiceMock = TestBed.get(TegService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all rooms', () => {
    expect(component).toBeTruthy();
  });
});
