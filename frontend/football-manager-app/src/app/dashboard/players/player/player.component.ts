import { Component, Input } from '@angular/core';
import { Player } from '../../../shared/player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'fm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  data: any
  @Input() player: Player;

  constructor(private playerService: PlayersService) { }

  // ngOnInit() {
  //   this.data = this.playerService.postPlayerByID();
  // }
}
