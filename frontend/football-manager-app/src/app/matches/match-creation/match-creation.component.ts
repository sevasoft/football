import { Component } from '@angular/core';
import { MatchCreationService } from './match-creation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fm-match-creation',
  templateUrl: './match-creation.component.html',
  styleUrls: ['./match-creation.component.css'],
})
export class MatchCreationComponent {
  id: number;                 /////////Might have to be a string
  team1: string;
  team2: string;
  goalsTeam1: number;
  goalsTeam2: number;
  matchDate: number;

  constructor(private matchCreationService: MatchCreationService,
    private router: Router 
    ) { }

  setTeam1(event: any) {
    this.team1 = event.target.value;
    // console.log(this.name);
  }

  setTeam2(event: any) {
    this.team2 = event.target.value;
  }

  setGoalsTeam1(event: any) {
    this.goalsTeam1 = event.target.value;
  }
  setGoalsTeam2(event: any) {
    this.goalsTeam2 = event.target.value;
  }
  setMatchDate(event: any) {
    this.matchDate = event.target.value;
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  create() {
    const match: string = `${this.team1},${this.team2},${this.goalsTeam1},${this.goalsTeam2},${this.matchDate}`;
    // const match: string = 'PSV,Ajax,3,1,31092023';
    // console.log(player);

    this.matchCreationService
      .create(match)
      .then((response: any) => {
        // TODO
        console.log('Success?');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  backClicked() {
    this.router.navigateByUrl('/matches');  }
}