import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PlayersComponent
  ]
})
export class PlayersModule { }
