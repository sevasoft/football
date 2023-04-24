import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';
import { TeamsRoutingModule } from './teams-routing.module';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent
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
