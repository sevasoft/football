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
      .addPlayer('simons,2003,2')
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.playerService
      .updatePlayerById('2', 'luuk de jong,1990,3')
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log('Error updatePlayerById');
        console.log(error);
      });

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

    this.playerService
      .getPlayerById('1')
      .then((response: any) => {
        console.log('Run getPlayerById');
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log('Error getPlayerById');
        console.log(error);
      });
  }
}
