import { Component } from '@angular/core';
import { TeamCreationService } from './team-creation.service';

@Component({
  selector: 'fm-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent {
  name: string;
  establishedIn: number;
  international: boolean;

  constructor(private teamCreationService: TeamCreationService) { }

  setName(event: any) {
    this.name = event.target.value;
    // console.log(this.name);
  }

  setEstablishedIn(event: any) {
    this.establishedIn = event.target.value;
  }

  setInternational(event: any) {
    this.international = event.target.value;
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  create() {
    const player: string = `${this.name},${this.establishedIn},${this.international}`;
    // const player: string = 'Xavi Simons,2003,11';
    // console.log(player);

    this.teamCreationService
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
