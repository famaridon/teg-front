import { Component, OnInit, Input } from '@angular/core';
import { Level, LEVELS } from 'src/app/services/beans/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  private _level: number;
  private _levelBean: Level;

  @Input()
  public set level(level: number) {
    this._level = level;
    this._levelBean = LEVELS[level];
  }

  public get levelBean(): Level {
    return this._levelBean;
  }

  constructor() { }

  ngOnInit() {
  }

}
