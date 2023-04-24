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
    // For testing. Feel free to replace the service functions to the right places in the code base.
    // (STRING)player_name,(INT)year_of_birth,(INT)team_id
    this.playerService
      .addPlayer('simons,2003,null')
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.data = this.playerService
      .getPlayers()
      .then((response: any) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
