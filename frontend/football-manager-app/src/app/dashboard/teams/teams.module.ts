import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
