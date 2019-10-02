import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardComponent } from './room-card.component';
import { Room } from 'src/app/services/beans';

describe('RoomCardComponent', () => {
  let component: RoomCardComponent;
  let fixture: ComponentFixture<RoomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCardComponent);
    component = fixture.componentInstance;
    component.room = new Room();
    component.room.id = '1';
    component.room.name = 'Fake room';
    component.room.players = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
