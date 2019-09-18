import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonyComponent } from './colony.component';

describe('ColonyComponent', () => {
  let component: ColonyComponent;
  let fixture: ComponentFixture<ColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
