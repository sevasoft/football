import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() { }

  /**
   * @param team New team to add. Pay attention to the string value (without spaces).
   *
   * Example: simons,2003,null
   *
   * Example: simons,2003,1
   */
  addTeam(team: string): any {
    return axios.post('http://localhost:8080/teams', team, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  /**
   * Retrieves a list of all the teamss in the database.
   */
  getTeams(): any {
    return axios.get('http://localhost:8080/teams');
  }

  /**
   * Retrieves the team with the passed ID if it exists.
   *
   * @param id Id of the team.
   */
  getTeamById(id: string): any {
    return axios.get(`http://localhost:8080/teams/${id}`);
  }

  /**
* Retrieves the teams with the passed team name if it exists.
*
* @param name Name of one the teams.
*/
  getTeamByName(name: string): any {
    console.log(name);
    return axios.get(`http://localhost:8080/teams/by_name/${name}`);
  }

  /**
     * @param id Id of the team.
     * @param team Team data to update. Pay attention to the string value (without spaces).
     *
     * Example: updateTeamById(1, 'simons,2003,1')
     */
  updateTeamById(id: string, team: string): any {
    let data: any;

    axios.put(`http://localhost:8080/teams/${id}`, team, {
      headers: { 'Content-Type': 'text/plain' },
    });

    return data;
  }

  /**
   *
   * @param id Id of the match.
   */
  deleteTeamById(id: string): any {
    axios.delete(`http://localhost:8080/teams/${id}`);
    // TODO: search for a better solution to rerender page like in React.
    window.location.reload();
  }

  /**
 * Retrieves a list of all the matches in the database.
 */
  deleteAllTeams(): any {
    axios.delete('http://localhost:8080/teams');
    window.location.reload();
  }
}

