import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/services/beans';
import { TegService } from 'src/app/services/teg.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {

  @Input() public room: Room;

  constructor(private tegService: TegService) { }

  ngOnInit() {
  }

  public join(room: Room) {
    this.tegService.joinRoom(room).subscribe((player) => {
      console.log(`I'm player ${player.id}`);
    });
  }

}
