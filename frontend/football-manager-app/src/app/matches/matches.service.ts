import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor() { }

  /**
   * @param match New match to add. Pay attention to the string value (without spaces).
   *
   * Example: ...
   *
   * Example: ...
   */
  addMatch(match: string): any {
    return axios.post('http://localhost:8080/matches', match, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  /**
   * Retrieves a list of all the matches in the database.
   */
  getMatches(): any {
    return axios.get('http://localhost:8080/matches');
  }

  /**
   * Retrieves the match with the passed ID if it exists.
   *
   * @param id Id of the match.
   */
  getMatchById(id: string): any {
    console.log(id);
    return axios.get(`http://localhost:8080/matches/${id}`);
  }

  /**
 * Retrieves the match with the passed team name if it exists.
 *
 * @param teamName Name of one the teams.
 */
  getMatchByTeamName(teamName: string): any {
    console.log(teamName);
    return axios.get(`http://localhost:8080/matches/by_name/${teamName}`);
  }

  /**
   * @param id Id of the player.
   * @param match match data to update. Pay attention to the string value (without spaces).
   *
   * Example: updateMatchById(_TO ADD EXAMPLE_)
   */
  updateMatchById(id: string, match: string): any {
    return axios.put(`http://localhost:8080/matches/${id}`, match, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  /**
   *
   * @param id Id of the match.
   */
  deleteMatchById(id: string): any {
    axios.delete(`http://localhost:8080/matches/${id}`);
    // TODO: search for a better solution to rerender page like in React.
    window.location.reload();
  }

  /**
 * Retrieves a list of all the matches in the database.
 */
  deleteAllMatches(): any {
    axios.delete('http://localhost:8080/matches');
    window.location.reload();
  }
}
