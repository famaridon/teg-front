import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomViewComponent } from './compoennts/room/room-view/room-view.component';
import { RoomComponent } from './components/room/room/room.component';


const routes: Routes = [
  {path: '', component: RoomViewComponent },
  {path: 'room/:id', component: RoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
