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
}

