import { Component, Input } from '@angular/core';
import { Player } from '../../../shared/player';
import { PlayerService } from './player.service';

@Component({
  selector: 'fm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  data: any;
  @Input() player: Player;

  constructor(private playerService: PlayerService) {}

  addPlayer(player: string) {
    this.playerService.add(player);
  }

  deletePlayer() {
    this.playerService.delete(this.player.id.toString());
  }
}
