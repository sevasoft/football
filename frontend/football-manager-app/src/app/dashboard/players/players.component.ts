import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player';
import { PlayersService } from './players.service';

@Component({
  selector: 'fm-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  data: any;
  @Input() players: Player[];

  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.data = this.playerService.getPlayers();
  }
}
