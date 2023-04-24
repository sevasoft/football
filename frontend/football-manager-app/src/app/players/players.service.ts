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
    console.log(id);
    return axios.get(`http://localhost:8080/players/${id}`);
  }

  /**
* Retrieves the players with the passed name if it exists.
*
* @param name Name of one the teams.
*/
  getPlayerByName(name: string): any {
    console.log(name);
    return axios.get(`http://localhost:8080/players/by_name/${name}`);
  }

  /**
   * @param id Id of the player.
   * @param player Player data to update. Pay attention to the string value (without spaces).
   *
   * Example: updatePlayerById(1, 'simons,2003,1')
   */
  updatePlayerById(id: string, player: string): any {
    return axios.put(`http://localhost:8080/players/${id}`, player, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  /**
   *
   * @param id Id of the player.
   */
  deletePlayerById(id: string): any {
    axios.delete(`http://localhost:8080/players/${id}`);
    // TODO: search for a better solution to rerender page like in React.
    window.location.reload();
  }

  /**
* Retrieves a list of all the matches in the database.
*/
  deleteAllPlayers(): any {
    axios.delete('http://localhost:8080/players');
    window.location.reload();
  }
}
