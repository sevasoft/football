import { TestBed } from '@angular/core/testing';

import { MatchCreationService } from './match-creation.service';

describe('MatchCreationService', () => {
  let service: MatchCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
