import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './players/player/player.component';
import { UpdateTeamComponent } from './teams/update-team/update-team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'matches',
    loadChildren: () =>
      import('./matches/matches.module').then((m) => m.MatchesModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./players/players.module').then((m) => m.PlayersModule),
  },
<<<<<<< HEAD
  { path: 'players/:id', component: PlayerComponent },
  { path: 'teams/:id', component: UpdateTeamComponent },
=======
  { path: 'players/:id', component: PlayerComponent }
>>>>>>> 0d1ef1f85e905e6d6c0165b8540d6c8b7da04428
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
