import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
