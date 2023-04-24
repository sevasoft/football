import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  /**
   * @param player New player to add. Pay attention to the string value (without spaces).
   *
   * Example: simons,2003,null
   *
   * Example: simons,2003,1
   */
  addPlayer(player: string): any {
    return axios.post('http://localhost:8080/players', player, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  /**
   * Retrieves a list of all the players in the database.
   */
  getPlayers(): any {
    return axios.get('http://localhost:8080/players');
  }

  /**
   * Retrieves the player with the passed ID if it exists.
   *
   * @param id Id of the player.
   */
  getPlayerById(id: string): any {
    return axios.get(`http://localhost:8080/players/${id}`);
  }

  /**
   * @param id Id of the player.
   * @param player Player data to update. Pay attention to the string value (without spaces).
   *
   * Example: updatePlayerById(1, 'simons,2003,1')
   */
  updatePlayerById(id: string, player: string): any {
    let data: any;

    axios.put(`http://localhost:8080/players/${id}`, player, {
      headers: { 'Content-Type': 'text/plain' },
    });

    return data;
  }
}
