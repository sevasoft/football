import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getPlayers(): any {
    let data: any;

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

  getPlayerByID(): any {
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

  postPlayerByID(playerID: number, playerData: any): any {
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
