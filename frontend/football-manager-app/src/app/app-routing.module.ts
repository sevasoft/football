import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'Teams',
    loadChildren: () =>
      import('./teams/teams.module')
        .then(m => m.TeamsModule)
  }, {
    path: 'Players',
    loadChildren: () =>
      import('./players/players.module')
        .then(m => m.PlayersModule)
  }, {
    path: 'Matches',
    loadChildren: () =>
      import('./matches/matches.module')
        .then(m => m.MatchesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
