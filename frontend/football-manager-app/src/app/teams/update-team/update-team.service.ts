import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UpdateTeamService {
  constructor(private teamsService: TeamsService, private _location: Location) { }

  getById(id: string): any {
    return this.teamsService.getTeamById(id);
  }
  update(id: string, team: string) {
    return this.teamsService.updateTeamById(id, team);
  }
}

