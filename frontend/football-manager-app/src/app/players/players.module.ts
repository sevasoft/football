import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersRoutingModule } from './players-routing.module';

@NgModule({
  declarations: [PlayersComponent, PlayersListComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  exports: [PlayersComponent],
})
export class PlayersModule { }
