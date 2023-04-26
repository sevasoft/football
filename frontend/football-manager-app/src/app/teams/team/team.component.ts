import { Component, Input } from '@angular/core';
import { Team } from '../../shared/team';
import { TeamService } from './team.service';


@Component({
  selector: 'fm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  data: any;
  @Input() team: Team;

  constructor(private teamService: TeamService) { }

  addTeam(team: string) {
    this.teamService.add(team);
  }

  deleteTeam(id: number) {
    this.teamService.delete(id.toString());
    // this.teamsService.delete(this.team.id.toString());
  }
}
