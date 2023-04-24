import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  declarations: [PlayersComponent, PlayersListComponent],
  imports: [CommonModule],
  exports: [PlayersComponent],
})
export class PlayersModule {}
