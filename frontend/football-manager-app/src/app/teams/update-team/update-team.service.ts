import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';


@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private teamsService: TeamsService) {}

  getById(id: string): any {
    return this.teamsService.getTeamById(id);
  }
}
