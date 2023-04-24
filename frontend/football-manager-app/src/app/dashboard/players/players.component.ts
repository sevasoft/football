import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player';
import { PlayersService } from './players.service';

@Component({
  selector: 'fm-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  data: Player[];

  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.data = this.playerService
      .getPlayers()
      .then((response: any) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error: any) => {
        console.log('Error getPlayers');
        console.log(error);
      });
  }
}
