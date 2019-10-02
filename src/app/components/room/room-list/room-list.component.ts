import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/services/beans/room';
import { TegService } from 'src/app/services/teg.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  public rooms: Array<Room>;
  public newRoomName: string;

  constructor(private tegService: TegService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tegService.watchRoomsEvents().pipe(retry())
    .subscribe((rooms) => {
      this.rooms = rooms;
    },
    (err) => {
      console.log(err);
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result
      .then((result) => {
        const newRoom = new Room();
        newRoom.name = this.newRoomName;
        this.newRoomName = null;
        this.tegService.createRoom(newRoom).subscribe((room) => {
          console.log('room created : ');
          console.dir(room);
        });
      });
  }

  public join(room: Room) {
    this.tegService.joinRoom(room).subscribe((player) => {
      console.log(`I'm player ${player.id}`);
    });
  }

}
