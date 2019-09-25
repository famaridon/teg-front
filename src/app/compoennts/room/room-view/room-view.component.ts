import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/services/beans/room';
import { TegService } from 'src/app/services/teg.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  public rooms: Array<Room>;

  constructor(private tegService: TegService) { }

  ngOnInit() {
    this.tegService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

}
