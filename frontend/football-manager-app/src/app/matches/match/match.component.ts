import { Component, Input } from '@angular/core';
import { Match } from 'src/app/shared/match';
import { MatchService } from './match.service';

@Component({
  selector: 'fm-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  data: any;
  @Input() match: Match;

  constructor(private matchService: MatchService) { }

  addMatch(match: string) {
    this.matchService.add(match);
  }

  deleteMatch() {
    this.matchService.delete(this.match.id.toString());
  }
}
