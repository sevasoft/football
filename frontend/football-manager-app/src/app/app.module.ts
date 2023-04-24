import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './matches/match/match.component';
import { PlayersModule } from './players/players.module';
import { MatchesModule } from './matches/matches.module';
import { TeamsModule } from './teams/teams.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlayersModule,
    TeamsModule,
    MatchesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
