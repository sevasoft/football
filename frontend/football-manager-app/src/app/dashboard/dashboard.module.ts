import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PlayersModule } from '../players/players.module';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PlayersModule, TeamsModule, DashboardRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
