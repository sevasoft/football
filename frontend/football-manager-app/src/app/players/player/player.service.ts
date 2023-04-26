import { Injectable } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from 'src/app/shared/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private playersService: PlayersService) {}

  getById(id: string): any {
    return this.playersService.getPlayerById(id);
  }
}
