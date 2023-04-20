import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PlayerComponent,
    TeamComponent
  ]
})
export class DashboardModule { }
