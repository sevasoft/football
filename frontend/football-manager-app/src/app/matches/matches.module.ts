import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from './match/match.component';
import { MatchesRoutingModule } from './matches-routing.module';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { DropdownComponent } from '../dropdown-component/dropdown-component.component';
import { MatchCreationComponent } from './match-creation/match-creation.component';



@NgModule({
  declarations: [
    MatchesComponent,
    MatchComponent,
    EditMatchComponent,
    MatchCreationComponent,
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    DropdownComponent,
  ],
  exports: [
    MatchesComponent
  ]
})
export class MatchesModule { }
