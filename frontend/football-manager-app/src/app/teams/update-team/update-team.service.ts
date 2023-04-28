import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';
import { UpdateTeamDTO } from 'src/app/shared/updateTeamDTO';

@Injectable({
  providedIn: 'root',
})
export class UpdateTeamService {
  constructor(private teamsService: TeamsService) { }

  getById(id: string): any {
    return this.teamsService.getTeamById(id);
  }
  update(id: string, player: UpdateTeamDTO) {
    return this.teamsService.updateTeamById(id, player);
  }
}
