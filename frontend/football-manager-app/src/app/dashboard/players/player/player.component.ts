import { Component, Input } from '@angular/core';
import { Player } from '../../../shared/player';

@Component({
  selector: 'fm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() player: Player;
}
