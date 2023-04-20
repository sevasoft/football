import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PlayersModule } from './players/players.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlayersModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
=======
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './teams/team/team.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [PlayerComponent, TeamComponent, TeamsComponent],
  imports: [CommonModule, SharedModule],
  exports: [PlayerComponent, TeamComponent],
>>>>>>> 713b737 (minor changes)
})
export class DashboardModule {}
