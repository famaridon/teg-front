import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelComponent } from './level.component';
import { By } from '@angular/platform-browser';

describe('LevelComponent', () => {
  let component: LevelComponent;
  let dicesEl: HTMLElement;
  let shipsEl: HTMLElement;
  let costEl: HTMLElement;
  let pointsEl: HTMLElement;
  let fixture: ComponentFixture<LevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelComponent);
    component = fixture.componentInstance;
    component.level = 1 ;
    fixture.detectChanges();
    dicesEl = fixture.debugElement.query(By.css('.dices')).nativeElement;
    shipsEl = fixture.debugElement.query(By.css('.ships')).nativeElement;
    costEl = fixture.debugElement.query(By.css('.cost')).nativeElement;
    pointsEl = fixture.debugElement.query(By.css('.points')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dices', () => {
    expect(dicesEl).toBeTruthy();
    expect(dicesEl.textContent).toBe('5');
  });

  it('should display ships', () => {
    expect(shipsEl).toBeTruthy();
    expect(shipsEl.textContent).toBe('2');
  });

  it('should display cost', () => {
    expect(costEl).toBeTruthy();
    expect(costEl.textContent).toBe('2');
  });

  it('should display points', () => {
    expect(pointsEl).toBeTruthy();
    expect(pointsEl.textContent).toBe('1');
  });

});
