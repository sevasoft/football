import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersComponent
  ]
})
export class PlayersModule { }
