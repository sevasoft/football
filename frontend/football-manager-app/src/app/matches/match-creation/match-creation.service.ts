import { Injectable } from '@angular/core';
import { MatchesService } from '../matches.service';

@Injectable({
  providedIn: 'root',
})
export class MatchCreationService {
  constructor(private matchesService: MatchesService) {}

  create(match: string) {
    return this.matchesService.addMatch(match);
  }
}