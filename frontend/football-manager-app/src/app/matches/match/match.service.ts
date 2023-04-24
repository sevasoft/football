import { Injectable } from '@angular/core';
import { MatchesService } from '../matches.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private matchesService: MatchesService) {}

  add(match: string) {
    this.matchesService
      .addMatch(match)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(id: string) {
    this.matchesService
      .deleteMatchById(id)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  update(id: string, match: string) {
    this.matchesService
      .updateMatchById(id, match)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
