import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from './player.service';

@Component({
  selector: 'fm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  id: string;
  teamId: string;
  name: string;
  birthYear: number;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getById();
  }

  setName(event: any) {
    this.name = event.target.value;
    // console.log(this.name);
  }

  setBirthYear(event: any) {
    this.birthYear = event.target.value;
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  update() {
    const player: string = `name:${this.name},year_of_birth:${this.birthYear}`;
    // console.log(player);

    this.playerService
      .update(this.id, player)
      .then((response: any) => {
        // TODO
        console.log('Success?');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  private getById() {
    this.playerService
      .getById(this.id)
      .then((response: any) => {
        // console.log(response.data);

        this.name = response.data.name.toString();
        this.birthYear = response.data.birthYear.toString();
        this.teamId = response.data.team.id.toString();
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
