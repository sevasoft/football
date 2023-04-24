import { Component, Input } from '@angular/core';
import { Team } from '../../shared/team';

@Component({
  selector: 'fm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  data: any;
  @Input() team: Team;

  // constructor(private teamService: TeamsService) {}
}