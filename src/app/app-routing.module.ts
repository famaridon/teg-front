import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomViewComponent } from './compoennts/room/room-view/room-view.component';


const routes: Routes = [
  {path: '', component: RoomViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
