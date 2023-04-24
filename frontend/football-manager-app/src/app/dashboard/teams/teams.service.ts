import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() { }

  getTeams(): any {
    return (
      axios
        // .get('https://dummyjson.com/todos')
        .get('http://localhost:8080/players')
    );
    // .then((response) => {
    //   data = response.data;
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // return data;
  }

  getTeamByID(): any {
    let data: any;

    axios
      // .get('https://dummyjson.com/todos')
      .get('http://localhost:8080/players/{playerID}')
      .then((response) => {
        data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return data;
  }

  postTeamByID(playerID: number, playerData: any): any {
    let data: any;

    axios
      .post(`http://localhost:8080/players/${playerID}`, playerData)
      .then((response) => {
        data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return data;
  }
}
