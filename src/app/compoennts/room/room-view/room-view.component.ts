import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/services/beans/room';
import { TegService } from 'src/app/services/teg.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  public rooms: Array<Room>;
  public newRoomName: string;

  constructor(private tegService: TegService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tegService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
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

}
