import { Component, Input } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamsService } from './teams.service';

@Component({
  selector: 'fm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  data: Team[];

  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.data = this.teamService
      .getTeams()
      .then((response: any) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
