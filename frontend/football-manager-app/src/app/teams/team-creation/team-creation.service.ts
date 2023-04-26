import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';

@Injectable({
  providedIn: 'root'
})
export class TeamCreationService {
  constructor(private teamsService: TeamsService) { }

  create(team: string) {
    return this.teamsService.addTeam(team);
  }
}
