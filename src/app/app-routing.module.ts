import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomListComponent } from './components/room/room-list/room-list.component';
import { RoomComponent } from './components/room/room/room.component';


const routes: Routes = [
  {path: '', component: RoomListComponent },
  {path: 'room/:id', component: RoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
