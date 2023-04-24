import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from './match/match.component';
import { MatchesRoutingModule } from './matches-routing.module';



@NgModule({
  declarations: [
    MatchesComponent,
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ],
  exports: [
    MatchesComponent
  ]
})
export class MatchesModule { }
