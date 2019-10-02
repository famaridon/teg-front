import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/services/beans';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {

  @Input() public room: Room;

  constructor() { }

  ngOnInit() {
  }

}
