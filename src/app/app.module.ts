import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomListComponent } from './components/room/room-list/room-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomComponent } from './components/room/room/room.component';
import { FormsModule } from '@angular/forms';
import { RoomCardComponent } from './components/room/room-card/room-card.component';
import { RoomEditComponent } from './components/room/room-edit/room-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomComponent,
    RoomCardComponent,
    RoomEditComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
