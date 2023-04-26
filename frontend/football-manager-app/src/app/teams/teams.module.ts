import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { UpdateTeamComponent } from './update-team/update-team.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    UpdateTeamComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
