import { Component } from '@angular/core';
import { Player } from '../shared/player';
import { Team } from '../shared/team';

@Component({
  selector: 'fm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  teams: Team[] = [{
    id: 1,
    name: 'Ajax',
    yearEstablished: 1990,
    isInternational: true
  }]

  players: Player[] = [{
    id: 1,
    name: 'Rick',
    yearOfBirth: 1990,
    team: this.teams[0]
  }, {
    id: 1,
    name: 'Rick',
    yearOfBirth: 1990,
    team: this.teams[0]
  }, {
    id: 1,
    name: 'Rick',
    yearOfBirth: 1990,
    team: this.teams[0]
  }]
}
