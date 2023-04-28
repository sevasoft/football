import { Component } from '@angular/core';
import { PlayerCreationService } from './player-creation.service';

@Component({
  selector: 'fm-player-creation',
  templateUrl: './player-creation.component.html',
  styleUrls: ['./player-creation.component.css'],
})
export class PlayerCreationComponent {
  teamId: string;
  name: string;
  birthYear: number;

  constructor(private playerCreationService: PlayerCreationService) { }

  setName(event: any) {
    this.name = event.target.value;
    // console.log(this.name);
  }

  setBirthYear(event: any) {
    this.birthYear = event.target.value;
  }

  setTeamId(event: any) {
    this.teamId = event.target.value;
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  create() {
    const player: string = `${this.name},${this.birthYear},${this.teamId}`;
    // const player: string = 'Xavi Simons,2003,11';
    // console.log(player);

    this.playerCreationService
      .create(player)
      .then((response: any) => {
        // TODO
        console.log('Success?');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
