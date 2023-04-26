import { Injectable } from '@angular/core';
import { PlayersService } from '../players.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersListService {
  constructor(private playersService: PlayersService) { }

  add(player: string) {
    this.playersService
      .addPlayer(player)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(id: string) {
    if (confirm("Do you wish to delete this player?")) {
      this.playersService
        .deletePlayerById(id)
        .then((response: any) => {
          console.log(response.data);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  update(id: string, player: string) {
    this.playersService
      .updatePlayerById(id, player)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
