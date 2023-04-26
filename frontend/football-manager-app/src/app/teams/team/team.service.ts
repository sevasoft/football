import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';
import { UpdateTeamDTO } from 'src/app/shared/updateTeamDTO';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private teamsService: TeamsService) {}

  add(team: string) {
    this.teamsService
      .addTeam(team)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(id: string) {
    if (confirm('Do you wish to delete this team?')) {
      this.teamsService
        .deleteTeamById(id)
        .then((response: any) => {
          console.log(response.data);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  update(id: string, team: UpdateTeamDTO) {
    this.teamsService
      .updateTeamById(id, team)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
