import { Component } from '@angular/core';
import { Match } from '../shared/match';
import { MatchesService } from './matches.service';

@Component({
  selector: 'fm-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  data: Match[];

  constructor(private matchService: MatchesService) { }

  ngOnInit() {
    this.data = this.matchService
      .getMatches()
      .then((response: any) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error: any) => {
        console.log('Error getMatches');
        console.log(error);
      });
  }
}
