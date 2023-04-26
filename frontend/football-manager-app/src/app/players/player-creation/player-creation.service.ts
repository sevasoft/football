import { Injectable } from '@angular/core';
import { PlayersService } from '../players.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerCreationService {
  constructor(private playersService: PlayersService) {}

  create(player: string) {
    return this.playersService.addPlayer(player);
  }
}
